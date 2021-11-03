import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    };
    button{
        cursor: pointer;
        outline: none;
    };
    input{
        display: flex;
        outline: none;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyle;
