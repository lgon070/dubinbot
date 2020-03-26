const {Client, Collection} = require('discord.js');
const config = require('./config.json');

const client = new Client({
    disabledEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler=>{
    require(`./handler/${handler}`)(client);
})

client.on('ready', ()=>{
    console.log("Connected as " + client.user.tag);
    client.user.setActivity("You Sleep", {type: "WATCHING"})
})


client.on('message', async message =>{
    let prefix = '~'
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fecthMember(message);
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length ==0) return;

    let command  = client.commands.get(cmd);
    if(!command) command = client.command.get(client.aliases.get(cmd));
    if(command){
        command.run(client, message, args)
    }
})


client.login(config.botToken);





