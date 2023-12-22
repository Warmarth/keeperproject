import { useState } from "react";

const notes = [
  {
    key: 1,
    title: "Delegation",
    content:
      "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
  },
  {
    key: 2,
    title: "Loops",
    content:
      "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
  },
  {
    key: 3,
    title: "Arrays",
    content:
      "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
  },
  {
    key: 4,
    title: "Hardware vs. Software",
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
  },
];
const cars = [
  {
    model: "Honda Civic",
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5,
    },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2,
    },
  },
];

const TodoItem = (prop) => {
  const [dashTask, setDashTask] = useState(false);

  function handleLine() {
    setDashTask((prevItem) => {
      return !prevItem;
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        id={prop.id}
        style={{ textDecoration: dashTask ? "line-through" : "" }}
        onClick={handleLine}
      >
        {prop.item}
      </div>
      <span
        onClick={() => {
          prop.checked(prop.id);
        }}
      >
        Delete
      </span>
    </div>
  );
};

const NoteItem = (props) => {
  function HandleDelete(){
    props.ondelete(props.id)
  }
  return (
    <div className={props.styles} id={props.id}>
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <span
        onClick={HandleDelete}
      >
        {props.Delete}
      </span>
    </div>
  );
};

const TodoInput = (prop) => {
  return (
    <input
      style={prop.style}
      onChange={prop.change}
      value={prop.value}
      placeholder={prop.placeholder}
      name={prop.name}
    />
  );
};
const TodoButton = (prop) => {
  return (
    <button style={prop.style} onClick={prop.onClick}>
      {prop.text}
    </button>
  );
};

const TextArea = (props) => {
  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.change}
      value={props.value}
      rows='5' cols={`25`}
    ></textarea>
  );
};

export default notes;
export { cars, TextArea, TodoItem, TodoInput, TodoButton, NoteItem };
