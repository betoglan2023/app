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
// Hw -> stuff arrayyn sanlaryny alyan yokarda stuff dp variable doretmeli we goshmaly FOR ulanmaly
// nache film bar aytmaly
delete obj.company;
console.log(obj);
