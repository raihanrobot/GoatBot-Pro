module.exports.config = {
	name: "protectboss",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Raihan",
	description: "বসের নাম প্রোটেক্ট করে",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 3
};

const bossNames = ["raihan", "রায়হান", "রাইহান"];

module.exports.onChat = async function({ api, event }) {
	const { threadID, messageID, body, senderID } = event;
	
	if (!body || senderID == api.getCurrentUserID()) return;
	if (!event.isGroup) return; // শুধু গ্রুপে কাজ করবে
	
	const msg = body.toLowerCase().trim();
	
	// baby.js এর মতো same লজিক
	if (bossNames.some(name => msg.includes(name))) {
		
	// baby.js এর মতো রিয়েক্ট দাও
		api.setMessageReaction("😡", messageID, () => {}, true);
		
		api.sendTypingIndicator(threadID, true);
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		const replies = [
			"আমার রাইহান বসের নাম ধরো কেন 😡",
			"বসের নাম মুখে নিবা না হুশিয়ার ⚠️", 
			"রাইহান ভাইরে ডাকতেছো? পারমিশন নিছো? 😤",
			"বসের নাম লইয়া খেলবা না কইলাম 🔥"
	];
		
		const randomReply = replies[Math.floor(Math.random() * replies.length)];
		return api.sendMessage(randomReply, threadID, messageID);
	}
};

module.exports.run = async function({ api, event }) {
	api.sendMessage("বস প্রোটেক্ট সিস্টেম একটিভ আছে 🫡", event.threadID);
};
