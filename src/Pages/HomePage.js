import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components';
import BookIcon from '@material-ui/icons/Book';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function HomePage() {
    return (
        <div>
            <HomePageStyled>
                <div className="p-particles-js">
                    <Particles className="max" />
                </div>
                <div className="typography">
                    <h1>
                        Hi, I'm <span>Abhyudaya Avasthi</span></h1>
                        <p>Software Developer and Designer</p>
                    <div className="icons">
                        <a href = "https://www.quora.com/profile/Abhyudaya-Avasthi" className="icon i-quora">
                            <BookIcon/>
                        </a>
                        <a href = "https://github.com/avasthiabhyudaya" className="icon i-github">
                            <GitHubIcon/>
                        </a>
                        <a href = "https://www.linkedin.com/in/abhyudaya-avasthi-633900157/" className="icon i-linkedin">
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            </HomePageStyled>
        </div>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    user-select: none;

    .p-particles-js
    {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .max
        {
            height: 100%;
            width: 100%;
        }
    }

    .typography
    {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 80%;

        .icons
        {
            display: flex;
            justify-content: center;
            margin-top: 1rem;

            .icon
            {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: All 0.4s ease-in-out;
                cursor: pointer;

                &:hover
                {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }

                &:not(:last-child)
                {
                    margin-right: 1rem;
                }

                svg
                {
                    margin: 0.5rem;
                }

            }

            .i-quora
            {
                &:hover
                {
                    border: 2px solid #f52936;
                    color: #f52936;
                }
            }
            .i-github
            {
                &:hover
                {
                    border: 2px solid #5f4687;
                    color: #5f4687;
                }
            }
            .i-linkedin
            {
                &:hover
                {
                    border: 2px solid #0a66c2;
                    color: #0a66c2;
                }
            }
        }
    }
`;

export default HomePage;
