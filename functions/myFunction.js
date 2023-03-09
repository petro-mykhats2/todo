// exports.handler = async function (event, context) {
//   if (event.httpMethod !== "POST") {
//     return { statusCode: 405, body: "Method Not Allowed" }
//   }

//   if (!event.body) {
//     return { statusCode: 400, body: "Body is empty!" }
//   }

//   try {
//     const params = JSON.parse(event.body)
//     params
//   } catch (error) {
//     return console.log(error)
//   }

//   return {
//     statusCode: 200,
//     body: params,
//   }
// }

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  if (!event.body) {
    return { statusCode: 400, body: "Body is empty!" }
  }

  let params
  try {
    params = JSON.parse(event.body)
    console.log("params!!!!", params)
  } catch (error) {
    console.log(error)
    return { statusCode: 400, body: "Invalid JSON" }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(params),
  }
}
