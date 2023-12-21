const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./firebase-todo-serviceAccount.json");

const prepareDocs = require("../helper/prepareDocs");

initializeApp({
  credential: cert(serviceAccount),
});

const firestore = getFirestore();
const todosCollection = firestore.collection("todoes");

const getAll = async () => {
  const querySnapshot = await todosCollection.get();
  const data = querySnapshot.docs.map(prepareDocs);
  return data;
};

const add = async (data) => {
  await todosCollection.add({
    ...data,
    isCompleted: false,
  });
};

const deleteOne = async (id) => {
  await todosCollection.doc(id).delete();
};

const deleteMany = async (ids) => {
  const batch = firestore.batch();
  ids.forEach((id) => {
    const docRef = todosCollection.doc(id);
    batch.delete(docRef);
  });
  await batch.commit();
};

const updateOne = async (data, id) => {
  const docRef = todosCollection.doc(id);
  const docSnapshot = await docRef.get();
  if (!docSnapshot.exists) {
    throw new Error("Todo not found");
  }
  await docRef.update(data);
};

const updateMany = async (body) => {
  const { ids, isCompleted = false } = body;
  const batch = firestore.batch();
  ids.forEach((id) => {
    const docRef = todosCollection.doc(id);
    batch.update(docRef, { isCompleted });
  });
  await batch.commit();
};

module.exports = { add, deleteOne, deleteMany, updateOne, updateMany, getAll };
