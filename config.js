global.owner = ['6282365089294'] // Put your number here
global.mods = [] // Want some help?
global.prems = ["6285710780863", "6281347962643", "6282365089294"] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lolhum: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://melcanz.com': 'lugay',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'memeki',
  'https://api.lolhuman.xyz': 'windaj',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zekai-api.herokuapp.com': 'komtolofon',
  'https://api.zeks.xyz': 'apivinz',




}

// Messages
global.msg = {
  wait: "_Silahkan tunggu sebentar..._",
  fail: "_Terjadi kesalahan, silahkan coba lagi._"
}
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// Sticker WM
global.packname = 'Created By'
global.author = '@frmndaa'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
