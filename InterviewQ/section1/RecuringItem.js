let array1 = [7, 8, 6, 2, 3, 5, 7, 1, 3, 8]; //2
// let array1 = [1, 2, 3, 4, 5, 6]; //2

const findRecurringItem = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}; //O(n^2)

const findRecurringItemV2 = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined;
};

console.log(findRecurringItemV2(array1));
