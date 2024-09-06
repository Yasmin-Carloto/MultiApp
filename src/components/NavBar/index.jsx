import styled from "styled-components";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaSignOutAlt
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from 'usehooks-ts'

const NavBar = styled.div`
  background-color: #26272B;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0.5em 0 1em rgba(90, 90, 90, 0.3);
  z-index: 100;
  height: 85%;
  margin: 1em;
  border-radius: 1em;
  transition: 3s;
  padding: 1em;

  @media (max-width: 768px) {
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ $isopen }) => ($isopen ? "flex" : "none")};
  }
`;

const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 1.5em;
  right: 1.8em;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  padding: 0.8em;
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  gap: 1em;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3F3F46;
  }
`;

function SideBar({ handleLogout }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isSideBarOpen, setIsSideBarOpen] = useState(isMobile ? true : false)

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  }

  const toggleOpenSideBar = (sideBarStatus) => {
    if(isMobile){
      setIsSideBarOpen(true)
    }else{
      setIsSideBarOpen(sideBarStatus)
    }
  }

  return (
    <section>
      {isMobile && 
        <NavBarToggle>
          <FaBars color="#717BBC" onClick={toggleNavBar} size={25}/>
        </NavBarToggle>
      }
      <NavBar $isopen={isNavBarOpen} onMouseOver={() => toggleOpenSideBar(true)} onMouseLeave={() => toggleOpenSideBar(false)}>
        <div>
          <StyledLink to="/qrcode-generator">
            <FaQrcode />
            {isSideBarOpen && "QR Code Generator"}
          </StyledLink>
          <StyledLink to="/ip-address-finder">
            <FaNetworkWired />
            {isSideBarOpen && "IP Address Finder"}
          </StyledLink>
          <StyledLink to="/movie-search-engine">
            <FaSearch />
            {isSideBarOpen && "Movie Search"}
          </StyledLink>
          <StyledLink to="/todo-app">
            <FaTasks />
            {isSideBarOpen && "Todo App"}
          </StyledLink>
          <StyledLink to="/quiz-app">
            <FaRegQuestionCircle />
            {isSideBarOpen && "Quiz App"}
          </StyledLink>
          <StyledLink to="/language-translator">
            <FaGlobeAmericas />
            {isSideBarOpen && "Translator"}
          </StyledLink>
        </div>
        
        <StyledLink 
          onClick={handleLogout}>
          <FaSignOutAlt />
          {isSideBarOpen && "Logout"}
        </StyledLink>
      </NavBar>
    </section>
  );
}

export default SideBar;
