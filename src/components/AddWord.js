import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../hooks/atom';
//PropTypes
import PropTypes from 'prop-types';


export default function AddWord(props) {
  const [text, setText] = useRecoilState(textState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setText({
      ...text,
      [name]: value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();

    props.saveWord(text); 
    return setText('');
  };
  
  const ErrorAlert = () => {
      if (!text.word || !text.note){
       alert('Oh no! You forgot to put a note. 🧐');
      return;
    } 
  }

  return (
    <form onSubmit={ addItem }>
      <label htmlFor="word">Word</label>
      <input
        required="required"
        id="word"
        type="text"
        name="word"
        value={text.word || ''}
        placeholder="new word" onChange={handleInputChange}
      />

      <label htmlFor="note">Note</label>
      <input
        required="required"
        id="note"
        type="text"
        name ="note"
        value={text.note || ''}
        placeholder="note"
        onChange={handleInputChange}
      />
      <button onClick={ErrorAlert} type="submit">Add</button>
    </form>
  );
}

AddWord.propTypes = {
  saveWord: PropTypes.any
};