import { useState } from "react";

export function Sample1() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("TODO");

  return (
    <div>
      <p>Hallo</p>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          console.debug(event.target.value);
          setText(event.target.value);
        }}
      />
      <p>Du hast folgenden Text eingegeben: {text}</p>
      <button onClick={() => setText2(text)}>
        Gibt den Text noch mal aus:
      </button>
      <p>{text2}</p>
    </div>
  );
}
