function treeMaker(value) {
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  const node = treeMaker(value);
  this.children.push(node);
}

treeMaker.methods.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) {
      return true;
    }
  }
  return false;
}
