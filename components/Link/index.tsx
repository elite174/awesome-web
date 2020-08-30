import React, { FC } from 'react';
import { css, cx } from 'emotion';

import Tag from '../Tag';

import { Link as ILink } from '../../data';
import { ClassNameProps } from '../../typings';
import { typography } from '../../variables';

const linkStyles = css`
    display: block;

    ${typography.xl}

    margin-bottom: 24px;

    color: black;

    &:hover,
    &:active {
        color: #f02244;
    }
`;

const linkContainerStyles = css``;

const tagRowStyles = css`
    display: flex;
    align-items: center;
`;

const tagStyles = css`
    margin-right: 8px;

    &:last-child {
        margin: 0;
    }
`;

interface Props extends ClassNameProps {
    readonly link: ILink;
}

const Link: FC<Props> = ({ link, className = '' }) => (
    <div className={cx(linkContainerStyles, className)}>
        <a href={link.url} className={linkStyles}>
            {link.url.replace(/https?:\/\//, '')}
        </a>
        <div className={tagRowStyles}>
            {link.tags?.map((t) => (
                <Tag key={t} className={tagStyles} text={t} />
            ))}
        </div>
    </div>
);

export default Link;
