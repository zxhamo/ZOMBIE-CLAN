const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on('message', message => {
if (message.content.startsWith('باك')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .addField(" **تٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**" , " **تٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**")
     
     
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
if (message.content.startsWith('برب')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .addField(" **تﯡڷــﯖــم ۖ مــڼــﯜڔ ۛ ּڀــ̍ا ̨؏ــڛــڶ ۖ مــن ڙمــٱن ּ؏ــڼــک :green_heart:**" , " **تﯡڷــﯖــم ۖ مــڼــﯜڔ ۛ ּڀــ̍ا ̨؏ــڛــڶ ۖ مــن ڙمــٱن ּ؏ــڼــک :green_heart:**")
     
     
  message.channel.sendEmbed(embed);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
