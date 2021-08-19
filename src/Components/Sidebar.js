import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

export default function Sidebar({navToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation/>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    min-height: 100vh;
    user-select: none;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width:1200px)
    {
        transform: translateX(-100%);
        z-index: 20;
        position: fixed;
    }
`;