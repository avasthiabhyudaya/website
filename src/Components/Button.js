import React from 'react'
import styled from 'styled-components';

function Button({filter, button}) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) => {
                    return <ButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}

const ButtonStyled = styled.button`
    cursor: pointer;
    transition: all .4s ease-in-out;
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: 0.4rem 2rem;
    font-size: inherit;
    margin-bottom: 0.6rem;
    color: var(--white-color);

    &:hover
    {
        background-color: var(--primary-color);
    }

    &:active
    {
        background-color: var(--background-light-color-2);
        transform: scale(0.95);
    }

    &:focus
    {
        background-color: var(--primary-color);
        transform: scale(0.95);
    }

    &:not(:last-child)
    {
        margin-right: .6rem;
    }
`;

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 2.5rem auto;
`;

export default Button
