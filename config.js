import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['+265882426043', 'owen', true],
  ['+265882426043', 'owen', true], 
  [''] 
] //Number of owners

global.mods = ['+265882426043','+265882426043'] 
global.prems = ['+265882426043', '+265882426043', '+265882426043']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // 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
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '💝 TROYMEX OWEN 💝'
global.premium = 'true'
global.packname = '💝 TROYMEX OWEN 💝 Created By 💝 OWEN TEMBO 💝' 
global.author = '💝 Dinuwa Official²⁰²³ 💝' 
global.igfg = '▢ Follow on Facebook\https://www.facebook.com/profile.php?id=61551915615888\n' 
global.dygp = 'https://chat.whatsapp.com/EP0wRAM6xxSEqYfiAiBGw2'
global.fgsc = 'https://github.com/dinuwah/QUEEN-HENTAI' 
global.fgyt = 'https://chat.whatsapp.com/EP0wRAM6xxSEqYfiAiBGw2'
global.fgpyp = 'https://chat.whatsapp.com/EP0wRAM6xxSEqYfiAiBGw2'
global.fglog = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' 


global.wait = '*💝 _Waiting Bro Uploading by 💝 Queen Hentai 💝..._*'
global.rwait = '🇱🇰'
global.dmoji = '🤣'
global.done = '👍'
global.error = '👎' 
global.xmoji = '🫶' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
