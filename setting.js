const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'OGERecqvFB' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6283132749084'] 
global.ownernomer = "6283132749084"
global.socialmedia = "IG: lans.xys"
global.yutub = "YT: LansOfc"
global.lokasi = "Indonesian,java, Tangerang"
global.sakuraurl = 'https://lynk.id/na_offical'
global.packgename = "by" 
global.author = "LansBotz" 
global.title = 'LansOfc'
global.body = 'creator : Maulana'
global.welcome = true //false mati true nyala
global.left = true //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})