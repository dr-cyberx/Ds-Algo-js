
const {performance} = require('perf_hooks');
const { cars } = require("./SampleArray");
// const arr = ['nemo'];
// const secondArr = ['ram', 'sham', 'jhone', 'saurav', 'deepak', 'alex', 'raman', 'nemo']
// const arr = new Array(10000000).fill('nemo')


function findNemo(arr) {
  let t0 = performance.now();
  for(let i = 0; i < arr.length; i++){
    if(arr[i]=== 'nemo'){
      console.log('nemo found')
    }
  }
  let t1 = performance.now();

  console.log('function took : ', t1 - t0 + " miliseconds")
}

findNemo(cars) //O(n) => linear time