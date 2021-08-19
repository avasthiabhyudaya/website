import React from 'react'
import styled from 'styled-components'
import Github from '@material-ui/icons/GitHub'
// import Pinterest from '@material-ui/icons/Pinterest'
import CodeIcon from '@material-ui/icons/Code';

function Menu({menuItem}) {
    return (
        <MenuStyled>
            {
            menuItem.map((item)=> {
                return <div className="grid-item" key={'item.id'}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={item.link1}><Github/></a>
                                    </li>
                                    <li>
                                        <a href={item.link2}><CodeIcon/></a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width:920px)
    {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:620px)
    {
        grid-template-columns: repeat(1, 1fr);
    }    
    
    .grid-item
    {
        .portfolio-content
        {
            display: block;
            position: relative;

            h6
            {
                font-size: 1.2rem;
            }
            
            img
            {
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            
            ul
            {
                opacity: 0;
                position: absolute;
                left: 50%;
                top: 40%;
            }

            p
            {
                font-size: 1rem;
            }

            .portfolio-image
            {
                transition: all 1s ease-in-out;
            }

            .portfolio-image:hover
            {

                cursor: pointer;

                img
                {
                    filter: blur(5px);
                    transition: all .75s ease-in-out;

                }

                ul
                {
                    transform: translateY()(-600px);
                    opacity: 1;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    transition: all .75s ease-in-out;
                    justify-content: center;

                    li
                    {                       
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: var(--primary-color);
                        width: 4rem;
                        height: 4rem;
                        padding: 1rem;
                        border-radius: 50%;
                        margin: 0 .5rem;
                        transition: all .75s ease-in-out;
                        opacity: 0.6;
                        
                        a
                        {
                            display: flex;
                            align-items: center;
                            transition: all .75s ease-in-out;
                            justify-content: center;
                        }
                    }

                    svg
                    {
                        font-size: 2rem;
                        transition: all .75s ease-in-out;
                        opacity: 1;
                    }

                    svg:hover, li:hover
                    {
                        opacity: 1;
                        transition: all .4s ease-in-out;
                        /* background-color: white; */
                        color: white;

                    }
                }
            }
        }
    }
`;

export default Menu
