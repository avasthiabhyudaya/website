import React from 'react'
import styled from 'styled-components';


function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    background-color: var(--primary-color);
    padding: 0.8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: All 0.4s ease-in-out;

    &::after
    {
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;        
        transition: All 0.4s ease-in-out;
        left: 0;
        bottom: 0;
    }

    &:hover::after
    {
        width: 100%;
        background-color: var(--white-color);
        opacity: 0.7;
    }
`;

export default PrimaryButton
