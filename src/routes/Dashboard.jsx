import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Nav from "../Components/Nav/Nav";
import useBreakpoint from "../hooks/useBreakpoints";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect } from "react";
import PopUpModel from "../components/PopUpModel/PopUpModel";
import { Context } from "../Context";
import Confetti from "react-confetti";
import BalanceButtons from "../components/BalanceButtons/BalanceButtons";
import { isValidMnemonic } from "ethers/lib/utils";

const ContainerWrapper = styled("div")`
  position: relative;

  .popup-model {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: absolute;
  }
  .container {
    width: 100%;
    height: 100%;
  }

  .wrapper-main {
    position: relative;
    padding-left: 320px;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
  }

  .left-sidebar {
    position: fixed;
    top: 70px; /* the height of the header (60px) + its bottom margin (20px) */
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 343px;
    overflow: auto;
    padding: 0 0 20px;
    background: #0f212e;

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }
  }

  .main {
    background: ${(props) => props.bgColorVal};
    width: 100%;
    position: relative;
    flex-grow: 1;

    .main-wrapper-parent {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      .pie {
        display: flex;
        justify-content: center;
        background: #223542;
        border-radius: 8px;
        width: 100%;
        max-width: 630px;
        height: 400px;
        margin: 50px auto;
        filter: drop-shadow(0px 2.404px 2.404px rgba(0, 0, 0, 0.25));
      }
    }
  }

  .wrapper-main-body {
    position: relative;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 9;
    top: 75px;

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }
  }

  .active-popup {
    filter: blur(8px);
  }

  footer {
    grid-column: 1 / span 3;
  }

  @media screen and (max-width: 768px) {
    .left-sidebar {
      display: none;
    }
  }
`;

const Dashboard = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const { items } = useContext(Context);
  const [celebRemove] = useState(true);

  const availableWidth = window?.screen?.availWidth;

  return (
    <>
      <ContainerWrapper>
        {items?.betMessage ||
          (items?.airDropBetMessage && celebRemove && (
            <Confetti width={availableWidth} height={1200} gravity={0.77} />
          ))}
        <div
          className={
            items?.betMessage || items?.airDropBetMessage
              ? "container active-popup"
              : "container"
          }
        >
          <header>
            <Nav />
          </header>
          <div className="wrapper-main">
            {(isDesktop || isTablet) && (
              <div className="left-sidebar">
                <Sidebar />
              </div>
            )}
            <div className="wrapper-main-body">
              <div className="main" id="detail">
                {(isMobile || isSmallMobile) && <BalanceButtons />}
                <Outlet />
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        {items?.betMessage && (
          <div className="popup-model">
            <PopUpModel />
          </div>
        )}
        {items?.airDropBetMessage && (
          <div className="popup-model">
            <PopUpModel />
          </div>
        )}
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;
