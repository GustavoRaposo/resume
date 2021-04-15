import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './components/App';


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Ubuntu', sans-serif;
    }

    html, body{
        max-width: 100vw;
        height: auto;
    }
`;


ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);