function deepEquals(a, b) {

  // If the objects have a different # of properties,
  // they aren't equal so return
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  } else if (Array.isArray(a) && !Array.isArray(b) ||
    Array.isArray(b) && !Array.isArray(a)) {
    // If a is an array and b isn't or vice versa,
    // then they aren't equal
    return false;
  }
  else {
    // For every property in a, check that the equivalent
    // key/value is in b
    // If it's an object, recurse to check equality of
    // the nested properties
    for (let k in a) {
      if (typeof a[k] === 'object' && typeof b[k] === 'object') {
        return deepEquals(a[k], b[k]);
      } else if (a[k] !== b[k]) {
        return false;
      }
    }
  }
  return true;
};
