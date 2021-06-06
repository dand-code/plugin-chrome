import { wordListState} from '../hooks/atom';
import { useRecoilState } from 'recoil';
//local storage
import { save } from '../services/localStorage';
import { listTableDB } from '../hooks/variables';

export default function DeleteItem(props) {
    const word = props.item;
    const [list, setList] = useRecoilState(wordListState);
   
    function DeleteClick(e) {
        e.preventDefault();
        const newList = list.filter(function (item) {
            return item.word !== word;
        });
        setList(newList);
        save(listTableDB, newList);
    }

    return (
        <button onClick={DeleteClick}>x</button>   
    );   
};