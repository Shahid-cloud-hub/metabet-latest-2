import { useContext, React, useState, useEffect } from "react";
import { Container } from "./Nav.styles";
import Dropdown from "./Dropdown";
import LogoImg from "../../assets/images/Logo/LogoNew.svg";
import FoxImg from "../../assets/images/fox-halo-1.png";
import { NavLink } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakpoints";
import LeftSidebar from "../MobileComponents/LeftSidebar/LeftSidebar";
import logoAi from "../../assets/images/Ai-NFT/logoAi.png";
import { Context } from "../../Context";
import DropdownNFT from "./DropdownNFT";

const Header = (props) => {
  const pathname = window.location.pathname;
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();
  const { setItems } = useContext(Context);

  const callback = () => {
    setItems((prevState) => ({
      ...prevState,
      betMessage: false,
      airDropBetMessage: false,
      getRender: true,
    }));
  };

  return (
    <>
      <Container
        changeColor={isTablet || isMobile || isSmallMobile ? false : true}
        removeShadow={isTablet || isMobile || isSmallMobile ? false : true}
        removeWidth={isTablet || isMobile || isSmallMobile ? false : true}
        purpleBackground={pathname === "/ai-nft" ? "#130e19" : "#1b2c38"}
      >
        <div
          className={
            pathname === "/ai-nft" ? "background-purple" : "background"
          }
        >
          <NavLink to="/" onClick={callback}>
            {pathname === "/ai-nft" ? (
              <img
                src={isSmallMobile || isMobile || isTablet ? FoxImg : logoAi}
                alt=""
              />
            ) : (
              <img
                src={isSmallMobile || isMobile || isTablet ? FoxImg : LogoImg}
                alt=""
              />
            )}
          </NavLink>
        </div>
        {(isSmallMobile || isMobile || isTablet) && <Dropdown />}
        {isDesktop && (
          <div className="dropdown-section">
            {pathname === "/ai-nft" ? <DropdownNFT /> : <Dropdown />}
          </div>
        )}
        {(isSmallMobile || isMobile || isTablet) && <LeftSidebar {...props} />}
      </Container>
    </>
  );
};

export default Header;
