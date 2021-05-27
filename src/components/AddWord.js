import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textState, wordListState } from '../hooks/atom';

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
      const newList = [...oldText];
      newList.push(text);
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
