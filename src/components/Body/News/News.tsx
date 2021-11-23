import React from "react";
import styled from "styled-components";
import DailyNews from "./DailyNews";
import PostList from "./PostList";

const Main = styled.div`
  max-width: 50%;
  /* width: 60%; */
  height: 100%;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;
const ScrollContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;

    ::-webkit-scrollbar{
        display: none;
    }
`;


export default function News() {
  return (
    <Main>
      <ScrollContainer>
        <DailyNews/>
        <PostList/>
      </ScrollContainer>
    </Main>
  );
}
