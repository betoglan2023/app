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

const mesele = (text) => {
  let nam1 = "salam Umyt";
  let nam2 = "salam";
  let nam3 = "umyt";
  let at = "Berdi";
  myArray = text.split(" ");
  if (text === nam1) {
    return myArray[1] + " " + myArray[0];
  } else if (text === nam2) {
    return at + " " + myArray[0];
  } else if (text === nam3) {
    return nam2 + " " + nam3;
  }
};

console.log(mesele("salam"));
