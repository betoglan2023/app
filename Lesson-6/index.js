// object method
const person = {
  firstName: "Umyt",
  lastName: "Gurbanov",
  //   fullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  func() {
    console.log("hey");
  },
};

const person1 = {
  firstName: "Berdi",
  lastName: "Nazarov",
};

// this keyword in function which returns window

function showThis() {
  return this;
}

const fullname = person.fullName.bind(person1);
console.log(fullname());

const fullname1 = person.fullName.call(person1);
console.log(fullname1);

const arr = [];
// preventing this from being undefined in callBack, bind usage

let full = person.fullName.bind(person);

setTimeout(full, 3000);

console.log(person.fullName());
// console.log(obj.func());
console.log(showThis());
document.querySelector(".name").innerHTML = person.fullName();

document
  .getElementById("inputBox")
  .addEventListener("submit", () => console.log("submited"));
document
  .getElementById("btn")
  .addEventListener("click", () => console.log("submited"));
