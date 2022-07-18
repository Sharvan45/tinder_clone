import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const swiped = (direction, name) => {
  console.log("swiped " + name);
};

const outOfFrame = (name) => {
  console.log("swiped  out of frame" + name);
};

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "",
    },
    {
      name: "Jeff Bezos",
      url: "",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardsContainers"></div>
      {people.map((x) => (
        <TinderCard
          className="swipe"
          key={x.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, x.name)}
          onCardLeftScreen={() => outOfFrame(x.name)}
        ></TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
