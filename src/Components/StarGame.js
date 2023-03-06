// STAR MATCH - Starting Template
import React, { useState } from "react";
import NumbersButton from "./NumbersButton";
import StarsDisplay from "./StarsDisplay";
import * as logic from "../utils/logicJS";
import PlayAgain from "./startGame";
const StarMatch = () => {
  const [stars, setStars] = useState(logic.utils.random(1, 9));
  //from begining all numbers from 1 to 9 is avalible
  const [availableNums, setAvailableNums] = useState(logic.utils.range(1, 9));
  //candiate is 0 in beginning
  const [candidateNums, setCandidateNums] = useState([]);
  const wrongCandidate = logic.utils.sum(candidateNums) > stars;

  const btnStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    // candidate to be right or not
    if (candidateNums.includes(number)) {
      return wrongCandidate ? "wrong" : "candidate";
    }

    return "available";
  };

  const onNumBtnClicked = (numberClicked, currentStatus) => {
    //update btn state
    if (currentStatus == "used") return;

    //  const newCandidat =candidateNums.concat(numberClicked);
    const newCandidat =
      currentStatus === "available"
        ? candidateNums.concat(numberClicked)
        : candidateNums.filter((cn) => cn !== numberClicked);

    if (logic.utils.sum(newCandidat) !== stars) {
      setCandidateNums(newCandidat);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidat.includes(n)
      );
      setStars(logic.utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };
  const resetGame=()=>{
   setStars(logic.utils.random(1, 9));
   setAvailableNums(logic.utils.range(1, 9));
   setCandidateNums([]);
  }
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {availableNums.length == 0 ? (
            <PlayAgain onClick={resetGame}/>
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        {/* ==================================== */}
        <div className="right">
          {logic.utils.range(1, 9).map((number) => (
            <NumbersButton
              key={number}
              status={btnStatus(number)}
              number={number}
              onClick={onNumBtnClicked}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
