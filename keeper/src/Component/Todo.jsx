import { useState } from "react";
import { TodoItem, TodoInput, TodoButton } from "../notes";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [containTask, setContainTask] = useState([]);

  function todoHandler(event) {
    const task = event.target.value;
    setInputText(task);
  }
  function handleClick() {
    setContainTask((prevTaskItem) => {
      return [...prevTaskItem, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setContainTask((prevItem) => {
      return prevItem.filter((item, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <section>
      <h1>todo</h1>
      <div>
        <TodoInput change={todoHandler} value={inputText} />
        <TodoButton text={`add`} onClick={handleClick} />
      </div>
      <div>
        <ul>
          {containTask.map((taskItem, idx) => (
            <TodoItem item={taskItem} key={idx} id={idx} checked={deleteItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Todo;
