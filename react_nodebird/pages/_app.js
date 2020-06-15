// 이 페이지에서는 공통되는 기능들을 처리
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;