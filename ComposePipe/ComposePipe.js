compose = function() {
  const args = Array.prototype.slice.call(arguments);

  return function(a) {
    return args.reduceRight((accumulatedVal, currentVal) => currentVal(accumulatedVal), a)
  }
}

pipe = function() {
  const args = Array.prototype.slice.call(arguments);

  return function(a) {
    return args.reduce((accumulatedVal, currentVal) => currentVal(accumulatedVal), a)
  }
}
