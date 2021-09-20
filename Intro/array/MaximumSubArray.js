// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const MaxSubArray = (arr) => {
  let resultArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] > 6) {
      continue;
    } else {
      resultArr.push(arr[i]);
    }
    // console.log(arr[i]);
  }
  console.log(resultArr)
};

MaxSubArray(nums);
