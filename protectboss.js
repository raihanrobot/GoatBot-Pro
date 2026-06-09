module.exports.config = {
	name: "protectboss",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Raihan",
	description: "বসের নাম প্রোটেক্ট",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 1
};

module.exports.handleEvent = async ({ api, event }) => {
	const { threadID, messageID, body, senderID } = event;
	if (!body) return;
	if (senderID == api.getCurrentUserID()) return;
	
	let msg = body.toLowerCase();
	
	if (msg.includes("raihan") || msg.includes("রায়হান") || msg.includes("রাইহান")) {
		let reply = [
			"আমার রাইহান বসের নাম ধরো কেন 😡",
			"বসের নাম মুখে নিবা না হুশিয়ার ⚠️",
			"রাইহান ভাইরে ডাকতেছো? পারমিশন নিছো? 😤"
	];
		return api.sendMessage(reply[Math.floor(Math.random() * reply.length)], threadID, messageID);
	}
};

module.exports.run = () => {};
