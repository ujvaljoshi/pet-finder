import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pet Finder"),
    React.createElement(Pet, {
      name: "Tuffy",
      animal: "Dog",
      breed: "Pomerian"
    }),
    React.createElement(Pet, {
      name: "Iffy",
      animal: "Dog",
      breed: "German Shepherd"
    }),
    React.createElement(Pet, {
      name: "Toby",
      animal: "Cat",
      breed: "Stray"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
