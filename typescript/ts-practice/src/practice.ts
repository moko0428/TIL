type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  //&는 인터섹션으로 두 개 이상의 타입들을 합쳐준다.
  skills: string[];
};

const person: Person = {
  name: "김사람",
};

const expert: Developer = {
  name: "김개발",
  skills: ["typescript", "nextjs"],
};

type People = Person[]; //Person[]을 People 이라는 타입으로 사용할 수 있다.
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];
