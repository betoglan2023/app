// 6 dan kichilerini ayyrmaly MAP ulanyp

let res = [];

const arr = [8, 9, 10, 4, 5, 8, 9, 10, 3, 40, 20, 4, 2, 10];

const result = arr.map((value, index) => {
  if (value > 6) {
    res.push(value);
  }
});
console.log(res);

// HW 2 - 4den bashgalaryny return etmeli filter ulanyp

const arr2 = [5, 4, 5, 2, 8, 1, 4, 5, 9, 4];

const jem = arr2.filter((value, index) => {
  return value !== 4;
});
console.log(jem);
