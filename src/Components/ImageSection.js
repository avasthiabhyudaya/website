import React from 'react'
import styled from 'styled-components';
// import resume from '../images/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            {/* <div className="left-content">
                <img src={resume} alt="" />
            </div> */}
            <div className="right-content">
                    <h4>
                        I am <span>Abhyudaya Avasthi</span>
                    </h4>
                    <p className="paragraph">
                        Inquisitive, energetic Computer Science student skilled in leadership, with a strong foundation in math, programming logic, and cross- platform coding.Seeking to leverage solid development skills with a focus on collaboration, communication, passion and creativity as a
                        programmer.
                    </p>
                    <div className="about-info">
                        <div className="info-title">
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Location</p>
                            <p>Service</p>
                        </div>
                        <div className="info">
                            <p>21</p>
                            <p>Indian</p>
                            <p>Pune</p>
                            <p>Software Dev</p>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1iNPLd0ipUe6bXa9Fvsu6M4miTG-kpfkj/view?usp=sharing"><PrimaryButton title= {'VIEW CV'}/></a>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    @media screen and (max-width:1000px)
    {
      flex-direction: column;
      .left-content  
      {
        margin-bottom: 2rem;
      }
    }

    .left-content
    {
        padding-top: 2rem;
        width: 200%;
        height: 80vh;
        /* img
        {
            width: 90%;
            height: 100%;
            object-fit: cover;
        } */
    }
    .right-content
    {
        /* min-width: 590px; */

        @media screen and (max-width : 590px)
        {
            .about-info
            {padding:0;}
        }
        padding-top: 2rem;
        h4
        {
            font-size: 2rem;
            color: var(--white-color);
            span
            {
                font-size: 2rem;
            }
        }
        .paragraph
        {
            padding: 1rem 0;
        }

        .about-info
        {
            padding-bottom: 1.5rem;
            display: flex;
            min-width: 482px;

            .info-title
            {
                padding-right: 3rem;
                font-weight: 600;
            }

            .info-title, .info
            {
                p
                {
                    padding: 0.4rem 0;
                }
            }
        }
    }
`;

export default ImageSection
