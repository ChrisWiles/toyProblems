commonCharacters = function(s1, s2) {
  s1 = s1.toLowerCase().replace(/[^a-zA-Z]+/g, "");
  s2 = s2.toLowerCase().replace(/[^a-zA-Z]+/g, "");
  s2 = s2.split('').filter((item, pos) => s2.indexOf(item) == pos);
  s1 = s1.split('').filter((item, pos) => s1.indexOf(item) == pos);
  let common = [];
  s1.forEach(char1 => {
    s2.forEach(char2 => {
      if (char1 === char2) {
        return common.push(char1);
      }
    });
  });
  return common.join('');
};
