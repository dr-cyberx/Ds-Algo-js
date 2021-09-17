// Naive
// function hasPairWithSum(arr, sum) {
//   var len = arr.length;
//   console.log("length: ", len);
//   for (var i = 0; i < len - 1; i++) {
//     console.log("arr i :", arr[i]);
//     for (var j = i + 1; j < len; j++) {
//       console.log("arr j :", arr[j]);
//       if (arr[i] + arr[j] === sum) {
//         // console.log(arr[i] + " " + arr[j]);
//         return true;
//       }
//     }
//   }
//   return false;
// }

// Better
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
          console.log("<><> ", arr[i])
        return true;
      }
      console.log(sum + " " + arr[i]," " , sum - arr[i])
      mySet.add(sum - arr[i]);
    }
    return false;s
  }

console.log(hasPairWithSum2([2, 6, 1, 2, 6, 7], 13));
