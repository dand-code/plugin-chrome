import { atom } from 'recoil';
import { fetchWords, fetchExtState } from '../services/localStorage';

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
    default: getExtStateState(), 
});


async function getWordListState() { 
    return await(fetchWords());
}

async function getExtStateState() { 
    return await(fetchExtState());
}