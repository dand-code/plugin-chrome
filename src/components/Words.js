import React from 'react';
import { useRecoilState} from 'recoil';
import { wordListState} from '../hooks/atom';

function Words() {
    
  const todoList = useRecoilState(wordListState);
  console.log(wordListState);
  console.log(todoList);
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index + 100}>
            {todo}
        </li>
      ))}
    </ul>
  );
}

export default Words;
