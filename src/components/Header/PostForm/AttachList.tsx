import CancelIcon from "@mui/icons-material/Cancel";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaceIcon from "@mui/icons-material/Place";
import styled from 'styled-components';
import React from "react";

const Attach = styled.div`
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(50% - 20px);
  /* background-color: yellow; */
  border-radius: 10px;
  border: 2px solid #c7c7c7;
  padding: 10px;
  position: relative;

  .attach--choose {
    width: fit-content;
    max-width: calc(63% - 10px);
    height: calc(130% - 10px);
    position: absolute;
    top: -25px;
    left: 10px;
    background-color: #474747;
    border-radius: 10px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 5px solid black;

    &--item {
      min-width: fit-content;
      height: 100%;
      background-color: #15ff00;
      border-radius: 5px;
      scroll-snap-align: start;
      position: relative;

      
      img, video{
        width: 100%;
        height: 100%;
        object-fit: contain;
        
      }
    }
    &--close{
      position: absolute;
      width: 20px;
      height: 20px;
      top: 2px;
      right: 2px;
      cursor: pointer;
      color: #0000005c;
      background-color: white;
      border-radius: 50%;
      font-size: 16px;
      
      &:hover{
        color: hsl(0, 79.1044776119403%, 73.72549019607844%);
      }
    }
  }
  .attach--choose::-webkit-scrollbar {
    display: none;
  }

  .attach--title {
    width: 40%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 600;
  }
  .attach--items {
    width: 55%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    &--item {
      cursor: pointer;
      transition: 0.3s;

      &:nth-child(1) {
        color: #00cc00;
      }
      &:nth-child(2) {
        color: #ffee00;
      }
      &:nth-child(3) {
        color: #0051ff;
      }
      &:nth-child(4) {
        color: #ff0000;
      }
      &:nth-child(5) {
        color: black;
      }
    }
    &--item:hover {
      margin-top: -5px;
    }
  }
`;

export default function AttachList() {
  return (
    <Attach>
      <div className="attach--title">Add to this post</div>
      <div className="attach--items">
        <div className="attach--items--item">
          <InsertPhotoIcon />
        </div>
        <div className="attach--items--item">
          <InsertEmoticonIcon />
        </div>
        <div className="attach--items--item">
          <LibraryMusicIcon />
        </div>
        <div className="attach--items--item">
          <PlaceIcon />
        </div>
        <div className="attach--items--item">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="attach--choose">
        <div className="attach--choose--item">
          <img
            src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
            alt=""
          />
          <CancelIcon className="attach--choose--close"></CancelIcon>
        </div>
        <div className="attach--choose--item">
          <img
            src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
            alt=""
          />
          <CancelIcon className="attach--choose--close"></CancelIcon>
        </div>
        <div className="attach--choose--item">
          <img
            src="https://1.bp.blogspot.com/-ggZGcpjEPr4/YE4tkzN2uOI/AAAAAAAA-EM/WoK2AuUfaEUnQLsS2j1IFpAdK29FkyHyACLcBGAsYHQ/s0/hoat-hinh-buon-nu%2B%252810%2529.jpg"
            alt=""
          />
          <CancelIcon className="attach--choose--close"></CancelIcon>
        </div>
      </div>
    </Attach>
  );
}
