const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

require('./dhenxs.js')
nocache('./dhenxs.js', module => console.log(`${module} telah di update!`))

const starts = async (dhenxs = new WAConnection()) => {
    dhenxs.logger.level = 'warn'
    dhenxs.version = [2,2143,3]
    dhenxs.browserDescription = ['DhenxsCode','Chrome', '3.0']
    console.log(banner)
    dhenxs.on('qr', () => {
        console.log(color('[SCAN ME]','red'), color('SEDANG MENUNGGU DI SCAN🔍'))
    })
    dhenxs.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await dhenxs.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    dhenxs.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./dhenxsKey.json') && dhenxs.loadAuthInfo('./dhenxsKey.json')
    dhenxs.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    dhenxs.on('open', () => {
        success('2', 'Terhubung')
    })
    await dhenxs.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./dhenxsKey.json', JSON.stringify(dhenxs.base64EncodedAuthInfo(), null, '\t'))

    dhenxs.on('chat-update', async (message) => {
        require('./dhenxs.js')(dhenxs, message)
    })
dhenxs.on("group-participants-update", async (anu) => {
    try {
      groupMet = await dhenxs.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await dhenxs.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await dhenxs.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(dhenxs.user.jid)) {
        dhenxs.sendMessage(anu.jid, "Saya BABYGRL BOT SIAP MELAYANI SILAKAN KETIK .menu", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(dhenxs.user.jid)) {
             const mdata = await dhenxs.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await dhenxs.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await dhenxs.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = dhenxs.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `Hallo @${num.split('@')[0]}, \nStatus: ┌Nomor: *${num.split('@')[0]}*\n├Bɪᴏ* : *${thu.status}*\n└Mᴇᴍʙᴇʀs : ${memeg}*\n\n Selamat Datang di ${mdata.subject}`
                tekss = `*${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#intro`,buttonText:{displayText:'Welcome'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                dhenxs.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(dhenxs.user.jid)) {
                const mdata = await dhenxs.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await dhenxs.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = dhenxs.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Sayonara* 👋 @${num.split('@')[0]}`
                goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Selamat Tinggal Beban'}, type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: `1 𝖡𝖾𝖻𝖺𝗇 𝖪𝖾𝗅𝗎𝖺𝗋. 𝖪𝖺𝗅𝗂𝖺𝗇 𝖪𝖺𝗉𝖺𝗇 𝖪𝖾𝗅𝗎𝖺𝗋?`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                dhenxs.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi Dhenxs Code')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()