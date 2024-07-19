import { useState } from "react";
import Styles from "./ToDo.module.css";
import { getRandomEntry } from "@whitep4nth3r/get-random-entry";
import axios from 'axios';

const randomYays = [
  "Great job!",
  "Yes!",
  "Amazing!",
  "Well done!",
  "Awesome!",
  "Nice!",
  "Keep it up!",
  "Fantastic!",
  "Good job!",
  "You did it!",
  "You rock!",
  "Great!",
];

export const ToDo = ({ todo, showActions }) => {
  const { _id, description, times_done } = todo;

  const [timesDoneNo, setTimesDoneNo] = useState(times_done);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("I did this");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isFlagging, setIsFlagging] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);

  const increment = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/increment-todo", { id: _id });
      setTimesDoneNo(response.data.times_done);
      setButtonText(getRandomEntry(randomYays));
      setButtonDisabled(true);
    } catch (error) {
      console.error("Error incrementing todo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const report = async () => {
    setIsFlagging(true);
    try {
      const response = await fetch("/api/flag-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id }),
      });

      const data = await response.json();
      if (data.success === true) {
        setIsFlagged(true);
      }
    } catch (error) {
      console.error("Error flagging todo:", error);
    } finally {
      setIsFlagging(false);
    }
  };

  return (
    !isFlagged && (
      <div className={`${Styles.todo} ${isFlagging ? Styles.isFlagging : ""}`}>
        <div className={Styles.topRow}>
          <p className={Styles.description}>{description}</p>
          <p className={Styles.completed}>
            Completed {timesDoneNo} {timesDoneNo === 1 ? "time" : "times"}
          </p>
          {showActions && (
            <button
              disabled={buttonDisabled || isLoading}
              className={Styles.done}
              onClick={increment}
            >
              {isLoading ? "Doing..." : buttonText}
            </button>
          )}
        </div>
        <button
          onClick={report}
          className={Styles.report}
          disabled={isFlagging}
        >
          {isFlagging ? "Reporting..." : "Report"}
        </button>
      </div>
    )
  );
};
