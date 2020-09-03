import React, { useState, ChangeEventHandler, useCallback } from 'react';
import { css } from 'emotion';

import Page from '../components/Page';
import Link from '../components/Link';

import { links } from '../data';
import { typography } from '../variables';
import { StoreContext } from '../context';

const pageStyles = css`
    max-width: 600px;
    margin: auto;
    padding-bottom: 80px;
`;

const titleStyles = css`
    font-size: 80px;
    text-transform: uppercase;

    padding: 80px 0;
`;

const linksContainerStyles = css`
    padding: 0 16px;
`;

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
`;

const labelStyles = css`
    ${typography.text16}
    
    display: block;
    margin-bottom: 8px;

    color: #aaa;
`;

const inputRowStyles = css`
    position: sticky;
    top: 0;

    margin-bottom: 32px;
    padding: 12px 16px;

    background: #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2.3px 2.3px rgba(0, 0, 0, 0.02), 0 5.6px 5.5px rgba(0, 0, 0, 0.028),
        0 10.5px 10.4px rgba(0, 0, 0, 0.035), 0 18.8px 18.5px rgba(0, 0, 0, 0.042),
        0 35.1px 34.7px rgba(0, 0, 0, 0.05), 0 84px 83px rgba(0, 0, 0, 0.07);
`;

export default function Home() {
    const [tagText, setTagText] = useState<string>('');

    const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => setTagText(e.target.value),
        []
    );

    const splittedTags = tagText.trim().split(' ');
    const filteredLinks = links.filter((l) =>
        l.tags?.some((t) => splittedTags.some((tag) => t.includes(tag)))
    );

    return (
        <StoreContext.Provider value={{ dispatch: setTagText }}>
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
                    {filteredLinks.map((l) => (
                        <Link className={linkStyles} key={l.url} link={l} />
                    ))}
                </div>
            </Page>
        </StoreContext.Provider>
    );
}
