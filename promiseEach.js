module.exports = (iterable, catcher) => iterable
  .reduce((acc, elem) =>  acc.then(elem, catcher), Promise.resolve())
