import React from 'react'
import styled from 'styled-components'

function ContactItem({icon, title, contact1}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p> 
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    margin-top: 3rem;
    background-color: var(--background-dark-color-grey);
    display: flex;
    align-items: center;

    &:not(:last-child)
    {
        margin-bottom: 2rem;
    }

    .left-content
    {
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;

        svg
        {
            font-size: 2.3rem;
        }
    }

    .right-content
    {

        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: .6rem;
        word-break: break-all;
        
        p
        {
            padding: 0.1rem 0;
        }
    
    }
`

export default ContactItem
