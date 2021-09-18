let MyStr = "vishal kumar";

const reverseString = (str) => {
  let Array = [];
  let reversedArray = "";
  for (let i = 0; i < str.length; i++) {
    //O(n)
    Array.push(str[i]);
  }

  for (let j = Array.length - 1; j >= 0; j--) {
    //O(n)
    reversedArray += Array[j];
  }
  console.log(reversedArray);
};

reverseString(MyStr);
