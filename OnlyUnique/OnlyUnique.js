function onlyUnique(str) {
  return str.split('')
    .filter(e => str.indexOf(e) === str.lastIndexOf(e))
    .join('')
}
