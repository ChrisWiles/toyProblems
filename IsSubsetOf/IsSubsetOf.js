Array.prototype.isSubsetOf = function(array) {
  return this.filter(item => array.find(x => x === item)).length == this.length
}
