import React from 'react';
import { selector } from 'recoil';
import { wordListState } from '../hooks/atom';
import DeleteItem from '../components/DeleteItem';

export const updateWordList = selector({
    key: 'updateWordList',
    get: ({get}) => {
        const listItem = get(wordListState);
    
        return listItem.map((word, index) => (
            <li key={index+100}>
                <div className="box">
                    <p>{word.word} <span>{word.note}</span></p>
                </div>
                <DeleteItem item={word.word} />
            </li>    
        ));   
    },
  });