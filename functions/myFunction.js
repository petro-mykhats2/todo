exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    }
  }

  const { name, email, message } = JSON.parse(event.body)

  // виконайте потрібну обробку даних тут
  console.log("TEST", name, email, message)

  return {
    statusCode: 200,
    body: "Data sent successfully",
  }
}
