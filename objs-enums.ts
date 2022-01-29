// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ismail",
//   age: 38,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Ismail",
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// let fav: string[];
// fav = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
