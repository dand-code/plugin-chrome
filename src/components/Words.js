import React from 'react';
import Button from './Button';
import { useRecoilValue} from 'recoil';
import { updateWordList } from '../hooks/selector';

import { fetch } from '../services/localStorage';
import { listTableDB } from '../hooks/variables';

function Words() {  
  const todoList = useRecoilValue(updateWordList);
  
  return (
    <div>
      <ul>
       {todoList}
      </ul>
      {!fetch(listTableDB) ? '' :  <Button />}
     
    </div>
  )
}

export default Words;
