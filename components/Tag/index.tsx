import React, { FC, useContext } from 'react';
import { cx, css } from 'emotion';

import { StoreContext } from '../../context';

import { ClassNameProps } from '../../typings';

const buttonStyles = css`
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    outline: none;

    padding: 0;

    &:hover {
        color: #f02244;
    }
`;

interface Props extends ClassNameProps {
    readonly text: string;
}

export const Tag: FC<Props> = ({ text, className = '' }) => {
    const { dispatch } = useContext(StoreContext);

    return (
        <button onClick={() => dispatch?.(text)} className={cx(buttonStyles, className)}>
            # {text}
        </button>
    );
};

export default Tag;
