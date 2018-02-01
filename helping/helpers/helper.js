module.exports = function (context) {
  console.log('inside helper', context);
  return context.data.root.message;
};
