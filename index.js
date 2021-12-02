const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});
const karar = require("discord.js");
const client = new karar.Client();
const db = require("quick.db")
client.login(process.env.token)
const Discord = require("discord.js")

//Config 
const owner = "you id here" // ايديك / you id
const prefix = "$" // برفكس / prefix 
client.on("ready", () => {
  console.log(client.guilds.cache.size)
})
client.on("ready", async() => {
console.log("Iam Ready")
   
     console.log(`
Bot Name : ${client.user.tag}
Bot id : ${client.user.id}
Bot Prefix : ${prefix}
_________________________
Bot Users : ${client.users.cache.size}
Bot Servers : ${client.guilds.cache.size}
Bot Channels : ${client.channels.cache.size}
`)

        client.user.setActivity(`${prefix}help  
    Servers : ${client.guilds.cache.size}, User's : ${client.users.cache.size}, Channel's : ${client.channels.cache.size}`, {type: 'COMPETING'
                                                                       })
})

//cmds
client.on("message", async message => {
  if(message.content.startsWith(prefix + "help")) {
const embed = new Discord.MessageEmbed()
    .setTitle("List Commands")
    .setColor("RED")
  .setFooter(message.author.username)
  .setTimestamp()
  .setThumbnail(client.user.avatarURL())
    .setDescription(`>>> ** The Commands 
__General Commands __
\`${prefix}help\`
__ Admin Commands __
\`${prefix}new\` , \`${prefix}delete\` , 
\`${prefix}del-all-tic\` ,  \`${prefix}close\` , \`${prefix}rename\` , 
\`${prefix}add\` , \`${prefix}remove\` , \`${prefix}set-cat\` , \`${prefix}set-sup\` , \`${prefix}set-des\` , \`${prefix}set-log\`
__ Config , Owner__
\`${prefix}set-name\`
\`${prefix}set-avatar\`
\`${prefix}set-lang\`
\`${prefix}set-prefix\`
**`)

message.channel.send(embed)
  }
})
client.on("message", async message => {
  if(message.content.startsWith(prefix + "set-name")) {
    if (!owner.includes(message.author.id)) return;  
    
const cmd = message.content.split(" ").slice(1).join(" ")
    if(!cmd) {
const lang = db.fetch(message.guild.id)  
 if(lang === "ar") {     message.channel.send("**اكتب اسم البوت الجديد**") 
  }else if(lang === "en") message.channel.send(`**Write New Name Bot**`);     
 return
}
client.user.setName(cmd)
    const lang = db.fetch(message.guild.id)  
      if(lang === "en") {     message.channel.send(`**Done 
New UserName : ${cmd}**`) 
          }else if(lang === "ar") message.channel.send(`**تم
الاسم الجديد : ${cmd}**`);   
    
  }
})
client.on("message", async message => {
  if(message.content.startsWith(prefix + "set-avatar")) {
    if (!owner.includes(message.author.id)) return;  
     

    const cmd = message.content.split(" ").slice(1).join(" ")
    if(!cmd) {
      const lang = db.fetch(message.guild.id)  
        if(lang === "ar") {     message.channel.send("**ارسل رابط الصورة**") 
                          }else if(lang === "en") message.channel.send(`**Write URL For new Avatar For Bot**`);
      return
    }
    client.user.setAvatar(cmd)
    const lang = db.fetch(message.guild.id)  
      if(lang === "ar") {     message.channel.send("**تم تحديث صورة البوت**")
                        }else if(lang === "en") message.channel.send(`**Done change 
Avatar **`);      
  }
})

client.on("message", async message => {
  const args = message.content.split(" ").slice(1).join(" ")
  if(message.content.startsWith(prefix + "set-lang")) {
if(!message.member.hasPermission("ADMINISTRATOR")) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission \`ADMINISTRATOR\`**")
        return
      }
if(args == "ar"){
db.set(`${message.guild.id}`,"ar")
const embed = new Discord.MessageEmbed()
.setTitle("Language Change")
.setColor("BLUE")
.setDescription(`تم تغيير اللغة الى \`العربيه\``)
.setFooter(`Changed By ${message.author.tag}`)
message.channel.send(embed) 
}else {
if (args == "en"){
 db.set(`${message.guild.id}`,"en") 
const embed = new Discord.MessageEmbed()
.setTitle("Language Change")
.setColor("BLUE")
.setDescription(`Language Changed To \`EN\``)
.setFooter(`Changed By ${message.author.tag}`)
message.channel.send(embed)

}else {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("الرجاء كتابة رمز اللغه (ar,en)")
  }else if(lang === "en")
  message.channel.send("Please Type Language (en, ar)")
}
  
    
    }
  }
})

client.on("message", async message => {
  if(message.content.startsWith(prefix + "set-prefix")) {
    let cmd = message.content.split(' ');
if (!message.member.hasPermission("ADMINISTRATOR")) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send(">>> **Don't have permission \`ADMINISTRATOR\`**")
return
}  
const arm = new MessageEmbed()
  .setTitle("**تغير البادئة**") 
    .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({
    dynamic: true
  }))
  .setDescription(`**تم تحديد البادئة الجديدة 

البادئه الجديده : __${cmd[1]}__ **`)
  

const enm = new MessageEmbed()
  .setTitle("**change the prefix**") 
    .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({
    dynamic: true
  }))
  .setDescription(`**Done Upload new prefix

__${cmd[1]}__ **`)


 
    
    
    if(!args) {
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب البادئة الجديده**")
  }else if(lang === "en")
  message.channel.send("**write new prefix**") 
      return
    }


if (!cmd[1]) return message.reply('يجب وضع برفكس');
console.log(cmd)
console.log(message.guild.id, cmd[1])
await db.set(`prefix_${message.guild.id}`, cmd[1])
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(arm)
  }else if(lang === "en")
  message.channel.send(enm)
  }
})

client.on("message", async message => {
  if(message.content.startsWith(prefix + "set-sup")) {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
  }  
    const cmd = message.content.split(" ")
    const log = db.fetch(`log_${message.guild.id}`)
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(cmd[1]) || message.roles;
    if(!role) {
       const lang = db.fetch(message.guild.id) 
         if(lang === "ar") {     message.channel.send("**رجاء منشن رتبة السبورت**") 
  }else if(lang === "en")  
      message.channel.send("Please Mention Role Support")
      return
    }
    const ar = new Discord.MessageEmbed()
   .setTitle("تم تحديد رتبة السبورت")
   .setColor("#FFE900")
    .setDescription(`>>> ** تعديل رتبة
الرتبة : ${role}
بواسطة : ${message.author}**`)
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
.setFooter(message.author.username);
           
    const embed = new Discord.MessageEmbed()
.setTitle("The sport rank has been modified ")
.setColor("#FFE900")
    .setDescription(`>>> ** Changed Role
The Role : ${role}
By : ${message.author}**`)
    .setThumbnail(client.user.avatarURL())
.setTimestamp()
.setFooter(message.author.username) 
    db.set(`rolesup_${message.guild.id}`, role.id) 
    
    const lang = db.fetch(message.guild.id)
      if(lang === "ar") {     message.channel.send("**تم حفظ رتبة السبورت**")  
                                                                }else if(lang === "en") message.channel.send(`**Done Save Role Support**`)
  const lan = db.fetch(message.guild.id)  
 if(lan === "ar") {     
client.channels.cache.get(log).send(ar)
}else if(lan === "en")    
client.channels.cache.get(log).send(embed)
      
  }
})
client.on("message", async message => {
  if(message.content.startsWith(prefix + "set-des")) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
    }
const cmd = message.content.split(" ").slice(1).join(" ")
    if(!cmd) {
      const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send("**اكتب وصف التكت**") 
  }else if(lang === "en")
      message.reply("Please Write ✍ description ")
      return 
    }
const log = db.fetch(`log_${message.guild.id}`) 
const ar = new Discord.MessageEmbed()
.setTitle("تحديث الوصف")
.setColor("#FFE900")
  .setThumbnail(client.user.avatarURL())
.setTimestamp()
    
  .setFooter(message.author.username)
  .setDescription(`>>> ** تحديث الوصف
الوصف : ${cmd}
بواسطة : ${message.author}**`)
    const embed = new Discord.MessageEmbed()
.setTitle("Changed Description")
.setColor("#FFE900")
    .setDescription(`>>> ** Changed Description 
The Description : ${cmd}
By : ${message.author}**`)
    .setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter(message.author.username)    
db.set(`title_${message.guild.id}`, cmd)
    const lang = db.fetch(message.guild.id) 
      if(lang === "ar") {     message.channel.send(new Discord.MessageEmbed().setTitle("حفظ الوصف").setColor("BLUE").setDescription(`>>> ** تم تحديث الوصف
الوصف : ${cmd}
بواسطة : ${message.author}**`)) 
                                           }else if(lang === "en") 
    message.channel.send(new Discord.MessageEmbed().setTitle("Save Description").setColor("BLUE").setDescription(`>>> Done **
Description : ${cmd}
by : ${message.author}**`))
    const lan = db.fetch(message.guild.id) 
      if(lan === "ar") {     
        client.channels.cache.get(log).send(ar)
      }else if(lan === "en")   client.channels.cache.get(log).send(embed)
  }
})
client.on("message", async message => {
 if(message.content.startsWith(prefix + "set-cat")) {
   if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
   }
const cmd = message.content.split(" ")
    if(!cmd[1]) {
      const lang = db.fetch(message.guild.id)
        if(lang === "ar") {     message.channel.send("**رجاء اكتب ايدي الكاتروجي**")  
                                                                  }else if(lang === "en")
      message.channel.send("Please Write Id Category")
      return 
    }
        let category = message.guild.channels.cache.find(c => c.name === cmd[1] && c.type === 'category');
    
const log = db.fetch(`log_${message.guild.id}`) 

const ar = new Discord.MessageEmbed()
.setTitle("تم حفظ الكاتروجي")
.setColor("#FFE900")
    .setThumbnail(client.user.avatarURL())
  .setTimestamp()
.setFooter(message.author.username)
  .setDescription(`>>> ** تعديل الكاتروجي
الكاتروجي : ${cmd}
بواسطة : ${message.autho}**`)
    const embed = new Discord.MessageEmbed()
.setTitle("The Category has been modified ")
.setColor("#FFE900")
    .setDescription(`>>> ** Changed Category 
The Category : ${cmd}
By : ${message.author}**`)
    .setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter(message.author.username)   
    db.set(`cat_${message.guild.id}`, cmd[1])
    const lang = db.fetch(message.guild.id)
      if(lang === "ar") {     message.channel.send("**تم الحفظ**")   
                                                                }else if(lang === "en") 
message.channel.send("**Done Save **")
    const lan = db.fetch(message.guild.id) 
      if(lan === "ar") {     
client.channels.cache.get(log).send(ar)
                                                                }else if(lan === "en") 
  client.channels.cache.get(log).send(embed)
  }
})
client.on("message", async message => {
  if(message.content.startsWith(prefix + "new")) {
    const cmd = message.content.split(" ").slice(1).join(" ")
if(!cmd) {
  const lang = db.fetch(message.guild.id)  
  if(lang === "ar") 
{     message.channel.send("** رجاء اكتب سبب فتح التذكرة**")  
}
else if(lang === "en") 
message.channel.send("Please Write The reason for opening the ticket ")
  return
}
const cat = db.fetch(`cat_${message.guild.id}`)
const support = db.fetch(`rolesup_${message.guild.id}`)
    const title = db.fetch(`title_${message.guild.id}`)
    if(!cat) {
    
    const lang = db.fetch(message.guild.id)  
      if(lang === "ar") {     message.channel.send("**لم يتم تحديد الكاتروجي**")  
                        }else if(lang === "en") message.channel.send(`**Catalog is not specified **`);      return
   
    }
    if(!support) {
    
    const lang = db.fetch(message.guild.id)  
      if(lang === "ar") {     message.channel.send("**لم يتم تحديد رتبة الدعم الفني**")  
                        }else if(lang === "en") message.channel.send(`**The level of technical support has not been determined **`);   
      return
    
    }
    if(!title) {
    
    const lang = db.fetch(message.guild.id)  
      if(lang === "ar") {     message.channel.send("**لم يتم تحديد وصف التكت**")  
                        }else if(lang === "en") message.channel.send(`**Tik description has not been specified **`);     
      return
    
    }
  message.guild.channels.create(`ticket-${message.author.username}`, { type: 'text' }).then(async cc => {
      let category = message.guild.channels.cache.find(c => c.id === cat && c.type === 'category');
    if(!category) return 
if(category) {
        cc.setParent(category);

}
    
const log = db.fetch(`log_${message.guild.id}`) 
const ar = new Discord.MessageEmbed()
.setTitle("تذكرة جديدة")
.setColor("#FFE900")
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setFooter(message.author.username)
.setDescription(` >>> ** تذكرة جديدة 
التذكرة : <#${cc.id}>
ايدي التذكرة : ${cc.id}
العضو : ${message.author}
ايدي العضو : ${message.author.id}
**`)
const embed = new Discord.MessageEmbed()
.setTitle("New Ticket")
.setColor("#FFE900")
    .setDescription(`>>> ** New Ticket 🎟 
The Ticket : <#${cc.id}>
Ticket ID : ${cc.id}
User : ${message.author}
User Id : ${message.author.id} **`)
    .setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter(client.user.username);
    
cc.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
      });
          
        cc.createOverwrite(message.author.id, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });
      cc.createOverwrite(support, {
  SEND_MESSAGES: true,
  VIEW_CHANNEL: true

})
const lan = db.fetch(message.guild.id)   
if(lan === "ar") {     message.channel.send(`**
تم فتح تذكرة <#${cc.id}>**`)  
 }else if(lan === "en")    
    message.channel.send(`Done Create Channel <#${cc.id}>`)
    const lang = db.fetch(message.guild.id)   
      if(lang === "ar"){
    cc.send(`<@&${support}> , ${message.author}`, new Discord.MessageEmbed().setTitle(`${title}`).setColor("RANDOM").setFooter(message.author.username).setTimestamp().setDescription(`>>> ** تذكرة جديدة 
    السبب : ${cmd}**`).setThumbnail(`${message.author.avatarURL({dynamic : true})}`)
            )
    }else if(lang === "en")
cc.send(`<@&${support}> , ${message.author}`, new Discord.MessageEmbed()
            .setTitle(`${title}`)
            .setColor("RANDOM")
            .setDescription(`New Ticket 
            Because : ${cmd}`)
.setFooter(message.author.username)
.setTimestamp()
                  
            .setThumbnail(`${message.author.avatarURL({dynamic : true})}`)
            )
            const la = db.fetch(message.guild.id)   
              if(la === "ar") {     client.channels.cache.get(log).send(ar)   
                               }else if(la === "en") 
client.channels.cache.get(log).send(embed)
  })
  }
})

client.on("message", async message => {
  if(message.content.startsWith(prefix + "del-all-tic")) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
    }
    message.guild.channels.cache.forEach(channel => {
if(channel.name.startsWith("ticket-")) {
  channel.delete();
}
})
const lang = db.fetch(message.guild.id)  
  if(lang === "ar") {     message.channel.send("**تم حذف جميع التذاكر**")   }else if(lang === "en")
    message.author.send("Done Delete All Tickes")
  }
})
          client.on("message", async(message) => {
    if(message.content.startsWith(prefix + "set-log")) {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
      }
      const args = message.content.split(" ").slice(2).join(" ")
   const chat = message.mentions.channels.first();
      if(!chat) {
      const lang = db.fetch(message.guild.id)
        if(lang === "ar") {     message.channel.send("**رجاء منشن الشات**")   }else if(lang === "en")
        message.channel.send("Please Mention The chat") 
    return    
      }
      db.set(`log_${message.guild.id}`, chat.id)
      const lang = db.fetch(message.guild.id)  
        if(lang === "ar") {     message.channel.send(`**
      تم الحفظ 
      الشات : ${chat}**`)   }else if(lang === "en") 
      message.channel.send(`
Done ✔ Preservation 
chat : ${chat}`)
        console.log("done")
    }
  })

client.on("message", async message => {
if(message.content.startsWith(prefix + "add")) {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
  }
    const cmd  = message.content.split(" ")
      const user = message.mentions.users.first() || cmd[1]
    if(!message.channel.name.includes("ticket-")) {
    const lang = db.fetch(message.guild.id) 
      if(lang === "ar") {     message.channel.send("**هذه الشات ليس تذكرة**")   }else if(lang === "en") {
    
     message.channel.send("The Channel Don't Ticket"); 
     return
    }

  if(!user) return message.channel.send(`>>> ** Write ✍ Id User / Mention User**`)
    message.channel.createOverwrite(user, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true

    })
    const lan = db.fetch(message.guild.id)  
      if(lan === "ar") {     message.channel.send("** تم اضافة الشخص**")   }else if(lan === "en") 
  message.channel.send("Done Add User")
} 
}
})

client.on("message", async message => {
if(message.content.startsWith(prefix + "remove")) {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
  }
    const cmd  = message.content.split(" ")
      const user = message.mentions.users.first() || cmd[1]
  
  if(!message.channel.name.includes("ticket-")) { const lang = db.fetch(message.guild.id)  
    if(lang === "ar") {     message.channel.send("**هذه الشات ليس تذكرة**")   }else if(lang === "en") 
    
     message.channel.send("The Channel Don't Ticket"); 
     return
    }

  if(!user) {
  const lang = db.fetch(message.guild.id)  
    if(lang === "ar") {     message.channel.send("**رجاء منشن العضو او اكتب ايديه**")   }else if(lang === "en")
  message.channel.send(">>> ** Write Id User / Mention User **")
    return 
    }
  message.channel.createOverwrite(user, {

    
  
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
        })

  const lan = db.fetch(message.guild.id)   
    if(lang === "ar") {     message.channel.send("**تم ازالة الشخص**")   
          }else if(lang === "en") message.channel.send(`**Done Remove user**`);     
}
})
client.on("message", async message => {
 if(message.content.startsWith(prefix + "delete")) {
   if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
   }
   if(!message.channel.name.includes("ticket-")) { const lang = db.fetch(message.guild.id) 
     if(lang === "ar") {     message.channel.send("**هذه الشات ليس تذكرة**")   }else if(lang === "en") 
    
     message.channel.send("The Channel Don't Ticket"); 
     return
    }

   message.channel.delete();
 } 
})

client.on("message", async message => {
  if(message.content.startsWith(prefix + "close")) {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
  } 
    if(!message.channel.name.includes("ticket-")) {
   const lang = db.fetch(message.guild.id) 
     if(lang === "ar") {     message.channel.send("**هذه الشات ليس تذكرة**")   }else if(lang === "en") 
    
     message.channel.send("The Channel Don't Ticket"); 
     return
    }
    message.channel.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: false
   
    });
const lag = db.fetch(message.guild.id)  
  if(lag === "ar") {     message.channel.send("**تم قفل التذكرة**")   }else if(lag === "en") message.channel.send(`**Done Closed Ticket**`); 
     
  }
})



client.on("message", async message => {
  if(message.content.startsWith(prefix + "rename")) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     message.channel.send(`**لا تمتلك صلاحيات كافيه**`)
   }else if(lang === "en") message.channel.send(`**Don't Have Permission**`);     
 return
    }
if(!message.channel.name.includes("ticket-")) {
const lang = db.fetch(message.guild.id) 
  if(lang === "ar") {     message.channel.send("**هذه الشات ليس تذكرة**")   }else if(lang === "en")
    
     message.channel.send("The Channel Don't Ticket"); 
     return
    }

    const cmd = message.content.split(" ").slice(1).join(" ")
    if(!cmd) {
    const lang = db.fetch(message.guild.id) 
      if(lang === "ar") {     message.channel.send("**اكتب اسم التذكرة الجديد**")   }else if(lang === "en")
      message.channel.send("Write New Name of Ticket")
return 
    }
    message.channel.setName(cmd)
    const lan = db.fetch(message.guild.id)  
      if(lan === "ar") {     message.channel.send("**تم تغير اسم التذكرة **")   }else if(lan === "en") message.channel.send(`**Done Rename Of Ticket**`);      
}
})


