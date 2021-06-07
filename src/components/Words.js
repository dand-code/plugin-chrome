import React from 'react';
import Button from './Button';
//PropTypes
import PropTypes from 'prop-types';

export default function Words(props) {
  return (  
    <div>
      <ul className="page">
       {props.wordList}
      </ul>
      {!props.wordList[0] ? '' :  <Button />}
    </div>
  )
}

Words.propTypes = {
  wordList: PropTypes.string
};