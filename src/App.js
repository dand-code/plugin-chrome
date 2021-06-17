import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
//atom and selector
import { wordListState, activateState } from './hooks/atom';
import { updateWordList } from './hooks/selector';
//components
import AddWord from './components/AddWord';
import Words from './components/Words';
//local storage
import { save } from './services/localStorage';
import { listTableDB } from './hooks/variables';
//pass message
import { emitMessage } from './services/syncMessage';


export default function App() {
  const [wordList, setWordList] = useRecoilState(wordListState);
  const wordListHTML = useRecoilValue(updateWordList);
  const [activated, setActivated] = useRecoilState(activateState);

  const updateActiveExtension = () => { 
    if (activated===true)
      desactivateExtension();
    else
      activateExtension();
  }

  const activateExtension = () => {
    setActivated(true);
    emitMessage({ words: wordList });
  }
  
  const desactivateExtension = () => { 
    setActivated(false);
    emitMessage("switch-off");
  }

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
        <Words wordList={wordListHTML} updateActiveExtension={updateActiveExtension}/>
        </main>
      </div>
  );
}

