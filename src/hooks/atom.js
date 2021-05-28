import { atom } from 'recoil';
// import { fetch } from '../services/localStorage';
// import { listTableDB } from '../hooks/variables';

export const textState = atom({
    key: 'text', 
    default: {
        word: "",
        note: "",
      }
});
export const wordListState = atom({
    key: 'wordListState', 
    default: [], 
});
