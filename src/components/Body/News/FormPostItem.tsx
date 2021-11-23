import { TextareaAutosize } from "@mui/core";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import GifIcon from "@mui/icons-material/Gif";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import styled from "styled-components";
// import { primary } from "../../Header/Header";
import { Avatar } from "./PostItem";

const primary = "#1877f2";  
const CommentFrame = styled.div`
  margin: 20px 0px;
  display: flex;
  /* max-height: 250px; */
  position: relative;  
  align-items: flex-start;  

  textarea {
    border: 0;
    outline: none;
    background-color: #e9e9e9;
    border-radius: 30px;
    padding: 15px 20px;
    width: calc(100% - 40px);
    resize: none;

    :focus {
      border: 0;
      outline: none;
    }
  }
`;
const CommentMain = styled.div`
  flex: 1;
  background-color: #ebebeb;
  border-radius: 30px;
  height: fit-content;
`;
const Attachs = styled.div`
  /* position: absolute;
  right: 5px;
  bottom: 5px; */

  background-color: #e9e9e9;
  /* background-color: blue; */
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  padding: 3px;
  border-radius: 10px;
`;
interface AttachIconProps {
  size: string;
}
const AttachIcon = styled.div<AttachIconProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 50%;
  cursor: pointer;

  :hover {
  }
`;
const SendButton = styled.button`
  border: 0;
  outline: none;
  width: 35px;
  height: 35px;
  background-color: ${primary};
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

interface Input {
  content: string[];
  attachs: string[];
}
export default function FormPostItem() {
  const [inputs, setInputs] = useState<Input>({
    content: [],
    attachs: [],
  });
  return (
    <form>
      <CommentFrame>
        <Avatar size="45px" radius="50%">
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
            alt=""
          />
        </Avatar>
        <CommentMain>
          <TextareaAutosize
            aria-label="minimum height"
            // minRows={3}
            placeholder="Viết bình luận công khai..."
            // onChange={()=>setInputs()}
          />
          <Attachs>
            <AttachIcon size="30px">
              <AttachFileIcon></AttachFileIcon>
            </AttachIcon>
            <AttachIcon size="30px">
              <CameraAltIcon></CameraAltIcon>
            </AttachIcon>
            <AttachIcon size="30px">
              <GifIcon></GifIcon>
            </AttachIcon>
            <AttachIcon size="30px">
              <ChildCareIcon></ChildCareIcon>
            </AttachIcon>
            <SendButton>
              <SendIcon></SendIcon>
            </SendButton>
          </Attachs>
        </CommentMain>
      </CommentFrame>
    </form>
  );
}
