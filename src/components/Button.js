import React from 'react';
import { useSetRecoilState } from 'recoil';
import { wordListState } from '../hooks/atom';
import { save } from '../services/localStorage';
import { listTableDB } from '../hooks/variables';

function Button() {  
    const setWordList = useSetRecoilState(wordListState);
    const deleteList = () => {
      setWordList(() => {            
        save(listTableDB, null);
        return [];
      });
    }
 
  return (
    <button onClick={deleteList} type="button">Delete All</button>
  )
}

export default Button;