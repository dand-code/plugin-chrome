import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textState, wordListState } from '../hooks/atom';
import { save } from '../services/localStorage';

import { listTableDB } from '../hooks/variables';


function AddWord() {
  const [text, setText] = useRecoilState(textState);
  const setWordList = useSetRecoilState(wordListState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    setWordList((...oldText) => {
      const newList = [].concat(...oldText);
      newList.push(text);
      save(listTableDB, newList);
      return newList;
    });
    return setText('');
  };

  return (
    <form>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddWord;
