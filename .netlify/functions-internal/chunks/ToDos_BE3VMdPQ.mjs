import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import Clerk from '@clerk/clerk-js';
import { S as Styles, a as Styles$1 } from './browse.98a8fd59_g7x9JTtA.mjs';
import { getRandomEntry } from '@whitep4nth3r/get-random-entry';
import axios from 'axios';

const CLERK_FRONTEND_API = "pk_test_Z3JhbmQtZXNjYXJnb3QtNS5jbGVyay5hY2NvdW50cy5kZXYk";

async function getSession() {
  const clerk = new Clerk(CLERK_FRONTEND_API);
  await clerk.load({});

  return clerk.session;
}

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
  "Great!"
];
const ToDo = ({ todo, showActions }) => {
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: _id })
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
  return !isFlagged && /* @__PURE__ */ jsxs("div", { className: `${Styles.todo} ${isFlagging ? Styles.isFlagging : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: Styles.topRow, children: [
      /* @__PURE__ */ jsx("p", { className: Styles.description, children: description }),
      /* @__PURE__ */ jsxs("p", { className: Styles.completed, children: [
        "Completed ",
        timesDoneNo,
        " ",
        timesDoneNo === 1 ? "time" : "times"
      ] }),
      showActions && /* @__PURE__ */ jsx(
        "button",
        {
          disabled: buttonDisabled || isLoading,
          className: Styles.done,
          onClick: increment,
          children: isLoading ? "Doing..." : buttonText
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: report,
        className: Styles.report,
        disabled: isFlagging,
        children: isFlagging ? "Reporting..." : "Report"
      }
    )
  ] });
};

function ToDos({ todos, limit }) {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showActions, setShowActions] = useState(false);
  useEffect(() => {
    const filterTodos = async () => {
      try {
        const session = await getSession();
        const userId2 = session !== null ? session.user.id : "12345";
        setUserId(userId2);
        if (session !== null) {
          setShowActions(true);
        }
        let filtered = todos.filter((todo) => todo.user_id !== userId2);
        if (limit !== null) {
          filtered = filtered.slice(0, limit);
        }
        setFilteredTodos(filtered);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    filterTodos();
  }, [todos, limit]);
  return /* @__PURE__ */ jsx("ul", { className: Styles$1.ul, children: filteredTodos.map((item) => /* @__PURE__ */ jsx("li", { className: Styles$1.li, children: /* @__PURE__ */ jsx(ToDo, { todo: item, showActions }) }, item._id)) });
}

export { ToDos as T };
