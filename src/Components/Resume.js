import React from 'react'
import { InnerLayout } from '../styles/Layouts'
import styled from 'styled-components';
import Title from './Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    return (
            <ResumeStyled>
                    <Title title={'Resume'} span = {'Resume'}/>
                <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Education'}/>
                </div>
                    <div className="resume-content">
                        <ResumeItem year={'2018 - 2022'} title={'Computer Science and Communication Engineering'} subTitle={'Manipal Institute of Technology'} text={'Additional Activities: Manipal Info Sec Team (MIST) and Chess'}/>
                        <ResumeItem year={'2015 - 2017'} title={'Class XII'} subTitle={'Bharati Vidyapeeth English Medium School'} text={'Additional Activities: Football and MSTSE scholar'}/>
                        <ResumeItem year={'2003 - 2015'} title={'Class X'} subTitle={'Bishop\'s School, Camp'} text={'Additional Activities: Football and NTSE and IMO scholar'}/>
                    </div>

                    <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Work Experience'}/>
                </div>
                    <div className="resume-content work">
                        <ResumeItem year={'May-July 2021'} title={'Software Developer Intern'} subTitle={'Aqua Environmental Consultants'} text={'Worked on the Front End for their website and added SEO and handled User info requests'}/>
                        <ResumeItem year={'May-July 2019'} title={'FrontEnd Developer Intern'} subTitle={'Deustche Telekom'} text={' Worked with Client/Server Architecture, Activity Management etc'}/>
                    </div>                    
                </InnerLayout>
            </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title
    {
        padding-bottom: 2rem;
    }

    .resume-content
    {
        border-left: 2px solid var(--border-color);
        margin-bottom: 5rem;
    }
`;

export default Resume
