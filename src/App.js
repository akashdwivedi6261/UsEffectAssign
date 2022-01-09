import React, { useState, useEffect } from "react";
import { Button } from "./Components/Button";

export default function App() {
  const [state, setState] = useState(0);
  const [hideState, setHideState] = useState("Hide");

  const [startState, setStartState] = useState({
    title: "Pause",
    color: "red"
  });

  function handleHide() {
    if (hideState === "Hide") {
      setHideState("Show");
    } else {
      setHideState("Hide");
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      setState((prevState) => prevState + 1);

      console.log("interval id", id);
    }, 1000);

    if (startState.title === "Start") {
      clearId(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [startState, hideState]);

  function handleStartChange() {
    if (startState.title === "Pause") {
      const payload = {
        title: "Start",
        color: "green"
      };
      setStartState(payload);
    } else {
      const payload = {
        title: "Pause",
        color: "orange"
      };
      setStartState(payload);
    }
  }

  function handleReset() {
    const payload = {
      title: "Start",
      color: "green"
    };
    setStartState(payload);
    setState(0);
  }

  function clearId(id) {
    clearInterval(id);
  }

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      {hideState === "Hide" ? (
        <h1 style={{ color: "navyblue", fontSize: "42px" }}>Count : {state}</h1>
      ) : (
        <></>
      )}
      <Button
        title={startState.title}
        color={startState.color}
        handleClick={handleStartChange}
        margin="30px"
      />
      <Button
        title="Reset"
        color="red"
        handleClick={handleReset}
        margin="30px"
      />
      <Button
        title={hideState}
        color="pink"
        handleClick={handleHide}
        margin="30px"
      />
    </div>
  );
}
