
import React from 'react';
import { useSetRecoilState } from 'recoil';
import wordListState from '../hooks/atom';
import { save } from '../services/localStorage';


function Delete() {  
    const setWordList = useSetRecoilState(wordListState);
    const deleteList = (index) => {
        setWordList((oldWordList) => {
          const newWordList = oldWordList.filter(function (el, i) {
            return index !== i;
          });
          save (newWordList);
          return newWordList;
        });
      };


 
  return (
      <button onClick={deleteList}>X</button>
  )
}

export default Delete;