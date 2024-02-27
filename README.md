# Discord Profile Enhancer
Introducing the Feature-Enriched Discord Profile Enhancer! Elevate your Discord experience effortlessly with these standout features:

🌟 Multiple Dynamic Statuses: Showcase your versatility with a variety of statuses that change seamlessly.

🎮 Engaging Activities: Take your presence to the next level by displaying exciting activities, keeping your profile vibrant and dynamic.

⏰ Interval-Based Updates: Set the script in motion, and watch as your status and activities rotate at predefined intervals, adding a touch of freshness to your profile.

Transform your Discord presence effortlessly and stay at the forefront of online interactions. Elevate your virtual identity with our Profile Enhancer script – because your online persona deserves nothing but the best! 🚀✨

# How to run:
Follow these steps to run the project:

1. **Install npm:**
   Ensure that you have Node.js and npm installed on your machine. If not, download and install them from [Node.js official website](https://nodejs.org/).

2. **Install Dependencies:**
   Open a terminal in the project directory and run the following command to install project dependencies:
   ```javascript
   npm install

3. **Get Your Discord Token**

To retrieve your Discord token, follow these steps:

- Open the Discord Console by pressing [Ctrl + Shift + I].

- Copy and paste the following code into the console:
   
   ```javascript
   window.webpackChunkdiscord_app.push([
     [Math.random()],
     {},
     req => {
       if (!req.c) return;
       for (const m of Object.keys(req.c)
         .map(x => req.c[x].exports)
         .filter(x => x)) {
         if (m.default && m.default.getToken !== undefined) {
           return copy(m.default.getToken());
         }
         if (m.getToken !== undefined) {
           return copy(m.getToken());
         }
       }
     },
   ]);
   console.log('%cWorked!', 'font-size: 50px');
   console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');

4. **Input your token in config.json**
 ![image](https://github.com/VineeTagarwaL-code/discord-custom-profile/assets/91052168/5c948ded-3fc1-4d82-8af5-8c627e371886)
5. **Configure and change the data according to your need**

# OPEN FOR CONTRIBUTIONS ( DONT UPDATE README WITH BS )
