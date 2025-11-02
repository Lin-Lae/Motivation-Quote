import express from 'express';
import bodyParser from 'body-parser';
import ejs from "ejs";

const app = express();
const port = process.env.port || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  console.log(index);
  const quote = quotes[index];
  res.render("index.ejs", {quote: quote});
});


const quotes = [
    "Believe in yourself — you are stronger than you think 💪",
    "Don’t wait for the perfect moment. Take the moment and make it perfect ✨",
    "Every great dream begins with a dreamer 🌟",
    "Keep going. Each step may seem small, but it’s progress ❤️",
    "Your journey may be tough, but your spirit is tougher 🦋",
    "The sunrise always follows the darkest night 🌅",
    "Discipline beats motivation — but motivation makes it beautiful 🌿",
    "You are capable of more than you imagine 🌈",
    "Dream big and dare to fail 🌙",
    "Rise above the storm and you will find the sunshine ☀️",
    "Don’t stop until you’re proud 🏆",
    "The harder you work for something, the greater you’ll feel when you achieve it 🌻",
    "Focus on the step in front of you, not the whole staircase 🪜",
    "You were born to shine ✨",
    "Stay positive, work hard, make it happen 💫",
    "Be your own kind of beautiful 🌹",
    "When nothing goes right, go left ↩️",
    "You got this 💪🔥",
    "Be fearless in the pursuit of what sets your soul on fire ❤️‍🔥",
    "The best view comes after the hardest climb ⛰️",
    "Don’t look back — you’re not going that way 🚶‍♀️",
    "Your time is now ⏰",
    "Keep your face always toward the sunshine 🌞",
    "Difficult roads lead to beautiful destinations 🛤️",
    "Turn your wounds into wisdom 🌺",
    "You are your only limit 🌠",
    "Believe you can and you’re halfway there 🚀",
    "Even the darkest night will end and the sun will rise 🌄",
    "Don’t be afraid to start over — it’s a new chance to build what you want 🌱",
    "Progress, not perfection 🌸",
    "The key to success is to start before you’re ready 🔑",
    "You are doing better than you think 🌼",
    "Work hard in silence, let success make the noise 🤫🏅",
    "Good things take time ⏳",
    "Stay humble. Work hard. Be kind 🌷",
    "Let your dreams be bigger than your fears 💭",
    "Never stop believing in hope 💖",
    "Failure is not the opposite of success — it’s part of success 🌻",
    "Small steps every day lead to big results 🐾",
    "When you can’t find the sunshine, be the sunshine ☀️",
    "Start where you are. Use what you have. Do what you can 🧭",
    "Be patient. The best things happen unexpectedly 🎁",
    "Work while they sleep, dream while they doubt 💼",
    "The secret of getting ahead is getting started 🏁",
    "Stay strong. Make them wonder how you’re still smiling 😌",
    "Be proud of how far you’ve come 🌈",
    "You don’t have to be perfect to be amazing 💫",
    "Courage doesn’t always roar — sometimes it’s a quiet whisper 🕊️",
    "The comeback is always stronger than the setback 💥",
    "Your vibe attracts your tribe ✨",
    "The pain you feel today will be the strength you feel tomorrow 🏋️‍♀️",
    "Don’t let your dreams stay dreams 🌙",
    "You are made of stardust and magic 🌌",
    "Focus on progress, not perfection 🪞",
    "Don’t wish for it, work for it ⚡",
    "The best way to predict your future is to create it 🌠",
    "Be brave enough to be bad at something new 🎨",
    "Turn your can’ts into cans and your dreams into plans 💭➡️📋",
    "You’re not behind; you’re just on your own path 🛤️",
    "Don’t wait for opportunity. Create it 🪄",
    "The struggle you’re in today is developing the strength you need tomorrow 🌿",
    "Stars can’t shine without darkness 🌟",
    "Fall seven times, stand up eight 💥",
    "Push yourself, because no one else is going to do it for you 🦁",
    "Make today count 📅",
    "One day or day one — you decide 🕊️",
    "You didn’t come this far just to come this far 🚶‍♂️",
    "If you get tired, learn to rest, not to quit 🛏️",
    "Grow through what you go through 🌻",
    "Don’t quit. You’re closer than you think 🎯",
    "A little progress each day adds up to big results 🧩",
    "Keep believing — the universe is working in your favor 🌌",
    "You are stronger than your excuses 💪",
    "Smile — you’re doing your best 😊",
    "Everything you can imagine is real 🎨",
    "Never give up on something you can’t go a day without thinking about 💭",
    "Be the energy you want to attract ⚡",
    "Your potential is limitless 🚀",
    "Success starts with self-belief 🌺",
    "Trust the timing of your life ⏳",
    "Be proud of every small win 🏅",
    "The best dreams happen when you’re awake 🌅",
    "Take the risk or lose the chance 🎯",
    "The future depends on what you do today 📆",
    "Focus on the good 💖",
    "Work hard, stay consistent, be patient 🌱",
    "Don’t let anyone dull your sparkle 💎",
    "Prove yourself to yourself, not others 🪞",
    "A positive mindset brings positive things 🌞",
    "You’re not lost — you’re finding your way 🌍",
    "The universe responds to brave souls 🌌",
    "Every day is a second chance 🌤️",
    "Keep your heart soft and your mind strong 💗🧠",
    "You’re growing even when it doesn’t feel like it 🌿",
    "You are enough. Always were. Always will be 🌸",
    "The best revenge is massive success 🏆",
    "Everything happens for a reason — trust the process 🌈",
    "Be patient — beautiful things take time 💐",
    "Hustle until your haters ask if you’re hiring 💼",
    "No rain, no flowers 🌧️🌷",
    "Stay focused and never give up 🎯",
    "Dream it. Believe it. Build it 🔨",
    "The world needs your light 💡",
    "You’re doing great — keep going 🌻"
  ];
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});