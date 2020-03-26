module.exports={
    name: 'ping',
    aliases: ["network", "latency"],
    category: 'info',
    description: 'Returns latency and API ping',
    run: async (client, message, args)=>{
        const msg = await message.channel.send('🏓 Pinging ....')

        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms`)
    }
}
