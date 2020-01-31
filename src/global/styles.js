import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body{
        min-height: 100%;
    }
    body{
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased !important;
        background: ${Colors.white};
    }
    a, button{
        cursor: pointer;
        outline: none;
    }
    a{
        text-decoration: none;
        color: #000;
    }
`;
