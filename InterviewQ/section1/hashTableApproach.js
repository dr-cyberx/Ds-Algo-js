const arr1 = ["a", "b", "c", "d"];
const arr2 = ["x", "y", "z", "m"];
const arr3 = ["m", "n", "o", "a"];

const IndealFunction = (array1, array2) => {
  // loop through all element in array1 and insert them in object with the value of true
  let mapObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (!mapObj[array1[i]]) {
      const item = array1[i];
      mapObj[item] = true;
    }
  }
  //loop through the second array and check that if any item exist in the created object
  for (let j = 0; j < array2.length; j++) {
    if (mapObj[array2[j]]) {
      return true;
    }
  }
  return false;
};

console.log(IndealFunction(arr1, arr3));

// O(2n) thats god