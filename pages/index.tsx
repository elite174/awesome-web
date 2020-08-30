import React, { FC } from 'react';
import { css } from 'emotion';

import { links, Link } from '../data';

const pageStyles = css`
    min-height: 100vh;
`;

const titleStyles = css``;

const linksContainerStyles = css``;

const linkStyles = css``;

const linkContainerStyles = css``;

interface Props {
    readonly link: Link;
}

const Link: FC<Props> = ({ link }) => (
    <div className={linkContainerStyles}>
        <a className={linkStyles}></a>;
    </div>
);

export default function Home() {
    return (
        <div className={pageStyles}>
            <div className={titleStyles}>Awesome web</div>
            <div className={linksContainerStyles}>
                {links.map((l) => (
                    <Link key={l.url} link={l} />
                ))}
            </div>
        </div>
    );
}
