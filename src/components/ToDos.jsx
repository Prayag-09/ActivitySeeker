import { useState, useEffect } from "react";
import { getSession } from "../utils/session.js";
import { ToDo } from "./ToDo.jsx";
import Styles from "./ToDos.module.css";

export function ToDos({ todos, limit }) {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const filterTodos = async () => {
      try {
        const session = await getSession();
        const userId = session !== null ? session.user.id : "12345";
        setUserId(userId);

        if (session !== null) {
          setShowActions(true);
        }

        let filtered = todos.filter((todo) => todo.user_id !== userId);

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

  return (
    <ul className={Styles.ul}>
      {filteredTodos.map((item) => (
        <li className={Styles.li} key={item._id}>
          <ToDo todo={item} showActions={showActions} />
        </li>
      ))}
    </ul>
  );
}
