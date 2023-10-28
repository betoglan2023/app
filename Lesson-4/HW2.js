// Hw -> stuff arrayyn sanlaryny alyan yokarda stuff dp variable doretmeli we goshmaly FOR ulanmaly
// nache film bar aytmaly

const obj = {
  company: "Belet",
  films: ["Inception", "Seven", "Star wars", "Oppenheimer"],
  divisions: {
    videoChecker: {
      at: "Belet division",
      stuff: ["A1", "B5", "C6", "D8", "E12"],
    },
    softwareEngineer: {
      at: "Belet fuckers",
    },
  },
};
let uzz = obj.films;
uzz = obj.films.length;
console.log(uzz + " " + "sany film bar");

let arrSanlar = [];
let tex = "";
let tex3 = 0;
let tex4 = 0;
let tex5 = [];
let jemi = 0;
console.log(obj.divisions.videoChecker.stuff);
console.log((tex = obj.divisions.videoChecker.stuff.join("").split("")));

for (i = 1; i < tex.length; i++) {
  tex3 = parseInt(tex[i], 10);
  arrSanlar += tex3;
  tex4 = arrSanlar.split("NaN");
}
console.log(tex4);
for (i = 0; i < tex4.length; i++) {
  tex5.push(parseInt(tex4[i], 10));
  jemi += tex5[i];
}
console.log(jemi);
