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
        />
      </FormMain>
      <FormFooter>
        
        <PostButton type="submit">Post</PostButton>
      </FormFooter>
    </Form>
  );
}
