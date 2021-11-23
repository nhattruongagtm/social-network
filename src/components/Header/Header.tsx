import React, { useState } from "react";
import styled from "styled-components";
import PostForm from "./PostForm/PostForm";

export const primary = "#1877f2";

const HeaderComponent = styled.div`
  height: 45px;
  background-color: white;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  position: relative;
`;
const LogoName = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;
const Logo = styled.div`
  width: 10px;
  height: 10px;
  background-color: #dfebff;
  margin-right: 10px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  i {
    font-size: 28px;
    color: ${primary};
  }
`;
const SearchBar = styled.div`
  width: 35%;
  display: flex;
  height: 40px;
  justify-content: right;
  gap: 15px;

  div {
    border-radius: 10px;
  }
`;
const SearchInput = styled.div`
  width: 60%;
  background-color: #ebedf3;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  color: #919ba7;

  i {
    margin-right: 5px;
  }
  input {
    width: 100%;
    padding: 0 10px;
    outline: none;
    border: 0;
    background-color: inherit;
    font-size: 15px;
    color: #919ba7;
    font-weight: bold;
  }
  input:focus {
    outline: none;
    border: 0;
    color: #919ba7;
  }
`;
const CreateButton = styled.div`
  width: 20%;
  background-color: ${primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2383ff;
  }

  i {
    margin-right: 5px;
    font-size: 20px;
  }
`;
const UserButton = styled.div`
  width: 40px;
  background-color: ${primary};
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000097;
`;
export default function Header() {
  const [isDisplayPostForm,setIsDisplayPostForm] = useState(false);


  return (
    <HeaderComponent>
      <LogoName>
        <Logo>
          <i className="fab fa-viadeo"></i>
        </Logo>
        <span>Meta</span>
      </LogoName>
      <SearchBar>
        <SearchInput>
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </SearchInput>
        <CreateButton onClick={() => setIsDisplayPostForm(true)}>
          <i className="far fa-plus-square"></i>
          <span>Create</span>
        </CreateButton>
        <UserButton>
          <img
            src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
            alt=""
          />
        </UserButton>
      </SearchBar>
      {isDisplayPostForm && (
        <Layer>
        <PostForm isDisplayPost={()=>setIsDisplayPostForm(false)}/>  
      </Layer>
      )}
    </HeaderComponent>
  );
}
