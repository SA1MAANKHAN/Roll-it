import React, { createRef, useState } from "react";
import SubPlayArea from "../subPlayArea/subPlayArea.component";

import "./playArea.styles.scss";

import Dice1 from "../../assets/images/Die/dice-1.png";
import Dice2 from "../../assets/images/Die/dice-2.png";
import Dice3 from "../../assets/images/Die/dice-3.png";
import Dice4 from "../../assets/images/Die/dice-4.png";
import Dice5 from "../../assets/images/Die/dice-5.png";
import Dice6 from "../../assets/images/Die/dice-6.png";
import { PLAYER_TURNS } from "../../utils/contants";

function PlayArea({winningPoints}) {
  const [diceImgs] = useState([Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]);

  const [currentDiceNumber, setcurrentDiceNumber] = useState(null);

  const [currentTurn, setcurrentTurn] = useState(PLAYER_TURNS.PLAYER_1);

  const [totalScorePlayer1, settotalScorePlayer1] = useState(0);
  const [currentScorePlayer1, setcurrentScorePlayer1] = useState(0);

  const [totalScorePlayer2, settotalScorePlayer2] = useState(0);
  const [currentScorePlayer2, setcurrentScorePlayer2] = useState(0);

  function rollTheDice() {
    const num = Math.ceil(Math.random() * 6);
    // show correct Dice
    setcurrentDiceNumber(num);

    // get a random number
    const luckFactor = Math.floor(Math.random() * 100);
    if (luckFactor % 5 === 0) {
      console.log("turn changes");
      // player losses current score
      if (currentTurn === PLAYER_TURNS.PLAYER_1) {
        setcurrentScorePlayer1(0);
      } else {
        setcurrentScorePlayer2(0);
      }
      changeTurns();
      return;
    }

    if (currentTurn === PLAYER_TURNS.PLAYER_1) {
      // increase current score for player 1
      setcurrentScorePlayer1(currentScorePlayer1 + num);
    } else {
      // increase current score for player 2
      setcurrentScorePlayer2(currentScorePlayer2 + num);
    }
  }

  function saveToTotal() {
    if (currentTurn === PLAYER_TURNS.PLAYER_1) {
      settotalScorePlayer1(totalScorePlayer1 + currentScorePlayer1);
      setcurrentScorePlayer1(0);
    } else {
      settotalScorePlayer2(totalScorePlayer2 + currentScorePlayer2);
      setcurrentScorePlayer2(0);
    }

    changeTurns();
  }

  function changeTurns() {
    if (currentTurn == PLAYER_TURNS.PLAYER_1)
      setcurrentTurn(PLAYER_TURNS.PLAYER_2);
    if (currentTurn == PLAYER_TURNS.PLAYER_2)
      setcurrentTurn(PLAYER_TURNS.PLAYER_1);
  }

  function resetGame() {
    setcurrentDiceNumber(null);
    setcurrentTurn(PLAYER_TURNS.PLAYER_1);
    settotalScorePlayer1(0);
    setcurrentScorePlayer1(0);
    settotalScorePlayer2(0);
    setcurrentScorePlayer2(0);
  }

  return (
    <div className="playArea">
      {currentDiceNumber ? (
        <img src={diceImgs[currentDiceNumber - 1]} alt="" className="dice" />
      ) : (
        ""
      )}
      <button onClick={resetGame} className="newGame">
        🔄 &nbsp;&nbsp; New game
      </button>
      <button onClick={rollTheDice} className="rollDice">
        🎲 &nbsp;&nbsp; Roll dice
      </button>
      <button onClick={saveToTotal} className="hold">
        📥 &nbsp;&nbsp; Take
      </button>
      <SubPlayArea
        name={"Player One"}
        totalScore={totalScorePlayer1}
        currentScore={currentScorePlayer1}
        active={currentTurn == PLAYER_TURNS.PLAYER_1}
      />
      <SubPlayArea
        name={"Player Two"}
        totalScore={totalScorePlayer2}
        currentScore={currentScorePlayer2}
        active={currentTurn == PLAYER_TURNS.PLAYER_2}
      />
    </div>
  );
}

export default PlayArea;
