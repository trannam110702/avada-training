const { https } = require("firebase-functions");
const apiHandler = require("./handlers/api");

exports.api = https.onRequest(apiHandler.callback());
