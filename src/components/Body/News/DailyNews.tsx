import React from 'react'
import styled from 'styled-components'
import AddNewsItem from './AddNewsItem'
import DailyNewsItem from './DailyNewsItem'

const Scroll = styled.div`
    min-width: 100%;
    height: 220px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: white;

    &::-webkit-scrollbar{
       display: none;
    }
    &::-webkit-scrollbar-thumb{
        display: none;
    }
`
export default function DailyNews() {
    return (
        <Scroll>
            <AddNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
            <DailyNewsItem/>
        </Scroll>
    )
}
