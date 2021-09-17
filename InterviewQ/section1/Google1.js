const arr1 = ["a", "b", "c", "d"];
const arr2 = ["x", "y", "z", "m"];
const arr3 = ["m", "n", "o", "a"];

function findSameVal(array1, array2) {
    let success;
  array1.forEach((element) => {
    array2.forEach((element1) => {
      if (element === element1) {
        success = true
      }else{
        success = false
      }
    });
  });

  return success;
}

console.log(findSameVal(arr1, arr2));

// O(n^2) not good case
