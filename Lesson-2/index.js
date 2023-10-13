// string.length()

let text = "meselem";
console.log(text[6], "lenght");

//string.split()
const date = "2023-04-05FH14:45";
let text2 = "csgo play open";
let splittedArray = date.split("FH");
console.log(splittedArray);
console.log(typeof splittedArray);

//string.replace()

let text3 = "dota play again. dota is horrible";
console.log(text3.replace(/Dota/i, "csgo"));
console.log(text3.replaceAll("Dota", "Csgo"));

//string.startWith()

let email = "google@gmail.com";
let wrongEmail = "test@gmail.com";
console.log(email.startsWith("google"));
console.log(wrongEmail.startsWith("google"));

//string.endsWith()

let emaiL = "google@gmail.com";
let wrongEmaiL = "test@gmail.com";
console.log(email.endsWith("@gmail.com"));
console.log(wrongEmail.endsWith("@gmail.com"));

//string.toLowerCase()

console.log("Berdi".toLowerCase());

//string.toUpperCase()

console.log("berdi".toUpperCase());

//string.trim()

let text4 = "   Hello World    ";
console.log(text4.trim());

//string.includes()
let text5 = "Aman daga gitdi";
console.log(text5.includes("daga"));

//string.indexOf()

console.log(text5.lastIndexOf("a"));

console.log(text5.indexOf("a"));

// FUnctions

function withoutParamaters() {
  return "umyt";
}
// arrow function
const withoutParamatersArrow = () => {
  let test = "berdu";
  return "umyt" + test;
};

// if else

let num = 9;

if (num > 8) {
  console.log("ulydyr 8den");
} else {
  console.log("kichidir");
}

// And operator

num > 8 && console.log("ulydyr 8 den");

num > 8 && console.log("log something");

// falsy
// undefined, null, 0, ""
console.log("berdu" || "text");
// truthy
// "berdi", 90,
// or operator
const backendDangelyanValue = undefined;
backendDangelyanValue ||
  false ||
  console.log("log something even the left side is false");

let returnedValueFromAboveFunc = withoutParamatersArrow();

console.log(returnedValueFromAboveFunc);

// Homework for learning slice, substr methods

// 1) arrow function, parameters(num, text)
// const netije = myfunc(6, "meselemdir")
// console.log(netije) output: dirmeselem,
// const netije2 = myFunc(10, "meselem")
// output: senin beren sanyn beren sozun harpydan uly

// Homework

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
