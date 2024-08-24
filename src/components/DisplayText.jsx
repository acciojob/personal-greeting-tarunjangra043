import React, { useState } from "react";

const DisplayText = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text ? "Hello " + text + "!" : ""}</h1>
    </div>
  );
};

export default DisplayText;
