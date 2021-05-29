import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textState, wordListState } from '../hooks/atom';
import { save } from '../services/localStorage';

import { listTableDB } from '../hooks/variables';


function AddWord() {
  const [text, setText] = useRecoilState(textState);
  const setWordList = useSetRecoilState(wordListState);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setText({
      ...text,
      [name]: value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    console.log(text);
    if (!text.word || !text.note) 
    {
      alert('Oh no! You forgot to put a note. 🧐');
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
      <input
        required="required"
        type="text"
        name="word"
        value={text.word || ''}
        placeholder="new word" onChange={handleInputChange}
      />

      <input
        required="required"
        type="text"
        name ="note"
        value={text.note || ''}
        placeholder="note"
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddWord;
