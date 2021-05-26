import React from 'react';
import { atom, useRecoilValue } from 'recoil';
import { textState } from './AddWord';

export const wordListState = atom({
    key: "myList",
    default: textState
});

function Words() {
    
  const todoList = useRecoilValue(wordListState);
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

export default Words;
