// Homework for learning slice, substr methods

// 1) arrow function, parameters(num, text)
// const netije = myfunc(6, "meselemdir")
// console.log(netije) output: dirmeselem,
// const netije2 = myFunc(10, "meselem")
// output: senin beren sanyn beren sozun harpydan uly



example = (text,num,booleanValue) => {

if (booleanValue){

return text.substring(num)+text

}

console.log("senin beren sanyn beren sozun harpydan uly")

}

console.log (example("meselemdir",7,true))

// true - ly mesela kan dusunmedim . nadip sozun harpynyn uzynlygyny sanlarda anladyp bolyandygyna , 
//object ya array bilen islemelimi