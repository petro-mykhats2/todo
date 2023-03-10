const TelegramBot = require("node-telegram-bot-api")
const token = "YOUR_TELEGRAM_BOT_TOKEN"

const bot = new TelegramBot(token, { polling: false })

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  if (!event.body) {
    return { statusCode: 400, body: "Body is empty!" }
  }
  const chatId = 735449634

  let message
  try {
    const message = JSON.parse(event.body)
    await bot.sendMessage(chatId, message)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent" }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error sending message" }),
    }
  }
}
