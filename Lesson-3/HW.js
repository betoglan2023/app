// 1kitaphanany for da islemeli
// text slice
// [].pop();
// let err1 = "Error";
// let reversed = [];
// const myFunc1 = (text) => {
//   let myArray = text.split("");
//   if (text.length > 0) {
//     for (i = text.length; i > 0; i--) {
//       reversed.push(myArray.pop());
//     }
//   } else if (text.length === 0) return err1;
// };
// console.log(myFunc1("kitaphana"));
// console.log(reversed, "reversed");
// console.log(["a", "b"].join(""));
// let err = "Error";
// const myFunc = (text) => {
//   let myArray = text.split("");
//   if (text.length > 0) {
//     let netije = myArray.reverse();
//     console.log(netije.join(""));
//   } else if (text.length === 0) return err;
// };
// console.log(myFunc("kitaphana"));

// const berdikesilen = "berdi".slice(0, 3);
// console.log(berdikesilen, "berdi");

// 2umytSlice("bdabakjshdsahd", 9, 12);

let str2 = "";
let err = "Beren sanyn uly";
let str = "";
const myFunc = (text, num1, num2) => {
  if (num2 === undefined) {
    for (i = num1; i < text.length; i++) {
      str += text[i];
    }
    console.log(str);
  } else if (num1 > text.length) {
    for (i = num1; i < text.length; i++);
    console.log(err);
  } else if (num2 > text.length) {
    for (i = num1; i < text.length; i++) {
      str += text[i];
    }
    let err2 = num2 + " " + "cenli harp yok";
    console.log(str, " " + " " + err2);
  } else {
    for (i = num1; i < num2; i++) {
      str += text[i];
    }
    console.log(str);
  }
};
myFunc("assadcda12dc3123csasds1sad23adberdiKesilencrr2asdwrca", 100, 30);

// 2nji meselede beren sanyn uly diyp yazmaly bolsa hokman 2nji argumendy bermeli bolmasa islanok
// 2nji argumentsyz bos cykarya

// Yokarky funksiyany ösdürmeli meselem diňe num1 bersem:
// myFunc("kitaphana", 2) => 2den son kesmeli sonuna chenli: taphana
// myFunc("kitaphana", 10) => num1 > kitapahana length bolsa => beren sanym uly
// myFunc("kitaphana", 3, 30) => bunam 30a chenli harp yok diyip, 3 den son kesip bermeli

// 3const newArr = ["name", "dajds", 89, 3921, 2910, true, false];
// garym gatym gelya ayratyn typelary boyunca sortlamaly
// boolen string number . funcsiyada . ayratyn arrayda
// const

// const myFunc = (text) => {
//   let str = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     str += text[i];
//   }
//   console.log(str);
// };
// myFunc("kitaphana");

// let boolenlar = [];
// let sozler = [];
// let sanlar = [];

// const arr = ["umyt", 1, true, false, 4, 9, "gerek", "kerim", 5, false];

// for (i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === typeof "a") {
//     sozler.push(arr[i]);
//   } else if (typeof arr[i] === typeof 1) {
//     sanlar.push(arr[i]);
//   } else boolenlar.push(arr[i]);
// }

// console.log(sozler, sanlar, boolenlar);
