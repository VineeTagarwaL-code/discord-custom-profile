const { Client } = require("discord.js-selfbot-v13");
const fs = require("fs");
const colors = require("colors");
const client = new Client();

const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));
const activities = config.activities;
const customStatus = config.customStatus;
const aboutMe = config.aboutMe;

if (!activities.length) {
  if (config.toggleActivity) {
    console.log(
      `[ Error ]`.red,
      `No activities found in config.json file!`.yellow
    );
    process.exit(1);
  }
}
if (!customStatus.length) {
  if (config.toggleCustomStatus) {
    console.log(
      `[ Error ]`.red,
      `No custom status found in config.json file!`.yellow
    );
    process.exit(1);
  }
}
if (!aboutMe.length) {
  if (config.toggleAboutMe) {
    console.log(
      `[ Error ]`.red,
      `No about me found in config.json file!`.yellow
    );
    process.exit(1);
  }
}
if (!config.token) {
  console.log(
    `[ Error ]`.red,
    `Please add your token in config.json file!`.yellow
  );
  process.exit(1);
}
welcome();
function startSetting(client) {
  if (config.toggleActivity) {
    setInterval(() => {
      activity = getRandomActivity();
      if (activity.type == "STREAMING") {
        client.user.setActivity({
          name: activity.name,
          type: activity.type,
          url: activity.url,
        });
      } else {
        client.user.setActivity({
          name: activity.name,
          type: activity.type,
        });
      }
    }, config.delay * 1000);
  }

  if (config.toggleAccent) {
    setInterval(() => {
      client.user.setAccentColor(getRandomHexCode());
    }, config.delay * 1000);
  }

  if (config.toggleAboutMe) {
    setInterval(() => {
      client.user.setAboutMe(getRandomAboutMe());
    }, config.delay * 1000);
  }

  if (config.toggleCustomStatus) {
    setInterval(() => {
      client.user.setPresence({
        activities: [{ name: `${getRandomStatusText()}`, type: "CUSTOM" }],
      });
    }, config.delay * 1000);
  }
}

client.on("ready", async () => {
  client.user.setAccentColor(config.accentColor);
  if (config.toggleActivity) {
    activity = getRandomActivity();
    if (activity.type == "STREAMING") {
      client.user.setActivity({
        name: activity.name,
        type: activity.type,
        url: activity.url,
      });
    } else {
      client.user.setActivity({
        name: activity.name,
        type: activity.type,
      });
    }
  }
  if (config.toggleAccent) {
    client.user.setAccentColor(getRandomHexCode());
  }

  if (config.toggleCustomStatus) {
    client.user.setPresence({
      activities: [{ name: `${getRandomStatusText()}`, type: "CUSTOM" }],
    });
  }

  if (config.toggleAboutMe) {
    client.user.setAboutMe(getRandomAboutMe());
  }

  console.log(
    `[ User - ${client.user.username} ]`.magenta,
    `is now online and Showing Custom Status!`.green
  );
  startSetting(client);
});

const getRandomActivity = () => {
  return activities[Math.floor(Math.random() * activities.length)];
};
const getRandomStatusText = () => {
  return customStatus[Math.floor(Math.random() * customStatus.length)];
};
const getRandomAboutMe = () => {
  return aboutMe[Math.floor(Math.random() * aboutMe.length)];
};

client.login(config.token).catch((err) => {
  console.log(`[ Error ]`.red, `Invalid Token!`.yellow);
  process.exit(1);
});

const getRandomHexCode = () => {
  const letters = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += letters[Math.floor(Math.random() * 16)];
  }
  return hexCode;
};

function welcome() {
  console.clear();
  console.log();
  console.log(
    `
    ░█████╗░██╗░░░██╗░██████╗████████╗░█████╗░███╗░░░███╗  ██████╗░██████╗░░█████╗░███████╗██╗██╗░░░░░███████╗
    ██╔══██╗██║░░░██║██╔════╝╚══██╔══╝██╔══██╗████╗░████║  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║██║░░░░░██╔════╝
    ██║░░╚═╝██║░░░██║╚█████╗░░░░██║░░░██║░░██║██╔████╔██║  ██████╔╝██████╔╝██║░░██║█████╗░░██║██║░░░░░█████╗░░
    ██║░░██╗██║░░░██║░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║  ██╔═══╝░██╔══██╗██║░░██║██╔══╝░░██║██║░░░░░██╔══╝░░
    ╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║  ██║░░░░░██║░░██║╚█████╔╝██║░░░░░██║███████╗███████╗
    ░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝  ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚══════╝╚══════╝`
      .magenta
  );
  console.log();
  console.log(
    `
      ███████████████████████████████████████████████████
      █▄─▄─▀█▄─█─▄███▄─█─▄█▄─▄█▄─▀█▄─▄█▄─▄▄─█▄─▄▄─█─▄─▄─█
      ██─▄─▀██▄─▄█████▄▀▄███─███─█▄▀─███─▄█▀██─▄█▀███─███
      ▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▀▀▄▀▀▀▄▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▀▄▄▄▀▀`.yellow
  );
  console.log();
}
