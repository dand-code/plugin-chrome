import { atom } from 'recoil';

export const textState = atom({
    key: 'text', 
    default: '', 
});
export const wordListState = atom({
    key: 'wordListState', 
    default: [], 
});
