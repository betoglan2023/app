// 1) myFunc(10) => san beryan arraya salmaly FOR-da
// output => [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]

// 2) text = "salam"
// etmeli zat s-1, a-2, l-3, a-4, m-5

let sanlar = [];

const myFunc = (num) => {
  for (i = 0; i < num; i++) {
    sanlar.push(i);
  }
};
myFunc(55);
console.log(sanlar);

// let arr = [];
// let str = "";
// let str1 = "";
// let str2 = "";
// const myFunc = (text) => {
//   for (i = 0; i < text.length; i++) {
//     str = text[0 + i];
//     str1 = str + "-" + i;
//     console.log(str1);
//   }
// };
// myFunc("salam");

// 2nji netijede s-0 a-1 l-3 ....... yalak cykya sanalry sonam hersi ayry setirde
//  output tocno senki yaly bolsunmy ?
