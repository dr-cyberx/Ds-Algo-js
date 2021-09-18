let numArray1 = [0, 2, 4, 6];
let numArray2 = [1, 3, 5, 7];

// output = [0, 1, 2, 3, 4, 5, 6, 7]

const sortMultipleArray = (arr1, arr2) => {   //O(n)
  // let create and new array from these 2 array
  let mergedArray = [];
  let Array1stItem = arr1[0];
  let Array2ndItem = arr2[0];
  let i = 1;
  let j = 1;

  while (Array1stItem || Array2ndItem) {
      console.log(Array1stItem + " " + Array2ndItem)
    if (!Array2ndItem || Array1stItem < Array2ndItem) {
      mergedArray.push(Array1stItem);
      Array1stItem = arr1[i];
      i++;
    } else {
      mergedArray.push(Array2ndItem);
      Array2ndItem = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
};

sortMultipleArray(numArray1, numArray2);
