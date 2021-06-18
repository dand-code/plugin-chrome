import React from 'react';
import PropTypes from 'prop-types';

export default function Words(props) {

  return (  
    
      <ul>
       {props.wordList}
      </ul>
   
  )
}

Words.propTypes = {
  wordList: PropTypes.array,
};