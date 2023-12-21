const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue, Filter } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const data = {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
  time: Timestamp.fromDate(new Date()),
};

// Add a new document in collection "cities" with ID 'LA'
const addData = async () => {
  await db.collection("cities").add(data);
};
addData();
