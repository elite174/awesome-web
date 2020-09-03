import { createContext, Dispatch, SetStateAction } from 'react';

interface StoreContext {
    readonly dispatch: Dispatch<SetStateAction<string>> | null;
}

export const StoreContext = createContext<StoreContext>({ dispatch: null });
