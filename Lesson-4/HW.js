// nested object düşindirmandirn
const nestedObj = {
  at: "Umyt",
  caga: {
    at: "Meret",
    clothes: ["jorap", "koynek"],
    numbers: [1, 2, 4, 5],
  },
};
console.log(nestedObj["caga"]["at"]); // returns Meret

// at we age value-lary uytgetmeli for ulanyp
// at-a berdi, age-a 23 goymaly

// const person = {
//   at: "Umyt",
//   age: 24,
//   student: true,
//   job: " frontend developer",
// };

// for (x in person) {
//   if (x === "at") {
//     person.at = "Berdi";
//   } else if (x === "age") {
//     person.age = 23;
//   }
// }
// console.log(person);
// HW Her bankyn oz bahasyny ay boyuncha goshmaly
// in sonunda: Halkbank account: ... man
//             Merkezi Bank: ... man
//             Dayhan Bank: ... man

let HalkBank = 0;
let MerkeziBank = 0;
let DayhanBank = 0;

const bankAccounts = {
  january: {
    HalkBank: 232,
    MerkeziBank: 133,
    DayhanBank: 252,
  },
  february: {
    HalkBank: 563,
    MerkeziBank: 333,
    DayhanBank: 222,
  },
  march: {
    HalkBank: 323,
    MerkeziBank: 373,
    DayhanBank: 226,
  },
  april: {
    HalkBank: 263,
    MerkeziBank: 33,
    DayhanBank: 22,
  },
  may: {
    HalkBank: 213,
    MerkeziBank: 303,
    DayhanBank: 272,
  },
  june: {
    HalkBank: 223,
    MerkeziBank: 343,
    DayhanBank: 202,
  },
  july: {
    HalkBank: 223,
    MerkeziBank: 333,
    DayhanBank: 272,
  },
  august: {
    HalkBank: 223,
    MerkeziBank: 323,
    DayhanBank: 232,
  },
  september: {
    HalkBank: 213,
    MerkeziBank: 323,
    DayhanBank: 212,
  },
  june: {
    HalkBank: 273,
    MerkeziBank: 303,
    DayhanBank: 282,
  },
};

for (x in bankAccounts) {
  HalkBank = HalkBank + bankAccounts[x].HalkBank;
  MerkeziBank = MerkeziBank + bankAccounts[x].MerkeziBank;
  DayhanBank = DayhanBank + bankAccounts[x].DayhanBank;
}
console.log(HalkBank);
