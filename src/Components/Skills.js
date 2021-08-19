import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ProgressBar from './ProgressBar'
import Title from './Title'

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'Skills'} span = {'Skills'}/>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar title={'PYTHON'} width={'70%'} text={'70%'}/>
                        <ProgressBar title={'D3 JS'} width={'70%'} text={'70%'}/>
                        <ProgressBar title={'CSS'} width={'70%'} text={'70%'}/>
                        <ProgressBar title={'C++'} width={'60%'} text={'60%'}/>
                        <ProgressBar title={'REACT JS'} width={'60%'} text={'60%'}/>
                        <ProgressBar title={'NODE JS'} width={'30%'} text={'30%'}/>
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`

    .skills
    {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;   
        grid-column-gap: 2rem;
        @media screen and (max-width:700px)
        {
            grid-template-columns: repeat(1, 1fr);
        }   
    }

`;

export default Skills
