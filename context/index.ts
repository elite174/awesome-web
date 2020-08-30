import { createContext } from 'react';

interface TagContext {
    readonly tags: string;
}

export const TagContext = createContext<TagContext>({ tags: '' });
