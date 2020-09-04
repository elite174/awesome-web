import React, { FC } from 'react';
import { css } from 'emotion';

import Tag from '../Tag';

import { Link as ILink } from '../../data';
import { ClassNameProps } from '../../typings';
import { typography, device } from '../../variables';

const linkStyles = css`
    display: block;
    margin-bottom: 8px;

    ${typography.l}

    color: var(--color-text-primary);
    transition: color 0.15s ease-out;

    &:hover,
    &:active {
        color: var(--color-accent);
    }

    @media ${device.mobileL} {
        ${typography.m}
    }
`;

const tagRowStyles = css`
    display: flex;
    align-items: center;
`;

const tagStyles = css`
    margin-right: 12px;

    &:last-child {
        margin: 0;
    }
`;

const descriptionStyles = css`
    ${typography.text20}

    margin-bottom: 16px;

    color: var(--color-text-secondary);

    @media ${device.mobileL} {
        ${typography.text16}
    }
`;

interface Props extends ClassNameProps {
    readonly link: ILink;
}

const Link: FC<Props> = ({ link: { url, description, tags }, className = '' }) => (
    <div className={className}>
        <a href={url} className={linkStyles}>
            {url.replace(/https?:\/\//, '')}
        </a>
        <div className={descriptionStyles}>{description}</div>
        <div className={tagRowStyles}>
            {tags?.map((t) => (
                <Tag key={t} className={tagStyles} text={t} />
            ))}
        </div>
    </div>
);

export default Link;
