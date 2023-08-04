const chalk = require('chalk')
const fs = require('fs')
global.author = `DevBot Multidevice\nCreator : LansOfc\n Maulana` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})