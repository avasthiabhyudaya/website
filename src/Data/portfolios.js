import img1 from './../images/portImages/crypto.jpeg';
import img2 from './../images/portImages/javascript.jpeg';
import img3 from './../images/portImages/snake.png';
import img4 from './../images/portImages/reddit.png';
import img5 from './../images/portImages/recipe.png';
import img6 from './../images/portImages/extension.png';
import img7 from './../images/portImages/swipe.jpeg';

const portfolios = [
    {
        id: 1,
        category: 'Ethereum',
        image: img1,
        link1: 'https://github.com/avasthiabhyudaya/Paisa-coin',
        link2: 'https://ropsten.etherscan.io/address/0xEB63dF241EE47c2B6076BeA853e03A92F7261dc2',
        title: 'Paisa Coin',
        text: 'My cryptocurrency using Solidity & Ethereum Smart Contracts'
    },
    {
        id: 2,
        category: 'JavaScript',
        image: img2,
        link1: 'https://github.com/avasthiabhyudaya/30-days-30-JS-projects',
        link2: 'https://github.com/avasthiabhyudaya/30-days-30-JS-projects',
        title: 'JS 30 days 30 projects',
        text: 'A challenge that i undertook'
    },
    {
        id: 3,
        category: 'JavaScript',
        image: img3,
        link1: 'https://github.com/avasthiabhyudaya/snake-game-',
        link2: 'https://avasthiabhyudaya.github.io/snake-game-/',
        title: 'Snake Game',
        text: 'Implementation of the Physics of the game in JS'
    },
    {
        id: 4,
        category: 'JavaScript',
        image: img4,
        link1: 'https://github.com/avasthiabhyudaya/reddit-search',
        link2: 'https://avasthiabhyudaya.github.io/reddit-search/',
        title: 'Reddit Search',
        text: 'Search App using ES6 and Parcel bundler and queries using Reddit API'
    },
    {
        id: 5,
        category: 'JavaScript',
        image: img5,
        link1: 'https://github.com/avasthiabhyudaya/food-recipe-app',
        link2: 'https://avasthiabhyudaya.github.io/food-recipe-app/',
        title: 'Food Recipe App',
        text: 'Search Recipe APP by Ingredients using Vanilla JS and Recipe DB'
    },
    // {
    //     id: 6,
    //     category: 'React JS',
    //     image: react1,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'Responsive Portfolio Website',
    //     text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    // },
    {
        id: 6,
        category: 'JavaScript',
        image: img6,
        link1: 'https://github.com/avasthiabhyudaya/coronavirus-blocker',
        link2: '',
        title: 'Go Corona Go',
        text: 'Google Chrome Extension to block the articles with the word corona in them'
    },    
    {
        id: 7,
        category: 'JavaScript',
        image: img7,
        link1: 'https://github.com/avasthiabhyudaya/Dont-look-at',
        link2: 'https://avasthiabhyudaya.github.io/Dont-look-at/',
        title: 'Eye Swipe',
        text: 'Swiping Images in the direction your gaze goes using Vanilla JS and WebGazer API'
    }
]

export default portfolios;