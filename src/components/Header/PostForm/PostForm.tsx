import { TextareaAutosize } from "@mui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaceIcon from "@mui/icons-material/Place";
import PublicIcon from "@mui/icons-material/Public";
import { textAlign } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";
import { Avatar } from "../../Body/News/PostItem";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachList from "./AttachList";

const Form = styled.form`
  width: 550px;
  min-height: 450px;
  background-color: white;
  border-radius: 30px;
  z-index: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FormHeader = styled.div`
  height: 30px;
  padding: 20px;
  border-bottom: 1px solid #616161;
  display: flex;
  align-items: center;

  .form--header--title {
    flex: 1;
    /* background-color: yellow; */
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .form--header--close {
    width: 30px;
    height: 30px;
    background-color: #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;

    :hover {
      color: #ffffff;
    }
  }
`;

const FormMain = styled.div`
  padding: 20px;
  /* background-color: cyan; */
  flex: 1;

  textarea {
    width: calc(100%);
    padding: 10px 0;
    outline: none;
    border: 0;
    font-size: 20px;
    resize: none;
    max-height: 340px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  height: 60px;
  margin-bottom: 10px;
`;
const UserStatus = styled.label`
  margin-left: 10px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 60px;
  /* background-color: #66b8ff; */

  .username {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 2px 3px;
    background-color: #dbdbdb;
    border-radius: 15px;
    cursor: pointer;

    :hover {
      color: white;
      background-color: #b9b8b8;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";
    }
    #stt {
      outline: none;
      border: 0;
      background-color: inherit;

      option {
        width: 100px;
        height: 30px;
        color: white;
        padding: 5px;
      }
    }
  }
`;
const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  /* background-color: cyan; */
  margin: 0 20px 20px 20px;
`;

const PostButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: #d1d1d1;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  transition: 0.2s;

  cursor: pointer;

  :hover {
    background-color: #a5a5a5;
    color: white;
  }
`;
interface PostFormProps {
  isDisplayPost: (isDisplay: boolean) => void;
}
interface Post {
  text: string;
  attach: string[];
  status: string;
}
export default function PostForm({ isDisplayPost }: PostFormProps) {
  const [post, setPost] = useState<Post>({
    text: "",
    attach: [],
    status: "public",
  });
  const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setPost({});

    console.log(post);
  };
  const handleAddEmoji = (emoji: any) =>{
    setPost({
      ...post, 
      text: post.text += emoji,
    })
  }

  console.log(post)  
  return (
    <Form onSubmit={handlePost}>
      <FormHeader>
        <div className="form--header--title">Create New Post</div>
        <div
          className="form--header--close"
          onClick={() => isDisplayPost(true)}
        >
          <CloseIcon />
        </div>
      </FormHeader>
      <FormMain>
        <UserInfo>
          <Avatar size="55px" radius="50%">
            <img
              src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
              alt=""
            />
          </Avatar>
          <UserStatus htmlFor="stt">
            <div className="username">Nhật Trường</div>
            <div className="status">
              <PublicIcon />
              <select
                name="status"
                id="stt"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setPost({ ...post, status: e.target.value })
                }
              >
                <option value="public">public</option>
                <option value="friends">friends</option>
                <option value="yourself">yourself</option>
              </select>
              <ArrowDropDownIcon />
            </div>
          </UserStatus>
        </UserInfo>
        <TextareaAutosize
          aria-label="minimum height"
          // minRows={3}
          maxRows={20}
          placeholder="Trường, What are you thinking of?..."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPost({ ...post, text: e.target.value })
          }
          value={post.text}   
        />
      </FormMain>
      <FormFooter>
        <AttachList onEmoji={handleAddEmoji}/>   
        <PostButton type="submit">Post</PostButton>
      </FormFooter>
    </Form>
  );
}
