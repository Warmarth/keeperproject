import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setFullName((prevData) => {
      if (name === "fname") {
        return {
          fName: value,
          lName: prevData.lName,
          email: prevData.email,
        };
      } else if (name === "lname") {
        return {
          fName: prevData.fName,
          lName: value,
          email: prevData.email,
        };
      } else if (name === "email") {
        return {
          fName: prevData.fName,
          lName: prevData.lName,
          email: value,
        };
      }
      // return {
      //   ...prevData,
      //   [name]: value,
      // };
    });
  };
  // const handleClick = (event) => {
  //   console.log("clicked");

  //   event.preventDefault();
  // };

  return (
    <div>
      <h1>
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <small>{fullName.email}</small>
      <form>
        <input
          name="fname"
          placeholder="enter to start"
          onChange={onChangeForm}
          value={fullName.fName}
        />
        <input
          name="lname"
          placeholder="enter to start"
          onChange={onChangeForm}
          value={fullName.lName}
        />
        <input
          name="email"
          placeholder="enter to start"
          onChange={onChangeForm}
          value={fullName.email}
        />
      </form>
      <button>click handler</button>
    </div>
  );
};

export default Form;
