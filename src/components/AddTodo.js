import React from 'react';
import { atom, useRecoilState} from 'recoil';

export const textState = atom({
    key: 'text', 
    default: '', 
});

function AddTodo() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
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
