import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FormPostItem from "./FormPostItem";

const primary = "#1877f2";

const Item = styled.div`
  height: fit-content;
  /* background-color: blue; */
  padding-bottom: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;
const Header = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
interface AvatarProps {
  size: string;
  radius: string;
}
export const Avatar = styled.div<AvatarProps>`
  border-radius: ${(props) => props.radius};
  overflow: hidden;
  margin-right: 10px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  /* width: fit-content;
    height: fit-content; */
  display: flex;
  flex-direction: column;

  span {
    display: block;
  }

  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    font-size: 13px;
    color: gray;
  }
`;
const Menu = styled.div`
  cursor: pointer;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  transition: 0.3s;

  :hover {
    background-color: #ececec;
  }
`;
const Content = styled.div`
  line-height: 1.5;
`;
const File = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-top: 20px;
`;

const Image = styled.div`
  /* width: 400px; */
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Like = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width:100px;
  height: 50px;
  background-color: blue; */
`;
const LikeIcons = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #ffff10;

  div {
    font-size: 20px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 95px;
  }
  .funny,
  .like,
  .hungry,
  .heart {
    border-radius: 50%;
    background-color: #e9e9e9;
  }
  .funny {
    position: absolute;
    top: 0;
    left: 45px;
    z-index: 2;
  }
  .like {
    position: absolute;
    top: 0;
    z-index: 3;
    padding: 2px;
    left: 3px;
  }
  .heart {
    position: absolute;
    top: 0;
    left: 25px;
    z-index: 2;
  }
  .hungry {
    position: absolute;
    top: 0;
    left: 65px;
    z-index: 1;
  }
`;
const LikeCmtBar = styled.div`
  margin-top: 20px;
  height: 40px;
  /* background-color: gray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentNumber = styled.div`
  height: 30px;
  /* background-color: beige; */
  display: flex;
  justify-content: right;
  align-items: center;

  div:first-child {
    margin-right: 20px;
  }

  div {
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #b7b7b7;
  border-top: 1px solid #b7b7b7;
  margin-top: 10px;
  /* padding: 15px 0px; */

  .btn-like,
  .btn-share,
  .btn-cmt {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 45px;

    span {
      margin-left: 12px;
    }

    :hover {
      color: ${primary};
      background-color: #f1f1f1;
      height: 100%;
    }
  }
`;


const MainComments = styled.div`
  width: 88%;

  .comment--content {
    background-color: #eeeeee;
    border-radius: 20px;
    padding: 10px 15px;
    width: fit-content;
    font-size: 14px;
    line-height: 1.5;
    position: relative;
    .emoji {
      position: absolute;
      right: 5px;
      bottom: -18px;
      & > div > div {
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s;

        :hover{
          transform: translateY(-5px);
        }
      }
      span {
        margin-left: 5px;

      }

    }
  }
  .comment--info {
    width: fit-content;
    display: flex;
    justify-content: left;
    /* background-color: gray; */
    gap: 10px;
    margin-top: 2px;
    margin-left: 10px;
    font-weight: bold;
    color: gray;
    font-size: 13px;
    cursor: pointer;

    div:hover {
      text-decoration: underline;
    }
  }
`;
const LikeIconsComment = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #cccccc;
  padding: 2px 3px;
  border-radius: 10px;
`
const CommentItem = styled.div`
  height: fit-content;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 15px;

  textarea {
    border: 0;
    outline: none;
    background-color: #e9e9e9;
    border-radius: 30px;
    padding: 15px 20px;
    resize: none;

    ::disabled {
      background-color: black;
    }

    :focus {
      border: 0;
      outline: none;
    }
  }
`;

interface Comment {
  userID: string;
  content: string[];
  avatar: string;
  like: number;
  share: number;
  angry: number;
  heart: number;
  time: number;  
}
type CommentList = Comment[];

export default function PostItem() {
  const commentList: CommentList = [
    {
      userID: "123",
      content: [
        "Hôm nay tôi buồn một mình trên phố đông",
        "Nơi ánh đèn soi sáng long lanh",
        "Những gương mặt lạ lẫm",
        "Thương cho mối tình của tôi chẳng có vui",
      ],
      avatar:
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg",
      like: 12,
      share: 3,
      angry: 0,
      heart: 52,
      time: 1635950266228,
    },
    {
      userID: "123",
      content: ["Và theo tiếng yêu nơi phương trời xa"],
      avatar:
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg",
      like: 12,
      share: 3,
      angry: 0,
      heart: 0,
      time: 1635950266228,
    },
  ];
  return (
    <Item>
      <Header>
        <User>
          <Avatar size="35px" radius="5px">
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
              alt=""
            />
          </Avatar>
          <Info>
            <span>Sam Brown</span>
            <span>12 hours ago</span>
          </Info>
        </User>
        <Menu>
          <i className="fas fa-ellipsis-h"></i>
        </Menu>
      </Header>
      <Content>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.😋
        </div>
        <div>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.👋👋
        </div>
        <File>
          <Image>
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
              alt=""
            />
          </Image>
          <Image>
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
              alt=""
            />
          </Image>
          <Image>
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
              alt=""
            />
          </Image>
        </File>
      </Content>
      <LikeCmtBar>
        <Like>
          <LikeIcons>
            <div className="funny">😂</div>
            <div className="like">👊</div>
            <div className="heart">❤️</div>
            <div className="hungry">😡</div>
            <span>19</span>
          </LikeIcons>
        </Like>
        <CommentNumber>
          <div className="cmt-number">100 comments</div>
          <div className="share-number">4 shares</div>
        </CommentNumber>
      </LikeCmtBar>
      <Buttons>
        <div className="btn-like">
          <ThumbUpOutlinedIcon />
          <span>Like</span>
        </div>
        <div className="btn-cmt">
          <ModeCommentOutlinedIcon />
          <span>Comment</span>
        </div>
        <div className="btn-share">
          <ShareOutlinedIcon />
          <span>Share</span>
        </div>
      </Buttons>
      <FormPostItem/>
      {commentList.map((comment, index) => {
        return (
          <CommentItem key={index}>
            <Avatar size="45px" radius="50%">
              <img
                src={comment.avatar}
                alt={comment.avatar}
              />
            </Avatar>
            <MainComments>
              <div className="comment--content">
                {
                  comment.content.map((item,index)=>{
                    return (
                      <div key={index}>{item}</div>
                    ) 
                  })
                }
                <div className="emoji">
                  <LikeIconsComment>
                    <div className="funny">😂</div>
                    <div className="heart">❤️</div>
                    <span>19</span>
                  </LikeIconsComment>
                </div>
              </div>
              <div className="comment--info">
                <div className="like">Like</div>
                <div className="reply">Reply</div>
                <div className="share">Share</div>
                <div className="time">2 days</div>
              </div>
            </MainComments>
            <Menu>
              <i className="fas fa-ellipsis-h"></i>
            </Menu>
          </CommentItem>
        );
      })}
    </Item>
  );
}
