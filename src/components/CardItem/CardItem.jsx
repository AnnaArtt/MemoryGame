import React, { useEffect, useMemo, useState } from "react";
import "./CardItem.css";
import classNames from "classnames";

const CardItem = ({
  name,
  img,
  openingPermission,
  selectCard,
  isCurrentCardTheSame,
  findPairCardsArray,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const visibilityCard = useMemo(() => {
    return findPairCardsArray.includes(name);
  }, [findPairCardsArray]);

  useEffect(() => {
    if (isCurrentCardTheSame === true) {
      console.log("congr");
    } else if (isCurrentCardTheSame === false) {
      setIsHidden(false);
    }
  }, [isCurrentCardTheSame]);

  function openCard() {
    if (openingPermission && !isHidden) {
      setIsHidden(!isHidden);
      selectCard(name);
    }
  }

  return (
    <div className={classNames("wrapperCard", { wrapperCardActive: isHidden })}>
      <div
        className={classNames("card", { notVisible: visibilityCard })}
        onClick={openCard}
      >
        <div className="front"></div>
        <div className="back">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
