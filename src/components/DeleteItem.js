import React from 'react';
import { wordListState, activateState } from '../hooks/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
//local storage
import { save } from '../services/localStorage';
import { listTableDB } from '../hooks/variables';
//PropTypes
import PropTypes from 'prop-types';

export default function DeleteItem(props) {
    const word = props.item;
    const [list, setList] = useRecoilState(wordListState);
    const activated = useRecoilValue(activateState);

    function DeleteClick(e) {
        e.preventDefault();
        const newList = list.filter(function (item) {
            return item.word !== word;
        });
        setList(newList);
        save(listTableDB, { activated: activated, words: newList });
    }

    return (
        <button onClick={DeleteClick} data-testid={`del_${ word }`}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>   
    );   
}

DeleteItem.propTypes = {
    item: PropTypes.string
};