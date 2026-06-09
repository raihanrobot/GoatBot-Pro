module.exports.config = {
    name: "protectboss",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Raihan",
    description: "বসের নাম প্রোটেক্ট",
    commandCategory: "no prefix",
    usages: "অটো",
    cooldowns: 3
};

module.exports.handleEvent = async function({ api, event }) {
    const { threadID, messageID, body, senderID } = event;
    
    if (!body) return;
    if (!event.isGroup) return;
    
    const msg = body.toLowerCase();
    
    // বট নিজে নাম নিলে স্কিপ
    if (senderID == api.getCurrentUserID()) return;
    
    // Raihan ডিটেক্ট
    if (msg.includes("raihan") || msg.includes("রায়হান") || msg.includes("রাইহান")) {
        
        api.sendTypingIndicator(threadID);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const replies = [
            "আমার রাইহান বসের নাম ধরো কেন 😡",
            "বসের নাম মুখে নিবা না হুশিয়ার ⚠️",
            "রাইহান ভাইরে ডাকতেছো? পারমিশন নিছো? 😤",
            "বসের নাম লইয়া খেলবা না কইলাম 🔥"
        ];
        
        return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], threadID, messageID);
    }
};

module.exports.run = async function() {};
