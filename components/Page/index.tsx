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
            <meta
                name="description"
                content="Search for the useful tools, learning platforms and sites"
            />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="keywords" content="awesome,web,tools,css,learning" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="theme-color" content="#ffffff" />
            <title>Awesome Web | The collection of useful tools and links</title>
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
