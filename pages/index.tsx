import React, { useState, ChangeEventHandler, useCallback } from 'react';
import { css } from 'emotion';

import Page from '../components/Page';
import Link from '../components/Link';

import { links } from '../data';
import { typography } from '../variables';
import { TagContext } from '../context';

const pageStyles = css`
    max-width: 600px;
    margin: auto;
`;

const titleStyles = css`
    font-size: 80px;
    text-transform: uppercase;

    padding: 80px 0;
`;

const linksContainerStyles = css``;

const linkStyles = css`
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const inputStyles = css`
    border: none;
    background: none;
    outline: none;

    ${typography.text20}

    width: 100%;

    border-bottom: 1px solid #ccc;
`;

const labelStyles = css`
    ${typography.text16}

    color: #aaa;
`;

const inputRowStyles = css`
    margin-bottom: 32px;
`;

export default function Home() {
    const [tagText, setTagText] = useState('');

    const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => setTagText(e.target.value),
        []
    );

    return (
        <TagContext.Provider value={{ tags: tagText }}>
            <Page className={pageStyles}>
                <div className={titleStyles}>Awesome web</div>
                <div className={inputRowStyles}>
                    <label className={labelStyles}>Enter tags with spaces</label>
                    <input
                        className={inputStyles}
                        type="text"
                        value={tagText}
                        onChange={onInputChange}
                    />
                </div>

                <div className={linksContainerStyles}>
                    {links.map((l) => (
                        <Link className={linkStyles} key={l.url} link={l} />
                    ))}
                </div>
            </Page>
        </TagContext.Provider>
    );
}
