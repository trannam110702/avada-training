async function hello(ctx) {
  return (ctx.body = {
    message: "Hello World",
  });
}

module.exports = {
  hello,
};
