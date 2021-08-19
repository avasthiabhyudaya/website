import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    /* :root
    {
        --primary-color: #6577f5;
        --primary-color-light: #057fff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121a;
        --background-dark-color-grey: #1d1d2e;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(100, 123, 247, 0.47);
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;   
        --sidebar-dark-color:  #191d2b;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

    } */

    .light-theme
    {
        --primary-color: #6577f5;
        --primary-color-light: #057fff;
        --secondary-color: #6c757d;
        --background-dark-color: #f1f1f1;
        --background-dark-color-grey: #e4e4e4;
        --border-color: #cbced8;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(100, 123, 247, 0.47);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;   
        --sidebar-dark-color:  #e4e4e4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    .dark-theme
    {
        --primary-color: #6577f5;
        --primary-color-light: #057fff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121a;
        --background-dark-color-grey: #1d1d2e;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(100, 123, 247, 0.47);
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;   
        --sidebar-dark-color:  #191d2b;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;   
    }
    
    *
    {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }
    body
    {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    body::-webkit-scrollbar
    {
        width: 9px;
        background-color: #383838;
    }
    
    body::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #6b6b6b;
    }   
    
    body::-webkit-scrollbar-track
    {
        border-radius: 10px;
        background-color: #383838;
    }

    a
    {
        font-family: inherit;
        color: inherit;
        font-size: 1rem;
    }

    h1
    {
        font-size: 3rem;
        color: var(--white-color);
        span
        {
            font-size: 3rem;
        }
    }

    span
    {
        color: var(--primary-color);
    }

    h6
    {
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: .6rem;
    }

    //Floating Toggle button

    .light-dark-mode
    {
        position: absolute;
        right: 0%;
        top:0%;
        background-color: var(--background-light-color-2);
        width: 6.5rem;
        height: 2.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content: center;

        svg
        {
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
        }
    }

   //Nav Toggler
   .ham-burger-menu{
      position: absolute;
      right: 5%;
      top: 5%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
        .ham-burger-menu{
            display: block;
        }
    }

`;

export default GlobalStyle;
