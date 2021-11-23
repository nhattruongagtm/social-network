import React from "react";
import styled from "styled-components";

const primary = "#1877f2";

const Item = styled.div`
  min-width: 160px;
  height: 100%;
  background-color: #7700ff;
  scroll-snap-align: start;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
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
  bottom: 35px;
  left: 24px;
  z-index: 3;
  overflow: hidden;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(100%,-20%);
  cursor: pointer;

  ::after{
    content: "+";
    width: 26px;
    height: 26px;
    background-color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: ${primary};
  }

  

`;
const Name = styled.div`
  color: white;
  position: absolute;
  bottom: 10px;
  left: -10px;
  transform: translate(100%,-20%);
  z-index: 3;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

export default function AddNewsItem() {
  return (
    <Item>
      <Image>
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
          alt=""
        />
      </Image>
      <Layer />
      <Avatar/>
      <Name>
        Add Story
      </Name>
    </Item>
  );
}
