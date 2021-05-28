import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textState, wordListState } from '../hooks/atom';
import { save } from '../services/localStorage';

import { listTableDB } from '../hooks/variables';


function AddWord() {
  const [text, setText] = useRecoilState(textState);
  const setWordList = useSetRecoilState(wordListState);


  const handleInputChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setText({
      ...text,
      [name]: value,
    });
    console.log(text);
  };

  // const onChange = (event) => {
  //   setText(event.target.value);
  //   console.log()
  // };

  // const handleInputChange = (e) => {
  //   const { name, text} = e.target;

  //   setText({
  //     ...text,

  //     [name]: text,
  //   });

  //   console.log(text);
  // };


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
      <input
        type="text"
        name="word"
        value={text.word}
        placeholder="new word" onChange={handleInputChange}
      />

      <input
        type="text"
        name ="notes"
        value={text.notes}
        placeholder="notes"
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddWord;
