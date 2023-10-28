import { useState, useEffect } from "react";
import "./App.css";
// import arrayListCard from "./utils/CardArrayImgList";
import CardList from "./components/CardList/CardList";
import CongratulationMessage from "./components/CongratulationMessage/CongratulationMessage";
import FirstView from "./components/FirstView/FirstView";
function App() {
  const [playGame, setPlayGame] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    // console.log(arrayListCard);
  }, []);
  return (
    <>
      {playGame ? (
        <>
          <h1>Find card</h1>
          <CardList
            endGame={() => {
              setIsFinish(true);
            }}
          />
        </>
      ) : (
        <FirstView
          changeStatusGame={() => {
            setPlayGame(true);
          }}
        />
      )}

      {isFinish ? <CongratulationMessage /> : ""}
    </>
  );
}

export default App;
