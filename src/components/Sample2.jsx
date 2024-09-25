import { useState } from "react";

export function Sample2() {
  const [text, setText] = useState("");
  const [names, setNames] = useState(["Otto", "Max"]);

  function handleButtonClick() {
    console.debug("handleButtonClick");
    // console.debug(text);
    // console.debug([...names]);
    // console.debug([...names, text]);
    setNames([...names, text]);
  }

  function handleInputOnChange(event) {
    console.debug(event.target.value);
    setText(event.target.value);
  }

  const displayNames = names.map((name, index) => (
    <li key={index}>{name}</li>
  ));

  return (
    <div>
      <p>Hallo</p>
      <input
        type="text"
        value={text}
        onChange={handleInputOnChange}
      />
      <p>Text: {text}</p>
      <button onClick={handleButtonClick}>Add Name</button>
      <ul>{displayNames}</ul>
    </div>
  );
}
