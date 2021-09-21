let array1 = [7, 8, 8, 6, 2, 3, 5, 7, 1, 3, 8]; //2
// let array1 = [1, 2, 3, 4, 5, 6]; //2

const findRecurringItemV1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[i + 1]) {
        return arr[i];
      }
    }
  }
  return undefined;
}; //O(n^2) space : O(1)

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
}; //O(n) space : O(n)

console.log(findRecurringItemV1(array1));
