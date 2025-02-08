require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("سلام! من ربات مدیریت محتوای تلگرام هستم. برای دریافت ترندهای روز /trend را بفرستید.");
});

bot.command("trend", async (ctx) => {
  // فعلاً ترندها را به‌صورت دستی ارسال می‌کنیم
  const trends = [
    "🔥 جدیدترین اخبار داغ امروز",
    "📈 افزایش قیمت بیت‌کوین",
    "🎬 فیلم‌های پرفروش این هفته",
  ];
  
  let message = "📌 **ترندهای روز:**\n";
  trends.forEach((trend, index) => {
    message += `${index + 1}. ${trend}\n`;
  });

  ctx.reply(message, { parse_mode: "Markdown" });
});

bot.launch();