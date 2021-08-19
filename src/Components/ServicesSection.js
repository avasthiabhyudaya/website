import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts'
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg';
import gamedev from '../images/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Interests'} span={'Interests'}/>
                <div className="services">
                    <ServiceCard image={design} title={'Web Dev & Design'} paragraph={'creating simple yet useful applications with soothing interfaces.'}/>
                    <div className="mid-card">
                        <ServiceCard image={intelligence} title={'Artificial Intelligence'} paragraph={'Finance based Applications and analysis of raw data mostly using Python.'}/>
                    </div>
                    <ServiceCard image={gamedev} title={'Game Development'} paragraph={'You\'re always just getting started with Unity.'}/>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services
    {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;

        @media screen and (max-width:1000px)
        {
            flex-direction: column;
            .mid-card
            {
                margin: 2rem 0;
            }
        }
        @media screen and (max-width:1015px)
        {
            grid-template-columns: repeat(2, 1fr);

            .mid-card
            {
                margin: 0;
            }
        }        
        @media screen and (max-width:650px)
        {
            grid-template-columns: repeat(1, 1fr);

            .mid-card
            {
                margin: 0;
            }
        }                

        .mid-card
        {
        }
    }
`;

export default ServicesSection