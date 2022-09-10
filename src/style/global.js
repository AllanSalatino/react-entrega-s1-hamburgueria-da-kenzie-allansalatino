import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #FFFFFF;
        --black: #333333;
        --lightGrey: #F5F5F5;
        --mediumGrey: #E0E0E0;
        --green: #27AE60;
        --pink: #EB5757;
        --darkGrey: #828282;
    }

    button{
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }

    ul, ol, li{
        list-style: none;
    }
`