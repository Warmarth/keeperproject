// import { Card } from "./Component/Card";
import { useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Note from "./Component/Note";
import { NoteItem, TodoItem } from "./notes";
// import { text } from "./Component/Note";
// import { TodoItem } from "./notes";
// import Timer from "./Component/Timer";
// import Form from "./Component/Form";
// import notes from "./notes";
// import Todo from "./Component/todo";

function App() {
  const [taskContainer, setContainTask] = useState([]);

  function addNotes(text) {
    console.log(text);
    setContainTask((previtem) => {
      return [...previtem, text];
    });
  }

  function handleDelete(id) {
    setContainTask((previtem) => {
      return previtem.filter((item, idx) => {
        return id !== idx;
      });
    });
  }

  return (
    <div>
      <Header />
      <div>
        {/* <Timer /> */}
        <Note onAdd={addNotes} />
      </div>
      {/* <Form /> */}
      <section>
        {taskContainer.map((item, idx) => {
          return (
            <NoteItem
              styles={`note`}
              title={item.input_title}
              content={item.input_content}
              key={idx}
              id={idx}
              Delete="delete"
              ondelete={handleDelete}
            />
          );
        })}
      </section>
      {/* <Todo /> */}

      <Footer />
    </div>
  );
}

export default App;
