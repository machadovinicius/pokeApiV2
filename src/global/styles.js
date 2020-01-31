import { createGlobalStyle } from "styled-components";

import background from "../assets/pokeball_02.png";

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
        background-image: url(${background});
    }
    a, button{
        cursor: pointer;
        outline: none;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    li{
        list-style: none;
    }
`;
