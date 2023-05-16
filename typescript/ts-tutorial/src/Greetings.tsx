import React from "react";

interface GreetingsProps {
  name: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div>Hello, {name}</div>
);

export default Greetings;
