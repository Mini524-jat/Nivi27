(() => {
  "use strict";

  const spreads = window.scrapbookSpreads;
  const book = document.querySelector("#book");
  const spreadElement = document.querySelector("#spread");
  const underSpread = document.querySelector("#underSpread");
  const turnLayer = document.querySelector("#turnLayer");
  const count = document.querySelector("#spreadCount");
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  const autoplayButton = document.querySelector("#autoplay");
  const resetButton = document.querySelector("#reset");
  const comfortDialog = document.querySelector("#comfortDialog");
  const comfortTitle = document.querySelector("#comfortTitle");
  const comfortMessage = document.querySelector("#comfortMessage");
  const closeComfort = document.querySelector("#closeComfort");

  let current = 0;
  let turning = false;
  let autoplayTimer = null;
  let autoplayActive = false;
  let touchStartX = null;
  let turnFallback = null;

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function renderPage(page, side, pageIndex) {
    const paragraphs = (page.paragraphs || []).map((paragraph) =>
      `<p>${escapeHTML(paragraph)}</p>`
    ).join("");
    const items = (page.items || []).map((item, index) =>
      `<li style="--item-index:${index}"><span aria-hidden="true">${index % 2 ? "✦" : "♡"}</span>${escapeHTML(item)}</li>`
    ).join("");
    const comfortCards = (page.cardIds || []).map((id) => {
      const card = window.emergencyCards.find((entry) => entry.id === id);
      if (!card) return "";
      return `<button class="comfort-card" type="button" data-comfort="${escapeHTML(card.id)}">
        <span>${escapeHTML(card.title)}</span><span class="comfort-card__hint" aria-hidden="true">open note ↗</span>
      </button>`;
    }).join("");
    const ornaments = (page.ornaments || []).map((ornament, index) =>
      `<span class="sticker sticker--${index % 2 ? "two" : "one"}" aria-hidden="true">${escapeHTML(ornament)}</span>`
    ).join("");
    const tone = page.tone ? ` page--${escapeHTML(page.tone)}` : "";
    const subtitle = page.subtitle ? `<p class="page-subhead">${escapeHTML(page.subtitle)}</p>` : "";
    const illustration = page.illustration
      ? `<img class="page-illustration" src="${escapeHTML(page.illustration)}" alt="" aria-hidden="true">`
      : "";
    const content = paragraphs || items || comfortCards
      ? `<div class="page-copy" role="region" aria-label="${escapeHTML(page.title)} text" tabindex="0">${paragraphs}${items ? `<ul class="reminder-list">${items}</ul>` : ""}${comfortCards ? `<div class="comfort-cards">${comfortCards}</div>` : ""}</div>`
      : "";
    const footer = page.footerNote ? `<p class="page-footer-note">${escapeHTML(page.footerNote)}</p>` : "";
    const action = page.action
      ? `<button class="page-action" type="button" data-action="${escapeHTML(page.action.action)}">${escapeHTML(page.action.label)}</button>`
      : "";
    return `<article class="page page--${side} layout-${escapeHTML(page.layout)}${tone}">
      <h2 class="page-heading">${escapeHTML(page.title)}</h2>
      ${subtitle}
      ${illustration}
      ${content}
      ${footer}
      ${action}
      ${ornaments}
      <span class="tape tape--one" aria-hidden="true"></span>
      <span class="tape tape--two" aria-hidden="true"></span>
      <span class="page-number">${String(pageIndex + 1).padStart(2, "0")}</span>
    </article>`;
  }

  function renderSpread(target, spread, index) {
    target.innerHTML = renderPage(spread.left, "left", index * 2) +
      renderPage(spread.right, "right", index * 2 + 1);
  }

  function updateControls() {
    count.innerHTML = `${String(current + 1).padStart(2, "0")} <i>/</i> ${String(spreads.length).padStart(2, "0")}`;
    previousButton.disabled = turning || current === 0;
    nextButton.disabled = turning || current === spreads.length - 1;
    resetButton.disabled = turning || current === 0;
    autoplayButton.disabled = turning && !autoplayActive;
  }

  function stopAutoplay() {
    if (autoplayActive) {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = null;
    }
    autoplayActive = false;
    autoplayButton.setAttribute("aria-label", "Start autoplay");
    autoplayButton.title = "Play scrapbook";
    autoplayButton.querySelector("span").textContent = "▶";
    updateControls();
  }

  function scheduleAutoplay() {
    if (!autoplayActive) return;
    if (current >= spreads.length - 1) {
      stopAutoplay();
      return;
    }
    autoplayTimer = window.setTimeout(() => {
      autoplayTimer = null;
      navigate(1, true);
    }, 1100);
  }

  function finishTurn(direction, nextIndex) {
    if (!turning) return;
    window.clearTimeout(turnFallback);
    turning = false;
    current = nextIndex;
    renderSpread(spreadElement, spreads[current], current);
    underSpread.innerHTML = "";
    turnLayer.innerHTML = "";
    book.classList.remove("is-turning", "is-forward", "is-backward");
    updateControls();
    if (direction === 1 && autoplayActive) scheduleAutoplay();
  }

  function navigate(direction, fromAutoplay = false) {
    if (turning) return;
    const nextIndex = current + direction;
    if (nextIndex < 0 || nextIndex >= spreads.length) {
      if (fromAutoplay) stopAutoplay();
      return;
    }
    if (!fromAutoplay) stopAutoplay();

    const activeSide = direction === 1 ? spreads[current].right : spreads[current].left;
    const reverseSide = direction === 1 ? spreads[nextIndex].left : spreads[nextIndex].right;
    const frontSide = direction === 1 ? "right" : "left";
    const backSide = direction === 1 ? "left" : "right";

    renderSpread(underSpread, spreads[nextIndex], nextIndex);
    turnLayer.innerHTML = `<div class="turning-sheet turning-sheet--${direction === 1 ? "forward" : "backward"}">
      <div class="sheet-face sheet-face--front">${renderPage(activeSide, frontSide, current * 2 + (direction === 1 ? 1 : 0))}</div>
      <div class="sheet-face sheet-face--back">${renderPage(reverseSide, backSide, nextIndex * 2 + (direction === 1 ? 0 : 1))}</div>
    </div>`;
    const sheet = turnLayer.querySelector(".turning-sheet");
    turning = true;
    book.classList.add("is-turning");
    book.classList.toggle("is-forward", direction === 1);
    book.classList.toggle("is-backward", direction === -1);
    updateControls();

    requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add("is-flipping")));
    const complete = () => finishTurn(direction, nextIndex);
    sheet.addEventListener("transitionend", (event) => {
      if (event.target === sheet && event.propertyName === "transform") complete();
    }, { once: true });
    turnFallback = window.setTimeout(complete, 1050);
  }

  previousButton.addEventListener("click", () => navigate(-1));
  nextButton.addEventListener("click", () => navigate(1));
  resetButton.addEventListener("click", () => {
    stopAutoplay();
    if (turning) return;
    current = 0;
    renderSpread(spreadElement, spreads[current], current);
    updateControls();
  });

  autoplayButton.addEventListener("click", () => {
    if (autoplayActive) {
      stopAutoplay();
      return;
    }
    if (turning) return;
    if (current === spreads.length - 1) {
      current = 0;
      renderSpread(spreadElement, spreads[current], current);
      updateControls();
    }
    autoplayButton.setAttribute("aria-label", "Pause autoplay");
    autoplayButton.title = "Pause autoplay";
    autoplayButton.querySelector("span").textContent = "Ⅱ";
    autoplayActive = true;
    autoplayTimer = window.setTimeout(() => {
      autoplayTimer = null;
      navigate(1, true);
    }, 700);
    updateControls();
  });

  book.addEventListener("click", (event) => {
    const comfortButton = event.target.closest("[data-comfort]");
    if (comfortButton) {
      const card = window.emergencyCards.find((entry) => entry.id === comfortButton.dataset.comfort);
      if (!card) return;
      comfortTitle.textContent = card.title;
      comfortMessage.textContent = card.message;
      comfortDialog.showModal();
      return;
    }
    if (event.target.closest('[data-action="restart"]')) {
      event.preventDefault();
      event.stopPropagation();
      if (turning) return;
      stopAutoplay();
      current = 0;
      renderSpread(spreadElement, spreads[current], current);
      updateControls();
    }
  });

  closeComfort.addEventListener("click", () => comfortDialog.close());

  document.addEventListener("keydown", (event) => {
    if (comfortDialog.open) {
      if (event.key === "Escape") comfortDialog.close();
      return;
    }
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target.tagName))) return;
    if (target instanceof HTMLElement && target.closest(".page-copy") && ["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    } else if (event.key === "Escape") {
      stopAutoplay();
    }
  });

  book.addEventListener("pointerdown", (event) => { touchStartX = event.clientX; });
  book.addEventListener("pointerup", (event) => {
    if (touchStartX === null) return;
    const distance = event.clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) > 45) navigate(distance < 0 ? 1 : -1);
  });
  book.addEventListener("pointercancel", () => { touchStartX = null; });
  book.addEventListener("click", (event) => {
    if (event.target.closest(".turning-sheet, button, a")) return;
    const bounds = book.getBoundingClientRect();
    const edgeZone = Math.min(42, bounds.width * .07);
    if (event.clientX > bounds.right - edgeZone) navigate(1);
    else if (event.clientX < bounds.left + edgeZone) navigate(-1);
  });

  document.querySelector("#title").textContent = window.scrapbookTitle;
  document.querySelector(".intro p").firstChild.nodeValue = `${window.scrapbookSubtitle} `;
  document.title = `${window.scrapbookTitle} — a friendship scrapbook`;
  renderSpread(spreadElement, spreads[current], current);
  updateControls();
})();
