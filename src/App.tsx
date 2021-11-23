import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Body from "./components/Body/Body";

const MainComponent = styled.div`
  font-family: "PT Sans", sans-serif;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;

  a{
    text-decoration: none;
  }
`;

function App() {
  return (
    <MainComponent>
      <Header />
      <Body />
    </MainComponent>
  );
}

export default App;
