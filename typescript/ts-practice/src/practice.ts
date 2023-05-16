interface Person {
  name: string;
  age?: number;
}
interface Developer extends Person {
  skills: string[];
}
const person: Person = {
  name: "김사람",
  age: 20,
};
const expert: Developer = {
  name: "갬개발",
  skills: ["typescript", "nextjs"],
};
const people: Person[] = [person, expert];
