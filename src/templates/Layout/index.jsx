import styled from "styled-components"
import SideBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;


const Layout = ({ isNavBarOpen, handleAccess, handleLogout }) => {
    return (
        <AppContainer>
            <SideBar isNavBarOpen={isNavBarOpen} handleAccess={handleAccess} handleLogout={handleLogout} />

            <MainContent>
                <Outlet />
            </MainContent>

            <Footer />
        </AppContainer>
    )
}

export default Layout