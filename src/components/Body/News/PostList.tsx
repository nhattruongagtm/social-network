import React from 'react'
import styled from "styled-components"
import PostItem from './PostItem'
const List = styled.div`
    margin-top: 20px;
    height: fit-content;
    /* background-color: white; */
    padding: 20px 0px;
    border-radius: 10px;
`
export default function PostList() {
    return (
        <List>
            <PostItem/> 
            <PostItem/> 
        </List>
    )
}
