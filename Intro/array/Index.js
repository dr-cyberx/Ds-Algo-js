// Array methods with Big O

let testArr = ["a", "b", "c", "d"];

// testArr.push('e'); //O(1)
//testArr[0] //O(1)
// testArr.pop(); //O(1)

// testArr.unshift('x') //O(n)

testArr.splice(2, 0, 'y') //O(n)


console.log(testArr);
