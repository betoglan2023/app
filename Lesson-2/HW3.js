// Homework for learning slice, substr methods

// 1) arrow function, parameters(num, text)
// const netije = myfunc(6, "meselemdir")
// console.log(netije) output: dirmeselem,
// const netije2 = myFunc(10, "meselem")
// output: senin beren sanyn beren sozun harpydan uly

const example = (text, num) => {
  if (num > text.length) {
    return "senin beren sanyn beren sozun harpydan uly";
  }
  return text.substring(num) + text.slice(0, num);
};

// console.log("komptyuter".slice(0, 2))

console.log(example("kitap", 2));

// true - ly mesela kan dusunmedim . nadip sozun harpynyn uzynlygyny sanlarda anladyp bolyandygyna ,
//object ya array bilen islemelimi

const example2 = (text1, text2) => {
  let text1length = text1.length;
  let text2length = text2.length;
  if (text1length > text2length) {
    return text1;
  } else if (text1length == text2length) {
    return "ikisem dendir";
  } else {
    return text2;
  }
};

console.log(example2("berd", "umyt"));
