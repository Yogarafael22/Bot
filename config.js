const chalk = require("chalk")
const fs = require("fs")
global.ownerNumber = ["628815862734@s.whatsapp.net"]
global.nomerOwner = "628815862734"
global.nomorOwner = ['628815862734']
global.nameGEDE = "CNCHANNEL"
global.namaDeveloper = "CN STORE"
global.namaBot = "CNBOTZ"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.wagc = 'https://chat.whatsapp.com/Iuv67eQvyJECB8GaoFtv2T'
global.botname = 'CnBotzz'
global.ownerName = 'CnC'
global.packname = 'CnC'
global.author = 'CnC'
global.domain = "https://senjax-store.panellku-vvip.my.id"
global.apikey = "ptla_bJkeI1eLVT3nkfF4plA89jbXAuYPHk3mQrYr1h38sRb"
global.capikey = "ptlc_CB1xiw463cx4Pj053AAhejcS0SY1VLRVtswOg6loj1D"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.mess = {
wait: 'Sabar',
succes: 'Berhasil',
prem: 'Premium Dulu ngab',
admin: 'Fitue khusus Admin GC',
botAdmin: 'Jadiin Admin Dulu',
owner: 'hilih',
group: 'Buat Group co!',
private: 'Buat Pc Co!',
bot: '??',
error: 'Yah error..',
}
global.jumlah = "5"
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By kezz
DI UPDATE Dan Di Tulis Ulang Oleh kezz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Admin Panel : 30k
Chat Wa : 6283134291600

*/