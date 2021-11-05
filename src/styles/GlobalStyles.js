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
        font-family: NotoSansKR, Roboto, sans-serif, "Noto Sans";

        @media only screen and (max-width: 768px) {
            font-size: 14px;
  }

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
