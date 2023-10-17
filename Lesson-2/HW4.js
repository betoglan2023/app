// 2) arrow function, myFunc(text)
// const netije = myFunc("salam Umyt")
// output: Umyt Salam
// const netije = myFunc("salam")
// output: Berdi Salam
// const netije = myFunc("umyt")
// output: Umyt Salam

// ÜNS BER:Harplaryn uly kiçiligine, text maximum 2 sozi bolar,
// dine salam bersem output yokardaky,
// dine umyt bersem sholar yokardaky yaly

// const mesele = (text) => {
//   let nam1 = "salam Umyt";
//   let nam2 = "salam";
//   let nam3 = "umyt";
//   let at = "Berdi";
//   myArray = text.split(" ");
//   if (text === nam1) {
//     return (
//       myArray[1] +
//       " " +
//       myArray[0][0].toUpperCase() +
//       myArray[0].slice(1)
//     );
//   } else if (text === nam2) {
//     return at + " " + myArray[0].charAt(0).toUpperCase() + myArray[0].slice(1);
//   } else if (text === nam3) {
//     return (
//       nam2.charAt(0).toUpperCase() +
//       nam2.slice(1) +
//       " " +
//       nam3.charAt(0).toUpperCase() +
//       nam3.slice(1)
//     );
//   } else return "Nabelli soz, Tazeden synansyn";
// };

// console.log(mesele("umyt"));

// HW - myFunc(text), 1 parameter
// console.log("kitaphana") => // output: anahpatik
// tersine yazmaly
let nm = "";
const reverse = (text) => {
  if (text === "") return "";
  nm += text[0];
  return reverse(text.substr(1)) + text.charAt(0);
};
reverse("kitaphana");
console.log(reverse("kitaphana"));

//  if (text === "") return "";

// su yokarka dusunmedim bos yere name ucin beytya
