const prepareDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};
module.exports = prepareDocs;
