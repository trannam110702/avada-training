const { https } = require("firebase-functions");
const apiHandler = require("./handlers/api");

exports.api = https.onRequest(apiHandler.callback());
exports.bigben = https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1; // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${"BONasdfasdG ".repeat(hours)}
    </body>
  </html>`);
});
