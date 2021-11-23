import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Navigation from "./Navigation";
import News from "./News/News";
import Notification from "./Notification";
import { Routes } from "react-router-dom";
import Home from "./Home/Home";
import People from "./People/People";
import Photos from "./Photos/Photos";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

const BodyComponent = styled.div`
  margin: 20px 20px 0 20px;
  display: flex;
  gap: 5%;
  justify-content: center;
  align-items: center;
  height: calc(100% - 90px);
`;
export default function Body() {
  return (
    <BodyComponent>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/people" element={<People />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      <Notification />
    </BodyComponent>
  );
}
