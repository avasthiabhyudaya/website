import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts'
import styled from 'styled-components'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import { useState } from 'react';
import { db } from '../Components/Firebase';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            Email:Email,
            subject:subject,
            message:message,
        })
        .then(() => {
            alert("Thanks for your response 👍")
        })
        .catch(error => {
            alert(error.message)
        })

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}></Title>
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-field">
                                    <label htmlFor="name">Enter your name* </label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter your email-id* </label>
                                <input type="email" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="subject">Subject* </label>
                                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                            </div>         
                            <div className="form-field">
                                <label htmlFor="">Enter Your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10" value={message}onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton type="button" title={'Send Email'}/>
                            </div>                                       
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone:'} icon={phone} contact1={'+919518374624'}/>
                        <ContactItem title={'Email:'} icon={email} contact1={'avasthiabhyudaya@gmail.com'}/>
                        <ContactItem title={'Location:'} icon={location} contact1={'Pune'}/>
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section
    {
        display: flex;
        flex-direction: column;
        /* background-color: var(--background-dark-color-grey); */
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem; 

        .contact-title
        {
            h4
            {
                color: white;
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }

        .form
        {
            width: 100%;

            .form-field
            {
                margin-top: 2rem;
                position: relative;
                width: 100%;

                label
                {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 0.5rem;
                }

                input
                {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }

                textarea
                {
                    outline:none;
                    background: transparent;
                    border: 1px solid var(--border-color);
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    resize: none;
                }
            }
        }
    }

`;

export default ContactPage
