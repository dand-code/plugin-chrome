import { atom } from 'recoil';
import { fetch } from '../services/localStorage';

export const textState = atom({
    key: 'text', 
    default: {
        word: null,
        note: null,
      }
});

export const wordListState = atom({
    key: 'wordListState', 
    default: getWordListState(), 
});

export const activateState = atom({
    key: 'activateState', 
    default: true, 
});


async function getWordListState() { 
    return await(fetch()) || [];
}