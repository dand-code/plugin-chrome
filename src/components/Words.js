import React from 'react';
import PropTypes from 'prop-types';

export default function Words(props) {

  return (  
    <div className="wraper-list">
      <ul>
       {props.wordList}
      </ul>
    </div>
  )
}

Words.propTypes = {
  wordList: PropTypes.array,
};