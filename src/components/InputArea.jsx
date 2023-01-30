import React from "react";

function InputArea(input) {
  return (
    <div>
      <div className="form">
        <input onChange={input.onChange} type="text" value={input.value} />
        <button onClick={input.onClick}>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
export default InputArea;
