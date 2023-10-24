// Objects
// key and value
const person = {
  Name: "Umyt",
  age: 24,
  isMarried: true,
};
let text = "";
for (x in person) {
  text += person[x] + " ";
}
const keys = Object.keys(person); // returns an array
for (let i = 0; i < keys.length; i++) {
  console.log(person[keys[i]]);
}

keys.forEach((val) => console.log(val));

// creating or changing key value pair
person.Name = "Berdi";
person["Job"] = "Dj";

// get keys of object

Object.keys(person); // returns array [Name, age, isMarried]

// get entries of an object

Object.entries(person); // returns an array [['Name', "Umyt"], [...], [...]]

// Primitive and Non Primitive type
let name1 = "berdi";

let name2 = name1; // arassa copy
name2 = "Maral";

console.log(name1, name2);

let arr1 = ["berdi", "umyt"];
let arr2 = arr1; // doesnt copy
arr2.push("ahmet");
console.log(arr1, arr2);
