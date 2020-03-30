import React from 'react';
import Main from '../main/Main';
import About from '../about/About';

const Base =({ authenticated }) => {
    return (
        <>
            <Main authenticated={ authenticated }/>
            <About />
        </>
    )
}

export default Base;