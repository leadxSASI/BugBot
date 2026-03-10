/*
#LUBYZ
BUY NO ENC +6282189474878
*/

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "6282393401622"
global.owner2 = "GANTI NOMER KALIAN"
global.namaowner = "Lubyz"
global.botname = "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"
//======== Setting Bot & Link ========//
global.namabot = "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫" 
global.namabot2 = "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"
global.foother = "© - Lubyz"
global.versibot = "22.0.0"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06'
global.linksaluran = "https://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06"
global.linkyt = 'https://youtube.com/@lubyz'
global.linktele = 'https://t.me/lubyz'
global.packname = "Lubyz V22"
global.author = "Lubyz"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "Maaf terjadi kesalahan..",
"done": "Succesfully ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06", 
"private": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06", 
"admin": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06", 
"adminbot": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06", 
"owner": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06", 
"developer": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06", 
"premium": "<𝙈𝙖𝙪 𝙟𝙖𝙙𝙞 𝙥𝙧𝙚𝙢𝙞𝙪𝙢? 𝙁𝙤𝙡𝙡𝙤𝙬 𝙙𝙪𝙡𝙪>\n\nhttps://whatsapp.com/channel/0029Vb535HMHrDZhQft5nP06"

}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})