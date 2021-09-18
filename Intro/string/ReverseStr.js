let MyStr = "ramuk lahsiv";

const reverseString = (str) => {

  if (!str || str.length < 2 || typeof str !== "string") {
    return "it not a valid string";
  }

  let Array = [];

  for (let j = str.length - 1; j >= 0; j--) {
    //O(n)
    Array.push(str[j]);
  }
  return Array.join("");
};


const reverseString2 = (str) => {
    return str.split("").reverse().join("")
}

const reverseString3 = str => [...str].reverse().join("")

console.log(reverseString3(MyStr));
