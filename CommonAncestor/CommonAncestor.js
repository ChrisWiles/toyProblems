var Tree = function() {
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  var closest = null;
  if (child1 === child2) {
    return child1;
  }
  if (this.isDescendant(child1) && this.isDescendant(child2)) {
    closest = this;
    this.children.forEach(ele => closest = this.children[ele].getClosestCommonAncestor(child1, child2) || closest)
  }
  return closest;
};

Tree.prototype.getAncestorPath = function(child) {
  var path = [];
  if (this.isDescendant(child) || this === child) {
    path.push(this);
    for (var i = 0; i < this.children.length; i++) {
      path = path.concat(this.children[i].getAncestorPath(child));
    }
  }
  return path.length > 0 ? path : null;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
