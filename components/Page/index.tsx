import React, { FC } from 'react';
import { Global, css as cssGlobal } from '@emotion/core';
import { css, cx } from 'emotion';

import Head from 'next/head';

import { ClassNameProps } from '../../typings';

const globalStyles = cssGlobal`
    body {
        margin: 0;
        padding: 0;

        background: #f2f2f2;
    }

    * {
        font-family: 'Playfair Display', serif;
    }

    :root {
        --color-accent: #176105;
        --color-text-primary: #121212;
        --color-text-secondary: #595959;
    }
`;

const pageStyles = css`
    min-height: 100vh;
`;

const Page: FC<ClassNameProps> = ({ children, className = '' }) => (
    <div className={cx(pageStyles, className)}>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Global styles={globalStyles} />
        {children}
    </div>
);

export default Page;
