import React, { useState, ChangeEventHandler, useCallback } from 'react';
import { css } from 'emotion';

import Page from '../components/Page';
import Link from '../components/Link';

import { links } from '../data';
import { typography, device } from '../variables';
import { StoreContext } from '../context';

import searchIconImage from '../assets/search.svg';
import leafImage from '../assets/leaf.png';

const pageStyles = css`
    max-width: 600px;
    margin: auto;
    padding: 30px 0 80px;

    @media ${device.mobileL} {
        padding: 24px 12px 60px;
    }
`;

const titleContainerStyles = css`
    padding: 40px 0 40px;
`;

const titleStyles = css`
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 500;

    margin-bottom: 12px;

    @media ${device.mobileS} {
        font-size: 50px;
    }
`;

const subtitleStyles = css`
    ${typography.text20}

    @media ${device.mobileS} {
        ${typography.text16}
    }
`;

const linksContainerStyles = css`
    margin-bottom: 64px;
`;

const linkStyles = css`
    margin-bottom: 48px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const inputStyles = css`
    border: none;
    background: transparent;
    outline: none;

    ${typography.text20}

    width: 100%;

    &:placeholder {
        color: var(--color-text-secondary);
    }
`;

const inputRowStyles = css`
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;

    margin-bottom: 32px;
    padding: 12px 16px;

    background: #f2f2f2;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 0.7px 2.2px rgba(0, 0, 0, 0.022), 0 1.7px 5.3px rgba(0, 0, 0, 0.023),
        0 3.1px 10px rgba(0, 0, 0, 0.022), 0 5.6px 17.9px rgba(0, 0, 0, 0.026),
        0 10.4px 33.4px rgba(0, 0, 0, 0.04), 0 25px 80px rgba(0, 0, 0, 0.13);
`;

const imageStyles = css`
    width: 18px;
    height: 18px;
    margin-right: 12px;

    flex-shrink: 0;
`;

const footerStyles = css`
    ${typography.caption}

    color: var(--color-text-secondary);
`;

const footerLinkStyles = css`
    color: var(--color-text-secondary);
`;

const leafImageStyles = css`
    position: fixed;
    top: -200px;
    left: 20px;

    opacity: 0.05;

    z-index: -1;

    @media ${device.mobileL} {
        left: -200px;
    }
`;

const noResultsTextStyles = css`
    ${typography.l}

    @media ${device.mobileL} {
        ${typography.m}
    }
`;

export default function Home() {
    const [tagText, setTagText] = useState<string>('');

    const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => setTagText(e.target.value),
        []
    );

    const splittedTags = tagText.trim().toLocaleLowerCase().split(' ');
    console.log(splittedTags);
    const filteredLinks =
        splittedTags.length > 0
            ? links.filter((l) =>
                  splittedTags.every((t) =>
                      l.tags?.some((tag) => tag.toLocaleLowerCase().includes(t))
                  )
              )
            : links;

    return (
        <StoreContext.Provider value={{ dispatch: setTagText }}>
            <Page className={pageStyles}>
                <img src={leafImage} className={leafImageStyles} />
                <div className={inputRowStyles}>
                    <img className={imageStyles} src={searchIconImage} />
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Enter tags separated by spaces"
                        value={tagText}
                        onChange={onInputChange}
                    />
                </div>
                {tagText.length === 0 ? (
                    <div className={titleContainerStyles}>
                        <div className={titleStyles}>Awesome web</div>
                        <div className={subtitleStyles}>
                            The collection of useful tools and links
                        </div>
                    </div>
                ) : null}
                <div className={linksContainerStyles}>
                    {filteredLinks.length ? (
                        filteredLinks.map((l) => (
                            <Link className={linkStyles} key={l.url} link={l} />
                        ))
                    ) : (
                        <span className={noResultsTextStyles}>No results</span>
                    )}
                </div>
                <div className={footerStyles}>
                    Icons made by{' '}
                    <a
                        className={footerLinkStyles}
                        href="https://icon54.com/"
                        title="Pixel perfect"
                    >
                        Pixel perfect
                    </a>{' '}
                    from{' '}
                    <a
                        className={footerLinkStyles}
                        href="https://www.flaticon.com/"
                        title="Flaticon"
                    >
                        {' '}
                        www.flaticon.com
                    </a>
                </div>
            </Page>
        </StoreContext.Provider>
    );
}
