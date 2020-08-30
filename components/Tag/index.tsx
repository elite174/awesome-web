import React, { FC, MouseEventHandler, useContext } from 'react';

import { ClassNameProps } from '../../typings';
import { cx, css } from 'emotion';
import { TagContext } from '../../context';

const buttonStyles = (active?: boolean) => css`
    background: none;
    border: none;
    color: ${active ? '#f02244' : '#999'};
    cursor: pointer;
    outline: none;

    padding: 0;
`;

interface Props extends ClassNameProps {
    readonly text: string;
    readonly active?: boolean;
    readonly onTagClick?: MouseEventHandler;
}

export const TagView: FC<Props> = ({ text, active, onTagClick, className = '' }) => (
    <button onClick={onTagClick} className={cx(buttonStyles(active), className)}>
        # {text}
    </button>
);

const Tag: FC<Omit<Props, 'active'>> = ({ text, ...rest }) => {
    const { tags } = useContext(TagContext);

    const active = tags.indexOf(text) !== -1;

    return <TagView active={active} text={text} {...rest} />;
};

export default Tag;
