// Boolean: true or false
// string type: "berdi", "6",
// number: 7, 9, 0

let bashgasan = "4"
let san = 6
// variable naming: let, var, const: hemishelik
let strToNum = parseInt(bashgasan, 10)

console.log(parseInt(bashgasan, 10) + san)


function atbilenyasygosyan(name, booleanValue, age = 15) {
    // let sangoshya = age + 7
    // let nameAndAge = name + " " + sangoshya  + " " + "yashynda"
    // return nameAndAge

    if (booleanValue) {
        return age * 10
    }
    return age + 15
}

function withBackstcik(name, age) {
    let num = 7
     return `${name} yene strddas ${num} ${age + 7}`
}


const umytGoshulan = atbilenyasygosyan("umyt", true)
console.log(umytGoshulan)

// 
