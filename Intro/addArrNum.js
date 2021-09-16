const arr = ["a", "b", "c", "d"];

function printNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + " " + arr[j]);
    }
  }
}

printNumbers(arr);
