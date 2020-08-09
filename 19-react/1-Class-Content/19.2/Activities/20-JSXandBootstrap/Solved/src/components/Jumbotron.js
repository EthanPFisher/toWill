import React from "react";

const name = "Arron";
const num1 = 1;
const num2 = 2;

function Jumbotron() {
  return (
    // Why do we use "className" instead of "class"?
    // "class" is a reservered JavaScript keyword used to create class components in react
    <div className="jumbotron">

    {/* What is the signifance of the curly braces utlized below? */}
    {/* With JSX curly braces, we can inject javascript expressions such as variables and methods */}
      <h2>My name is {name}. But you can call me...</h2>
      <h1>The JSX Boss!</h1>
      <hr />
      <h2>I can do math: {num1 + num2}.</h2>
      <h2>
        I can generate random numbers:
        {Math.floor(Math.random() * 10) + 1},{Math.floor(Math.random() * 10) + 1},
        {Math.floor(Math.random() * 10) + 1}.
      </h2>
      <h2>I can even reverse my name: {name.split("").reverse()}</h2>
    </div>
  );
}

export default Jumbotron;
