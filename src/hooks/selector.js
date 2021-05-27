
import { selector } from 'recoil';
import { wordListState } from '../hooks/atom';


export const updateWordList = selector({
    key: 'updateWordList',
    get: ({get}) => {
        const listItem = get(wordListState);
        console.log(listItem);
        return listItem.map((word, index) => (
            <li key={index + 100}>     
                <p>{word}</p>
            </li>
        ));   
    },
  });