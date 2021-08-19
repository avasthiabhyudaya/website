import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../images/avatar.jpg';

export default function navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src = {avatar} alt=""/>
                <h2>Abhyudaya Avasthi</h2>
            </div>

             <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
             </ul>
             <footer className="footer">
                 <p>
                     MIT License @2021
                 </p>
             </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    
    h2
    {
        color: var(--primary-color);
    }

    .avatar
    {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        border-right: 1px solid var(--border-color);

        img
        {
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            object-fit: cover;
        }
    }
    .nav-items
    {
        width: 100%;
        text-align: center;
        /* font-weight: lighter; */

        .active-class
        {
            background-color: var(--primary-color);
        }

        li
        {
            display: block;
            transition: all .4s ease-in-out;
            a
            {
                padding: 0.45rem 0;
                display: block;
                position: relative;
                z-index: 10;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover
                {
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before
                {
                    content:"";
                    position: absolute; 
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color); 
                    transition: All 0.4s cubic-bezier(.85,-0.3,.48,.99);
                    z-index: 3;
                    opacity: 0.21;
                    /* transform-origin: right; */
                }
            }
            a:hover::before
            {
                width: 100%;
                height: 100%;
            }
        }
    }

    footer
    {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p
        {
            padding: 1rem 0;
            font-size: 1rem;
            text-align: center;
        }
    }
`;