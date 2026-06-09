module.exports.config = {
    name: "protectboss",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Raihan",
    description: "বসের নাম প্রোটেক্ট",
    commandCategory: "no prefix",
    usages: "",
    cooldowns: 1,
    dependencies: {}
};

module.exports.handleEvent = async function({ api, event, Users }) {
    var { threadID, messageID, body, senderID } = event;
    if (typeof body == "undefined") return;
    if (senderID == api.getCurrentUserID()) return;
    
    var content = body.trim().toLowerCase();
    
    if (content.includes("raihan") || content.includes("রায়হান") || content.includes("রাইহান")) {
        var name = await Users.getNameUser(senderID);
        var msg = `আমার রাইহান বসের নাম ধরো কেন 😡\n${name}, বসের নাম মুখে নিবা না!`;
        return api.sendMessage(msg, threadID, messageID);
    }
};

module.exports.run = async function() {};
