import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    color: #ffff;
    background-color: #333;
  }

  body,
  input,
  select,
  textarea,
  button{
    font-family: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }   

  a{
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  } 

`
