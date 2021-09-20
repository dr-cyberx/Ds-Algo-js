let array1 = [2, 1, 11, 15, 4, 12, 99, 8];

const findSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return `${i} ${j}`;
      }
    }
  }
};

console.log(findSum(array1, 9)); //O(n^2)
