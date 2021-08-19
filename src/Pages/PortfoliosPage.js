import React from 'react'
// import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import portfolios from '../Data/portfolios';
import Menu from '../Components/Menu'; 
import { useState } from 'react';
import Button from '../Components/Button';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All')
        {
            setMenuItems(portfolios)
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData)
    }
    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'}/>
            <InnerLayout>
                <Button filter={filter} button={button}/>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
