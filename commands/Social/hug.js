const Discord = require('discord.js');
exports.run = (client, message, args) => {
const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {

 /* let defineduser = message.mentions.users.first();

  fs.readFile('./Link/hug.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var random = data.split('\n');
      var num = getRandomInt(random.length);
      var url = random[num];

  

      var HugEmbed = new Discord.RichEmbed()
  .setColor("#689AFB")
  .setTitle(`${message.author.username} fait un hug à ${defineduser.username}`)
  .setImage(url)
  .setFooter("hug");

  message.channel.send(HugEmbed)
});*/
 message.channel.send("Commande en cours d'amélioration");
}

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hug',
    description: 'Pour faire des calîns au personne que vous souhaitez',
    usage: 'hug [mention ou mot]'
  };
