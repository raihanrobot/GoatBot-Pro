module.exports = {
  config: {
    name: "protectboss",
    version: "1.0",
    author: "Raihan",
    role: 0,
    shortDescription: "বসের নাম প্রোটেক্ট করে",
    longDescription: "গ্রুপে কেউ Raihan/রায়হান লিখলে বট রাগ করবে",
    category: "fun",
    guide: "অটো কাজ করবে, কমান্ড লাগবে না"
  },

  onChat: async function({ api, event, message }) {
    const msg = event.body ? event.body.toLowerCase() : "";
    
    // শুধু গ্রুপে কাজ করবে
    if (!event.isGroup) return;
    
    // Raihan / রায়হান ডিটেক্ট
    if (msg.includes("raihan") || msg.includes("রায়হান") || msg.includes("রাইহান")) {
      
      // বট নিজে নাম নিলে রিপ্লাই দিবে না
      if (event.senderID === api.getCurrentUserID()) return;
      
      // 2 সেকেন্ড টাইপিং
      api.sendTypingIndicator(event.threadID);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // রাগী রিপ্লাই
      const replies = [
        "আমার রায়হান বসের নাম ধরো কেন 😡",
        "বসের নাম মুখে নিবা না হুশিয়ার ⚠️",
        "রায়হান ভাইরে ডাকতেছো? পারমিশন নিছো? 😤",
        "বসের নাম লইয়া খেলবা না কইলাম 🔥"
      ];
      
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      api.sendMessage(randomReply, event.threadID, event.messageID);
    }
  }
}
