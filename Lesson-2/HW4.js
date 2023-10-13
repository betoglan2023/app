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

myfunc = (name) => {
    console.log("Salam" +" "+ name)
}

myfunc ("Umyt")