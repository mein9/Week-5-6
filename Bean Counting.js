function countBs(string) {
  // return number of cap Bs
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count += 1;
    }
  }
  return count;
}
function countChar(string, char) {
  //return number of chars selected by arg char
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count += 1;
    }
  }
  return count;
}
