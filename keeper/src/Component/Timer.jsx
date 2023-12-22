import { useState } from "react";
import { cars } from "../notes";

const Timer = () => {
  const time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(time);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [heading, setHeading] = useState("TIME");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const handleClick = () => {
    const newTime = new Date().toLocaleTimeString();
    setCount(newTime);
    setHeading("CHANGED");
  };
  // setInterval(handleClick, 1000);
  // console.log(cars);
  // const [tesla, honda] = cars;
  // console.log(honda);

  // const {
  //   speedStats: { topSpeed: teslaTopSpeed },
  // } = tesla;
  // const {
  //   coloursByPopularity: [teslaTopColour],
  // } = tesla;
  // const {
  //   speedStats: { topSpeed: hondaTopSpeed },
  // } = honda;
  // const {
  //   coloursByPopularity: [hondaTopColour],
  // } = honda;
  const mouseOver = () => {
    setIsMouseOver(true);
  };
  const mouseOut = () => {
    setIsMouseOver(false);
  };

  const changeName = (event) => {
    const { name, value } = event.target;
    setFullName((prev) => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prev.lName,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prev.fName,
      //     lName: value,
      //   };
      // }
      return{
        ...prev,
        [name]:value
      }
    });
  };
  const clickSubmit = () => {};

  return (
    <div>
      <h1>{heading}</h1>
      <h1>{count}</h1>
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "green" }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Get Time
      </button>
      <div>
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <form>
          <input
            type="text"
            name="fName"
            placeholder="first name"
            onChange={changeName}
            value={fullName.fName}
          />
          <input
            type="text"
            name="lName"
            placeholder="last name"
            onChange={changeName}
            value={fullName.lName}
          />
          <button onClick={clickSubmit}> submit</button>
        </form>
      </div>

      {/* <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table> */}
    </div>
  );
};

export default Timer;
