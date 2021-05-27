import React from 'react';
import { useRecoilValue} from 'recoil';
import { updateWordList} from '../hooks/selector';

function Words() {  
  const todoList = useRecoilValue(updateWordList);
  
  return (
    <ul>
      {todoList}
    </ul>
  );
}

export default Words;
