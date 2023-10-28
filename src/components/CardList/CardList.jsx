import React, { useEffect, useMemo, useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./CardList.css";
import getRandomInt from "../../helpers/MathRandom";
import list from "../../utils/CardArrayImgList";

const CardList = ({ endGame }) => {
  const [randomArrayCard, setRandomArrayCard] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [findPairCardsArray, setFindPairCardsArray] = useState([]);
  const [openingPermission, setOpeningPermission] = useState(true);
  const [sameCardsName, setSameCardsName] = useState(null);

  useEffect(() => {
    if (findPairCardsArray.length === list.length) {
      endGame();
    }
  }, [findPairCardsArray]);

  useEffect(() => {
    if (selectedCards.length == 2) {
      setOpeningPermission(false);
      setTimeout(() => {
        checkSelectedCards();
        setSelectedCards([]);
      }, 500);
    } else if (selectedCards.length == 0) {
      setOpeningPermission(true);
      setSameCardsName(null);
    }
  }, [selectedCards]);

  function addCardToSelectedCards(name) {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, name]);
    }
  }

  function checkSelectedCards() {
    if (selectedCards[0] == selectedCards[1])
      setFindPairCardsArray([...findPairCardsArray, selectedCards[0]]);

    setSameCardsName(selectedCards[0] == selectedCards[1]);
  }

  useEffect(() => {
    let randomArrayPreparation = [];
    let allCardArray = [...list, ...list];
    let allCardArrayLength = allCardArray.length;

    for (let index = 0; index < allCardArrayLength; index++) {
      const elementIndex = getRandomInt(0, allCardArray.length - 1);
      randomArrayPreparation.push(allCardArray[elementIndex]);
      allCardArray = allCardArray.filter((_, index) => index !== elementIndex);
    }
    setRandomArrayCard(randomArrayPreparation);
  }, []);

  return (
    <div className="wrapperList">
      {randomArrayCard.map(({ name, img }, index) => (
        <CardItem
          key={index}
          img={img}
          name={name}
          openingPermission={openingPermission}
          selectCard={addCardToSelectedCards}
          isCurrentCardTheSame={sameCardsName}
          findPairCardsArray={findPairCardsArray}
        />
      ))}
    </div>
  );
};

export default CardList;
