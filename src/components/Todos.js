import React from 'react';
import { atom, useRecoilValue } from 'recoil';
import { textState } from './AddTodo';

export const todoListState = atom({
    key: "myList",
    default: textState
});

function Todos() {
    
  const todoList = useRecoilValue(todoListState);
  return (
    <ul>
      <li>
        <label>
          {todoList}
        </label>
      </li>

  </ul>
  );
}

export default Todos;
