import React from 'react';
import { atom, useRecoilState, useSetRecoilState} from 'recoil';

export const textState = atom({
    key: 'text', 
    default: '', 
});
export const todoListState = atom({
    key: 'todoListState', 
    default: [], 
});

function AddTodo() {
  const [text, setText] = useRecoilState(textState);
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (!text.length) return;
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          text,
          isComplete: false,
        },
      ];
      return newTodoList;
    });
  };

  return (
    <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddTodo;
