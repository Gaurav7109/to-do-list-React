import React from "react";

function handleClick(event) {
  if (event.target.style.textDecoration === "none") {
    return (event.target.style.textDecoration = "line-through");
  } else {
    return (event.target.style.textDecoration = "none");
  }
}
function ToDoItem(input) {
  return (
    <li
      onClick={() => {
        input.onChecked(input.id);
      }}
      style={{ textDecoration: "none" }}
    >
      {input.item}
    </li>
  );
}
export default ToDoItem;
