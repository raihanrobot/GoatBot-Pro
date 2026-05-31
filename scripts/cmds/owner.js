const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "Mᴏʜᴀᴍᴍᴀᴅ Aᴋᴀsʜ",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 𝐑𝐚𝐢𝐇𝐚𝐧 𝐈𝐬𝐥𝐚𝐦
│ 🧸 Nɪᴄᴋ       : 𝐀𝐲𝐚𝐚𝐧
│ 🎂 Aɢᴇ        : 18+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : 𝐁𝐢𝐛𝐚𝐡𝐢𝐭𝐨
│ 🎓 Pʀᴏғᴇssɪᴏɴ : Sᴛᴜᴅᴇɴᴛ
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : Iɴᴛᴇʀ 1ˢᵀ Yᴇᴀʀ
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : 𝐃𝐡𝐚𝐤𝐚 - 𝐆𝐚𝐳𝐢𝐩𝐮𝐫
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  : fb.com/raihan.xaans 
│ 💬 Messenger: m.me/raihan.xaans 
│ 📞 WhatsApp  : wa.me/01762014230
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://i.ibb.co/qfppLzL/5867a1eea945.jpg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
