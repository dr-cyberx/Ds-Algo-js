// constant time O(1)
const { performance } = require("perf_hooks");
const { cars } = require("./SampleArray");

const LogFirstItem = (arr) => {
  let t0 = performance.now();
  console.log(arr[0]);
  let t1 = performance.now();

  console.log("function took : ", t1 - t0 + " miliseconds");
};

LogFirstItem(cars);
