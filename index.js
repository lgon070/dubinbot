const Discord = require('discord.js')
const bot =  new Discord.Client()
let prefix = '~'

bot.on('ready', ()=>{
    console.log("Connected as " + bot.user.tag)
    bot.user.setActivity("You Sleep", {type: "WATCHING"})
})

bot.on('message', (message)=>{
    if(message.author == bot.user){
        return
    }
    if(message.content.startsWith(prefix)){
        processCommand(message)
    }
})

function processCommand(message){
    let fullCommand = message.content.substr(1)
    let splitCommand = fullCommand.split(' ')
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if(primaryCommand == 'help'){
        helpCommand(arguments, message)
    }
    if(primaryCommand == 'prefix'){
        changePrefix(arguments, message)
    }
    if(primaryCommand == 'roll'){
        rollDie(arguments, message)
    }
    if(primaryCommand == 'say'){
        sayTheLine(arguments, message)
    }
}

function helpCommand(arguments, message){
    if(arguments.length == 0){
        let msg = `Use [${prefix}] to summon Dubin! 
        Current commands are:
         ${prefix}help
         ${prefix}roll
         ${prefix}say`
        msg = "```"+msg+"```"
        message.reply(msg)
    }
}

function changePrefix(arguments, message){
    if(arguments.length == 0){
        message.reply(`Prefix is ${prefix}`)
    }
    else{
        prefix = arguments[0]
        message.reply(`Prefix has been changed to ${prefix}`)
    }
}

function rollDie(arguments, message){
    let roll = Math.floor(Math.random() * 6) + 1
    message.reply('rolled a ' + roll)
}

function sayTheLine(arguments, message){
    let str = ''
    for(let i = 0; i <arguments.length; i++){
        str += arguments[i] + ' '
    }

    message.channel.send(str)
}

//Login key useless
bot.login('Njg0MTMyOTIwNDU3MTY2ODU4.Xl1rQA.3u-LKXdLkNQMZJkTkdfca88wjDM');





