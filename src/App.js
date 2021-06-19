import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
//atom and selector
import { wordListState, activateState } from './hooks/atom';
import { updateWordList } from './hooks/selector';
//components
import OnOffToggle from './components/OnOffToggle';
import AddWord from './components/AddWord';
import Words from './components/Words';
//local storage
import { save } from './services/localStorage';
import { listTableDB } from './hooks/variables';
//passing messages
import { emitMessage } from './services/syncMessage';


export default function App() {
  const [wordList, setWordList] = useRecoilState(wordListState);
  const wordListHTML = useRecoilValue(updateWordList);
  const [activated, setActivated] = useRecoilState(activateState);

  const updateActiveExtension = () => { 
    if (activated === true)
    {
      desactivateExtension();
      save(listTableDB, { activated: false, words: wordList });
    }
    else 
    {
      activateExtension();
      save(listTableDB, { activated: true, words: wordList });
    } 
  }

  const activateExtension = () => {
    setActivated(true);
    emitMessage({ activated: true, words: wordList});
  }
  
  const desactivateExtension = () => { 
    setActivated(false);
    emitMessage({ activated: false, words: wordList});
  }

  const saveWord = (newWord) => { 
    setWordList((...oldList) => {
      let newList = [].concat(...oldList);
      const index = wordIndex(newWord.word);
      console.log(index);
      if (index !== -1)
        newList[index] = newWord;
      else 
        newList.push(newWord);
      console.log(newList);
      save(listTableDB, { activated: activated, words: newList });
      return newList;
    });
  }

  const wordIndex = (newWord) => { 
    return wordList.findIndex((word) => word.word.toUpperCase() === newWord.toUpperCase());
  }


  return ( 
      <div className="page">
        <header className="header">
          <h1>PopUpWords</h1>
          <nav>
          <OnOffToggle updateActiveExtension={updateActiveExtension} activated={activated}/>
          </nav>
      </header>
      
        <main>
          <AddWord saveWord={ saveWord }/>
          <Words wordList={wordListHTML} />
        </main>
      </div>
  );
}

