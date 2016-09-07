var makeHashTable = function() {
  var table = {}
  var storage = []
  var storageLimit = 1000
  table.insert = function(key, value) {
    // Index contains hashed key
    var index = getIndexBelowMaxForKey(key, storageLimit)

    // Initialize the bucket at index to an empty
    // array if it's not already
    storage[index] = storage[index] || []

    // See if the key already exists. If it does, update
    // the value. Otherwise, just push the new key
    // value pair onto the bucket
    storage[index].find(function(tuple) {
      if(tuple[0] === key) {
        tuple[1] = value
        return true
      }

      return false;
    }) || storage[index].push([key, value])
  }
  table.retrieve = function(key) {
    var i = getIndexBelowMaxForKey(key, storageLimit);

    // If the bucket at this hashed key exists,
    //   Search the bucket for an exact key match
    //   If found, return the associated value
    if(storage[i]) {
      return storage[i].reduce((val, arr) => {
        // If we find a key match,
        //   return the value
        if(arr[0] === key) {
          return arr[1]
        }

        // Otherwise, keep returning whatever
        // we've found previously
        return val
      }, undefined)
    }

    // If the bucket doesn't exist, then there can't
    // be a value associated with this key
    return undefined;
  };
  table.remove = function(key) {
    var i = getIndexBelowMaxForKey(key, storageLimit);
    // Remove the entire bucket and all values associated
    // with this key
    delete storage[i]
  };

  return table
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0
  for(var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
    hash = Math.abs(hash)
  }
  return hash % max
}
