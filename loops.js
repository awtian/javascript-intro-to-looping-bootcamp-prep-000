function forLoop (array) {
  for (var i= 0; i < 25; i++)
  if (i == 1) {
  return array.push `I am ${i} strange loop.`
} else {
  return array.push `i am ${i} strange loops.`
}

}

var a = [];
console.log(forLoop(a))
