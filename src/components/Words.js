import React from 'react';
import Button from './Button';

export default function Words(props) {  
  console.log(props)
  return (  
    <div>
      <ul className="page">
       {props.wordList}
      </ul>
      {!props.wordList[0] ? '' :  <Button />}
    </div>
  )
}
