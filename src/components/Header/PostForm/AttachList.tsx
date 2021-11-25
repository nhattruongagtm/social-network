import CancelIcon from "@mui/icons-material/Cancel";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaceIcon from "@mui/icons-material/Place";
import styled from "styled-components";
import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { primary } from "../Header";

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
      background-color: white;
      border-radius: 5px;
      scroll-snap-align: start;
      position: relative;

      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &--close {
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

      &:hover {
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

interface Media {
  id: string;
  type: string;
}
interface AttachProps {
  onEmoji: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AttachList({ onEmoji }: AttachProps) {
  const [media, setMedia] = useState<Media[]>([]);
  const [isDisplayEmojiPicker, setIsDisplayEmojiPicker] = useState(false);
  const handleGetImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? e.target.files : null;
    if (files) {
      let urls = [];
      for (let i = 0; i < files.length; i++) {
        if (
          files[i].name.endsWith(".png") ||
          files[i].name.endsWith(".jpg") ||
          files[i].name.endsWith(".gif")
        ) {
          const file = new Blob([files[i]], { type: "image/png" });
          const url = URL.createObjectURL(file);
          urls.push({ id: url, type: "image" });
        }
      }
      setMedia([...media, ...urls]);
    }
  };
  const handleGetMedias = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? e.target.files : null;
    if (files) {
      let urls = [];
      for (let i = 0; i < files.length; i++) {
        if (
          files[i].name.endsWith(".mp4") ||
          files[i].name.endsWith(".wav") ||
          files[i].name.endsWith(".mp3")
        ) {
          const file = new Blob([files[i]], { type: "video/mp4" });
          const url = URL.createObjectURL(file);
          urls.push({ id: url, type: "video" });
        }
      }
      setMedia([...media, ...urls]);
    }
  };
  const handleAddEmoji = (
    e: React.MouseEvent<Element, MouseEvent>,
    emojiObject: any
  ) => {
    onEmoji(emojiObject.emoji);
  };
  const handleDeleteAttach = (index : number) =>{
      const newMedia = [...media].filter((item,ind)=>{return ind !== index});
      
      setMedia(newMedia);  
  }
  return (
    <Attach>
      <div className="attach--title"></div>
      <div className="attach--items">
        <label className="attach--items--item attach--imgs" htmlFor="file">
          <InsertPhotoIcon />
          <input
            type="file"
            id="file"
            hidden
            onChange={handleGetImages}
            multiple
          />
        </label>
        <div
          className="attach--items--item attach--emoji"
          onClick={() => setIsDisplayEmojiPicker(!isDisplayEmojiPicker)}
        >
          <InsertEmoticonIcon />
        </div>
        {isDisplayEmojiPicker && (
            <Picker
              onEmojiClick={handleAddEmoji}
              pickerStyle={{
                position: "absolute",
                left: "550px",
                bottom: "0px",
              }}
            ></Picker>
          )}
        <label className="attach--items--item attach--media" htmlFor="media">
          <LibraryMusicIcon />
          <input
            type="file"
            id="media"
            hidden
            onChange={handleGetMedias}
            multiple
          />
        </label>
        <div className="attach--items--item attach--location">
          <PlaceIcon />
        </div>
        <div className="attach--items--item attach--menu">
          <MoreHorizIcon />
        </div>
      </div>
      {media.length > 0 && (
        <div className="attach--choose">
          {media.map((item, index) => {
            return (
              <div className="attach--choose--item" key={index}>
                {item.type === "image" ? (
                  <img src={item.id} alt="" />
                ) : (
                  <video src={item.id} />
                )}
                <CancelIcon className="attach--choose--close" onClick={()=>handleDeleteAttach(index)}></CancelIcon>
              </div>
            );
          })}
        </div>
      )}
    </Attach>
  );
}
