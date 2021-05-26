import React from 'react';
import { atom, useRecoilState, useSetRecoilState} from 'recoil';

export const textState = atom({
    key: 'text', 
    default: '', 
});
export const wordListState = atom({
    key: 'wordListState', 
    default: [], 
});

function AddWord() {
  const [text, setText] = useRecoilState(textState);
  const setWordList = useSetRecoilState(wordListState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (!text.length) return;
    setWordList((oldWordList) => {
      const newWordList = [
        ...oldWordList,
        {
          text,
          isComplete: false,
        },
      ];
      return newWordList;
    });
  };

  return (
    <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddWord;
