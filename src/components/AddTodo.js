import React, { useState } from 'react';

function AddTodo() {
    const [text, setText] = useState("");

    const onChange = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    };
    const onClick = (event) => {
       event.preventDefault();
    };

  return (
    <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
    </form>
  );
}

export default AddTodo;
