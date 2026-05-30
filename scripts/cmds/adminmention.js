module.exports = {
  config: {
    name: "adminmention",
    version: "1.3.2",
    author: "MOHAMMAD AKASH",
    countDown: 0,
    role: 0,
    shortDescription: "Replies angrily when someone tags admins",
    longDescription: "If anyone mentions an admin, bot will angrily reply with random messages.",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const adminIDs = ["100082071614134", "100082071614134", "100082071614134"].map(String);

    // Skip if sender is admin
    if (adminIDs.includes(String(event.senderID))) return;

    // যদি কেউ মেনশন দেয়
    const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
    const isMentioningAdmin = adminIDs.some(id => mentionedIDs.includes(id));

    if (!isMentioningAdmin) return;

    // র‍্যান্ডম রাগী রিপ্লাই
    const REPLIES = [
      "মেনশন দিস না বাল পাকনা রায়হান এখন প্রচুর বিজি:)😩✌️",
      "রায়হান মামা কই তুমি, তোমারে কে যেনো ডাকে:)😒🫦",
      "ওই আমার বস রে মেনশন দিবি না:)😾💔",
      "মেনশন না দিয়ে বসের ইনবক্সে যা:)😗🫶",
      "ওরে মেনশন দিস না বউ নিয়া চিপায় গেছে:)😩🐸"
    ];

    const randomReply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    return message.reply(randomReply);
  }
};
