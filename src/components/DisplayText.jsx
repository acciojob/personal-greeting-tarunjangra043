import React, { useState } from "react";

const DisplayText = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text ? "Hello " + text + "!" : ""}</p>
    </div>
  );
};

export default DisplayText;
