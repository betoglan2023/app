// Hw -> stuff arrayyn sanlaryny alyan yokarda stuff dp variable doretmeli we goshmaly FOR ulanmaly
// nache film bar aytmaly

const obj = {
  company: "Belet",
  films: ["Inception", "Seven", "Star wars", "Oppenheimer"],
  divisions: {
    vidChek: {
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

let jem = 0;
for (let i = 0; i < obj.divisions.videoChecker.stuff.length; i++) {
  console.log(obj.divisions.videoChecker.stuff[i]);
  jem += parseInt(obj.divisions.videoChecker.stuff[i].slice(1), 10);
}
console.log(jem);
