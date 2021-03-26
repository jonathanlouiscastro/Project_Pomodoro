import React, { useState } from "react";
import Display from "../Display";
import TimerDurations from "../TimerDurations";
import Buttons from "../Buttons";

function Pomodoro() {
  const initialState = {
    focusTime: 25,
    breakTime: 5,
    display: `none`,
    focusSecs: 1500,
    breakSecs: 300,
    counter: 0,
    displayName: "Focusing",
    onFocus: true,
  };

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [TimerData, setTimerData] = useState({ ...initialState });

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setTimerData({ ...TimerData, display: "block" });
  }
  function stop() {
    setTimerData({ ...initialState });
    setIsTimerRunning(false);
  }

  return (
    <div className="pomodoro">
      <TimerDurations
        TimerData={TimerData}
        isTimerRunning={isTimerRunning}
        setTimerData={setTimerData}
      />
      <Buttons
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        stop={stop}
      />
      <Display
        TimerData={TimerData}
        isTimerRunning={isTimerRunning}
        setTimerData={setTimerData}
      />
    </div>
  );
}

export default Pomodoro;