import React from 'react';
import Button from './Button';
import OnOffToggle from './OnOffToggle';
//PropTypes
import PropTypes from 'prop-types';

export default function Words(props) {
  const updateActiveExtension = props.updateActiveExtension;
  return (  
    <div>
        <OnOffToggle updateActiveExtension={updateActiveExtension}/>
      <ul>
       {props.wordList}
      </ul>
      {!props.wordList[0] ? '' :  <Button />}
    </div>
  )
}

Words.propTypes = {
  wordList: PropTypes.array,
  updateActiveExtension:PropTypes.function
};