import React from "react";
import styled from "styled-components";
import { Avatar } from "./News/PostItem";

const primary = "#1877f2";

const Main = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: white; */
`;
const RequestList = styled.div``;
const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 25px;
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 10px;

  strong {
    color: gray;
  }

  .request--number {
    background-color: ${primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-weight: bold;
  }
`;
interface BoxShadowProps {
  type: boolean;
}
export const BoxShadow = styled.div<BoxShadowProps>`
  -webkit-box-shadow: ${(props) =>
    props.type ? "0px 8px 15px -12px rgba(0, 0, 0, 0.22)" : "0"};
  box-shadow: ${(props) =>
    props.type ? "0px 8px 15px -12px rgba(0, 0, 0, 0.22)" : "0"};
`;
const RequestItem = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 15px;
  .request--info {
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    line-height: 1.5;
    margin-bottom: 15px;
    width: 100%;

    &--title {
      flex: 1;
      font-size: 14px;
    }
  }
  .request--btns {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
interface ButtonProps {
  type: string;
}
const Button = styled.div<ButtonProps>`
  color: ${(props) => (props.type === "primary" ? "white" : "black")};
  background-color: ${(props) =>
    props.type === "primary" ? `${primary}` : "white"};
  font-weight: bold;
  height: 35px;
  width: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  font-size: 14px;
  transition: .3s;

  :hover{
    opacity: 0.8;
  }
`;

export default function Notification() {
  return (
    <Main>
      <RequestList>
        <RequestHeader>
          <strong>requests</strong>
          <div className="request--number">2</div>
        </RequestHeader>
        <BoxShadow type={true}>
          <RequestItem>
            <div className="request--info">
              <Avatar size="35px" radius="10px">
                <img
                  src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
                  alt=""
                />
              </Avatar>
              <div className="request--info--title">
                <strong>Tyrell Barrows</strong> wants to add you to friends
              </div>
            </div>
            <div className="request--btns">
              <Button type="primary">Accept</Button>
              <Button type="none">Decline</Button>
            </div>
          </RequestItem>
        </BoxShadow>
        <BoxShadow type={true}>
          <RequestItem>
            <div className="request--info">
              <Avatar size="35px" radius="10px">
                <img
                  src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
                  alt=""
                />
              </Avatar>
              <div className="request--info--title">
                <strong>Tyrell Barrows</strong> wants to add you to friends
              </div>
            </div>
            <div className="request--btns">
              <Button type="primary">Accept</Button>
              <Button type="none">Decline</Button>
            </div>
          </RequestItem>
        </BoxShadow>
      </RequestList>
    
      </Main>
  );
}
