import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
//atom and selector
import { wordListState } from './hooks/atom';
import { updateWordList } from './hooks/selector';
//components
import AddWord from './components/AddWord';
import Words from './components/Words';
//local storage
import { save } from './services/localStorage';
import { listTableDB } from './hooks/variables';

export default function App() {
  const setWordList = useSetRecoilState(wordListState);
  const wordList = useRecoilValue(updateWordList);

  const saveWord = (text) => { 
    setWordList((...oldText) => {
      const newList = [].concat(...oldText);
      newList.push(text);
      save(listTableDB, newList);
      return newList;
    });
  }

  return ( 
    
      <div className="page">
        <header>
          <h1>Words</h1>
        </header>
        <main>
          <AddWord saveWord={ saveWord }/>
          <Words wordList={ wordList }/>
        </main>
      </div>
  );
}

