import React from "react";
import styled from "styled-components";

const Item = styled.div`
  min-width: 160px;
  height: 100%;
  background-color: #7700ff;
  scroll-snap-align: start;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;
const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Layer = styled.div`
  background-color: #0000001c;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`;
const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 3px solid white;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;
const Name = styled.div`
  color: white;
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 3;
  font-weight: bold;
  font-size: 13px;
`;

export default function DailyNewsItem() {
  return (
    <Item>
      <Image>
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
          alt=""
        />
      </Image>
      <Layer />
      <Avatar>
      <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
          alt=""
        />
      </Avatar>
      <Name>Sam Brown</Name>
    </Item>
  );
}
