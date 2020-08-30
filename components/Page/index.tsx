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
        font-family: 'Anton', sans-serif;
    }
`;

const pageStyles = css`
    height: 100vh;
`;

const Page: FC<ClassNameProps> = ({ children, className = '' }) => (
    <div className={cx(pageStyles, className)}>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Global styles={globalStyles} />
        {children}
    </div>
);

export default Page;
