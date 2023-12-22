import { useState } from "react";
import { TextArea, TodoButton, TodoInput } from "../notes";

const Note = (props) => {
  const [text, setText] = useState({
    input_title: "",
    input_content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setText((prevItem) => {
      if (name === "title") {
        return {
          input_title: value,
          input_content: prevItem.input_content,
        };
      } else if (name === "content") {
        return {
          input_title: prevItem.input_title,
          input_content: value,
        };
      }
    });
  }
  function handleClick(event) {
    props.onAdd(text);
    setText({ input_title: "", input_content: "" });
    event.preventDefault();
  }
  return (
    <div className="note">
      <form>
        <h1>
          <TodoInput
            name={`title`}
            placeholder={`title...`}
            change={handleChange}
            value={text.input_title}
          />
        </h1>
        <p>
          <TextArea
            name={`content`}
            placeholder={`this is your content...`}
            change={handleChange}
            value={text.input_content}
          />
        </p>
        <TodoButton text={`add`} onClick={handleClick} />
      </form>
    </div>
  );
};

// export { text };
export default Note;
