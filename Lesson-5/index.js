// CallBack function

const arr = [3, 1, 3, 9, 6];

const forEachCallback = (value, index) => console.log(value, index);

const forlayanFunksiya = (callBackFunction) => {
  for (let i = 0; i < arr.length; i++) {
    callBackFunction(arr[i], i);
  }
};

forlayanFunksiya(forEachCallback);

console.log(["san", 1, 3]);

// forEach

const returnValue = arr.forEach((value, index, arr) => {
  return value + 1;
});

// console.log(returnValue);

// array methods

// map
const rt = arr.map((value, index) => value + 5);

// filter
const rt2 = arr.filter((value, index) => {
  return value === 3;
});
console.log(rt2);

// some

//findIndex

const rt3 = arr.findIndex((value, index) => value === 6);
console.log(rt3);
