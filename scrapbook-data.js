const friendName = "Nivi";

window.friendName = friendName;
window.scrapbookTitle = "A Little Place to Breathe";
window.scrapbookSubtitle = `For ${friendName} — a little reminder that you matter, always.`;

window.scrapbookSpreads = [
  {
    id: "for-you",
    left: {
      title: `Hey, ${friendName}.`,
      subtitle: "a letter, just for you",
      tone: "cream",
      layout: "letter opening",
      illustration: "assets/decorations/pressed-flowers.svg",
      ornaments: ["✿", "♡"],
      paragraphs: [
        "I made this little corner of the world just for you.",
        "You don't have to be happy here. You don't have to pretend that everything is okay. You don't have to find the right words.",
        "Just take a little breath.",
        `This book is here to remind you of something you might forget on the difficult days: you matter, exactly as you are, ${friendName}.`
      ]
    },
    right: {
      title: "A little place to breathe",
      subtitle: "come as you are; stay as long as you like",
      tone: "peach",
      layout: "welcome",
      illustration: "assets/decorations/pressed-flowers.svg",
      ornaments: ["✦", "♡", "✿"],
      paragraphs: [
        "No fixing, no pretending, no hurry.",
        "Just a few soft words for the days when you need them, and a little reminder that you are cared for.",
        `Made with love, especially for you, ${friendName}.`
      ]
    }
  },
  {
    id: "put-the-weight-down",
    left: {
      title: "You can put the weight down for a while.",
      subtitle: "you don't have to be the strong one",
      tone: "lavender",
      layout: "letter",
      illustration: "assets/decorations/tea-cup.svg",
      ornaments: ["♡"],
      paragraphs: [
        `${friendName}, you don't have to be the strong one every single day.`,
        "You are allowed to feel tired. You are allowed to cry. You are allowed to have days when you don't know what to do next.",
        "You don't have to turn every painful thing into a lesson.",
        "You don't have to explain your sadness to deserve kindness."
      ]
    },
    right: {
      title: "Some days, getting through is enough.",
      subtitle: "a gentle note for today",
      tone: "cream",
      layout: "letter",
      illustration: "assets/decorations/tea-cup.svg",
      ornaments: ["✦"],
      paragraphs: [
        "Some days, getting through the day is enough.",
        "Please be as gentle with yourself as you would be with someone you love.",
        "A warm drink. A pause. One less thing to carry for a little while.",
        "You are allowed to rest without having to earn it."
      ]
    }
  },
  {
    id: "heavy-days",
    left: {
      title: "For the days that feel a little too much.",
      subtitle: "you only have to be here, right now",
      tone: "lavender",
      layout: "letter",
      illustration: "assets/decorations/rain-window.svg",
      ornaments: ["☁", "✦"],
      paragraphs: [
        "If today is difficult, you don't need to figure out your entire life today.",
        "You can take things one hour at a time.",
        "You can take a break.",
        "You can ask someone to sit beside you.",
        "You can start again tomorrow."
      ]
    },
    right: {
      title: "One small step is enough.",
      subtitle: "let the rest wait a little",
      tone: "sage",
      layout: "letter",
      illustration: "assets/decorations/rain-window.svg",
      ornaments: ["☼", "♡"],
      paragraphs: [
        "You are not failing because things feel hard.",
        "And you do not have to earn rest by exhausting yourself first.",
        "For now, just breathe.",
        "One small step is enough."
      ]
    }
  },
  {
    id: "little-reminders",
    left: {
      title: "Things I hope you never forget",
      subtitle: "little notes to come back to",
      tone: "peach",
      layout: "reminders",
      ornaments: ["♡", "✿"],
      items: [
        "You matter, even when you feel unproductive.",
        "Your feelings are allowed to exist.",
        "You deserve kindness, including from yourself.",
        "You are more than your worst day.",
        "You don't need to have everything figured out."
      ]
    },
    right: {
      title: "Keep these close",
      subtitle: "read one, or read them all",
      tone: "cream",
      layout: "reminders",
      ornaments: ["✦", "♡"],
      items: [
        "Asking for help is not weakness.",
        "Resting does not make you a burden.",
        "You deserve moments of peace.",
        "You are allowed to grow at your own pace.",
        "You don't have to face every difficult moment alone."
      ]
    }
  },
  {
    id: "gentle-things",
    left: {
      title: "Maybe a little happiness can find you here.",
      subtitle: "not a to-do list; just possibilities",
      tone: "sage",
      layout: "possibilities",
      illustration: "assets/decorations/sunrise.svg",
      ornaments: ["♪", "☼"],
      items: [
        "A song that feels like yours",
        "A warm drink, held in both hands",
        "A sunset you happen to notice",
        "A quiet walk, with nowhere to be",
        "A comforting meal"
      ]
    },
    right: {
      title: "Let gentle things find you.",
      subtitle: "in their own time",
      tone: "peach",
      layout: "letter",
      illustration: "assets/decorations/sunrise.svg",
      ornaments: ["✿", "♡"],
      paragraphs: [
        "You don't have to feel okay all at once.",
        "Sometimes, a little light returns quietly.",
        "Maybe through a song. Maybe through a conversation. Maybe through a tiny moment that makes you smile before you even realize it.",
        "You don't have to force happiness.",
        "Just leave a little room for gentle things to find you."
      ],
      footerNote: "A silly conversation · a cozy blanket · a moment of laughter · a favorite memory · a peaceful night"
    }
  },
  {
    id: "letter-from-me",
    left: {
      title: `Dear ${friendName},`,
      subtitle: "a letter from me to you",
      tone: "cream",
      layout: "letter",
      illustration: "assets/decorations/pressed-flowers.svg",
      ornaments: ["♡"],
      paragraphs: [
        "I may not always know the perfect thing to say when life gets difficult for you.",
        "Sometimes I might not know how to fix things, and I know that I cannot magically make every difficult feeling disappear.",
        "But I want you to know that you don't have to hide your difficult days from me.",
        "You don't need to pretend to be okay just to make other people comfortable."
      ]
    },
    right: {
      title: "Whenever you need me",
      subtitle: "there's no perfect way to have a hard day",
      tone: "rose",
      layout: "letter",
      illustration: "assets/decorations/pressed-flowers.svg",
      ornaments: ["♡", "✦"],
      paragraphs: [
        "You can talk, cry, sit quietly, change the subject, or simply take your time. You don't have to make every conversation meaningful.",
        "I hope you give yourself the same patience you give to other people.",
        "And when you cannot find much hope for yourself, I hope you remember that you do not have to see the whole road ahead today. Just take the next little step.",
        "I made this book because I wanted you to have something you could return to on the days when words are hard to find.",
        `I hope it reminds you that your life is bigger than this difficult chapter. You are important, ${friendName}. Not because of what you achieve, not because of how well you handle things, but simply because you are you.`,
        "With lots of care,\nYour friend ❤️"
      ]
    }
  },
  {
    id: "begin-again",
    left: {
      title: "There is no deadline for healing.",
      subtitle: "small beginnings count",
      tone: "sage",
      layout: "letter",
      illustration: "assets/decorations/sprout.svg",
      ornaments: ["✿", "☼"],
      paragraphs: [
        "You don't need to become a completely different person to have a better tomorrow.",
        "You can begin again slowly.",
        "You can change your mind. You can take a different path. You can rest before you try again.",
        "Some progress is so quiet that nobody else notices it."
      ]
    },
    right: {
      title: "The little things count, too.",
      subtitle: "at your own pace, dear friend",
      tone: "peach",
      layout: "letter",
      illustration: "assets/decorations/sprout.svg",
      ornaments: ["✦", "♡"],
      paragraphs: [
        "Getting out of bed. Eating something. Replying to a message. Asking for help. Trying one more time.",
        "Those little things count, too.",
        `You are allowed to grow slowly, ${friendName}.`,
        "There is no deadline for becoming okay."
      ]
    }
  },
  {
    id: "comfort-kit",
    left: {
      title: "A little comfort kit",
      subtitle: "tap any note to open it",
      tone: "lavender",
      layout: "comfort-kit",
      ornaments: ["♡", "✦"],
      cardIds: ["overwhelmed", "lonely", "not-enough"]
    },
    right: {
      title: "Whenever you need a little comfort",
      subtitle: "there's no wrong place to start",
      tone: "cream",
      layout: "comfort-kit",
      ornaments: ["✿", "♡"],
      cardIds: ["rest", "hope", "words"]
    }
  },
  {
    id: "unwritten",
    left: {
      title: "There are still little things waiting for you.",
      subtitle: "no rush to meet them",
      tone: "peach",
      layout: "letter",
      illustration: "assets/decorations/sunrise.svg",
      ornaments: ["☼", "✦"],
      paragraphs: [
        "There are songs you haven't heard yet that might become your favorites.",
        "There are places you haven't visited. Conversations you haven't had. Ordinary mornings that might feel surprisingly peaceful.",
        "New people, new ideas, new little reasons to smile."
      ]
    },
    right: {
      title: "Your story is still being written.",
      subtitle: "one day, one page at a time",
      tone: "sage",
      layout: "letter",
      illustration: "assets/decorations/sunrise.svg",
      ornaments: ["♡", "✿"],
      paragraphs: [
        "You don't need to know when those moments will arrive. You don't need to rush toward them.",
        "I just hope you give yourself the chance to meet them, one day at a time.",
        `Your story is still being written, ${friendName}.`,
        "And this difficult chapter does not have to be the whole story."
      ]
    }
  },
  {
    id: "final-hug",
    left: {
      title: "Until the days feel lighter...",
      subtitle: "if you remember one thing",
      tone: "cream",
      layout: "letter closing",
      illustration: "assets/decorations/pressed-flowers.svg",
      ornaments: ["♡", "✦"],
      paragraphs: [
        "You don't have to earn the right to be cared for.",
        "Not on your happiest days. Not on your most productive days. Not on the days when you have all the answers.",
        "Even on the days when you feel tired, uncertain, or a little lost.",
        "Please give yourself time. Please let people who care about you be there for you.",
        "And please remember that you are allowed to take life one little step at a time."
      ]
    },
    right: {
      title: "I'm rooting for you.",
      subtitle: "on every kind of day",
      tone: "rose",
      layout: "letter closing",
      illustration: "assets/decorations/pressed-flowers.svg",
      ornaments: ["♡", "✿", "✦"],
      paragraphs: [
        "On the easy days. On the confusing days. And on the days when all you can do is try again tomorrow.",
        "You don't have to do everything today.",
        "Just take care of yourself, one small moment at a time.",
        "Sending you the biggest, gentlest hug. ❤️"
      ],
      footerNote: `Made for ${friendName}, with care — always.`,
      action: { label: "Read this again whenever you need it", action: "restart" }
    }
  }
];

window.emergencyCards = [
  {
    id: "overwhelmed",
    title: "When you feel overwhelmed",
    message: "You don't need to solve everything right now. Put both feet on the floor, take a gentle breath, and choose just one small thing to focus on."
  },
  {
    id: "lonely",
    title: "When you feel lonely",
    message: "You deserve connection and care. If you can, reach out to someone you trust. You don't need to find perfect words. Even “Can you stay with me for a little while?” is enough."
  },
  {
    id: "not-enough",
    title: "When you feel like you're not enough",
    message: "Your worth is not a score, a result, or a list of things you managed to do today. You are still worthy of care on the days you feel unsure of yourself."
  },
  {
    id: "rest",
    title: "When you need permission to rest",
    message: "You can pause without giving up. You are allowed to have a quiet day. You don't need to justify every moment of rest."
  },
  {
    id: "hope",
    title: "When you need a tiny bit of hope",
    message: "You don't need to believe that everything will be perfect. Just leave room for the possibility that something good, gentle, or unexpected can still happen."
  },
  {
    id: "words",
    title: "When words feel impossible",
    message: "You don't have to explain everything. You can start with one sentence, ask for company, or simply let someone know that today is hard."
  }
];
