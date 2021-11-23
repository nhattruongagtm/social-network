import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const primary = "#1877f2";

const Main = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > div {
    -webkit-box-shadow: 0px 8px 15px -12px rgba(0, 0, 0, 0.22);
    box-shadow: 0px 8px 15px -12px rgba(0, 0, 0, 0.22);
  }
`;
const Header = styled.div`
  height: 13%;
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const Body = styled.div`
  height: fit-content;
  background-color: white;
  border-radius: 12px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .active > div{
    color: ${primary};
    border-left: 4px solid ${primary};
  }
  .active > div .title{
    color: ${primary};
  }

`;
const Footer = styled.div`
  height: calc(25% - 55px);
  background-color: white;
  border-radius: 12px;
`;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  overflow: hidden;
  font-size: 15px;
  gap: 5px;

  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    font-size: 14px;
  }
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #516375dd;
  text-decoration: none;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  /* background-color: #e2f2ff; */
  padding: 0 20px;
  cursor: pointer;
  /* border-left: 4px solid ${primary}; */
  border-left: 4px solid white;
  color: #647990a4;
  text-decoration: none;
  

  i {
    font-size: 22px;
    margin-right: 5px;
  }
`;

interface INavs {
  icon: string;
  title: string;
  path: string;
}

export default function Navigation() {
  const navs: INavs[] = [
    {
      icon: "fas fa-home",
      title: "Home",
      path: "/",
    }, 
    {
      icon: "fas fa-universal-access",
      title: "People",
      path: "/people",
    },
    {
      icon: "far fa-id-card",
      title: "News Feed",
      path: "/news",
    },
    {
      icon: "fas fa-images",
      title: "Photos",
      path: "/photos",
    },
    {
      icon: "fas fa-user-circle",
      title: "Profile",
      path: "/profile",
    },
    {
      icon: "fas fa-cog",
      title: "Settings",
      path: "/settings",
    },
  ];
  return (
    <Main>
      <Header>
        <Avatar>
          <img
            src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
            alt=""
          />
        </Avatar>
        <Info>
          <span>Nhật Trường</span>
          <span>@nhattruongagtm</span>
        </Info>
      </Header>
      <Body>
        {navs.map((nav, index) => {
          return (
            <NavLink to={nav.path}>
              <NavItem key={index}>
                <i className={nav.icon}></i>
                <Title className="title">{nav.title}</Title>
              </NavItem>
            </NavLink>
          );
        })}
      </Body>
      <Footer></Footer>
    </Main>
  );
}
