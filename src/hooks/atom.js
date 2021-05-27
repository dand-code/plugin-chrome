import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const textState = atom({
    key: 'text', 
    default: '', 
});
export const wordListState = atom({
    key: 'wordListState', 
    default: [], 
    effects_UNSTABLE: [persistAtom]
});

