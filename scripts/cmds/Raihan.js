module.exports.config = {
    name: "protectboss",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Raihan",
    description: "বসের নাম প্রোটেক্ট করে",
    commandCategory: "no prefix",  // এই লাইনটা মাস্ট
    usages: "",
    cooldowns: 1
};

module.exports.handleEvent = async function({ api, event }) {
    const { threadID, messageID, body, senderID } = event;
    
    if (!body || senderID == api.getCurrentUserID()) return;
    
    const msg = body.toLowerCase();
    
    if (msg.includes("raihan") || msg.includes("রায়হান") || msg.includes("রাইহান")) {
        const replies = [
            "আমার রাইহান বসের নাম ধরো কেন 😡",
            "বসের নাম মুখে নিবা না হুশিয়ার ⚠️",
            "রাইহান ভাইরে ডাকতেছো? পারমিশন নিছো? 😤"
        ];
        return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], threadID, messageID);
    }
};

module.exports.run = async function() {};
