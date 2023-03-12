import { useContext, useEffect, useState } from "react";
import "./Styles.css";
import Component from "../../assets/images/BNB.svg";
import ETH from "../../assets/images/ETH.png";
import WETH from "../../assets/images/WETH.svg";
import USDT from "../../assets/images/USDT.svg";
import BNB from "../../assets/images/BNB.svg";
import ETC from "../../assets/images/ETC.svg";
import MATIC from "../../assets/images/MATIC.svg";
import BUSD from "../../assets/images/BUSD.png";
import GOAL from "../../assets/images/GOAL.png";
import USDC from "../../assets/images/usdc.png";
import foxCircle from "../../assets/images/foxCircle.webp";
import foxMini from "../../assets/images/fox-mini.webp";
import Connect from "../../assets/images/Connect_btn.png";
import Disconnect from "../../assets/images/Disconnect.png";
import Withdraw from "../../assets/images/withdraw_btn.png";
import navFox from "../../assets/images/nav-fox.webp";
import openai from "../../assets/images/openai.webp";
import verified from "../../assets/images/verified.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  metaMaskConnection,
  metaMaskDisconnect,
} from "../../redux/walletConnect/walletConnectSlice";

import useBreakpoint from "../../hooks/useBreakpoints";
import truncateEthAddress from "truncate-eth-address";
import Utils from "../../utilities";
import { Context } from "../../Context";

function Dropdown() {
  const [selected, setSelected] = useState();
  const [Active, setIsActive] = useState(false);
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(null);
  const { isSmallMobile, isMobile, isTablet, isDesktop } = useBreakpoint();
  const { items } = useContext(Context);

  // const Address =
  //   metaMaskAddress.metaMaskAddress === null
  //     ? "0.0000"
  //     : metaMaskAddress.metaMaskAddress.toString();

  let walletAddress =
    metaMaskAddress.metaMaskAddress === null || undefined
      ? "0.0000"
      : truncateEthAddress(metaMaskAddress.metaMaskAddress.toString());

  useEffect(() => {
    if (metaMaskAddress.metaMaskAddress) {
      Utils.MetabetBalance(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          data === 0 ? setBalance(null) : setBalance(data);
          // console.log(data, "test");
        }
      );
    }
  }, [metaMaskAddress, balance, items?.getRender]);
  console.log("re-render", items?.getRender);
  if (metaMaskAddress.metaMaskAddress) {
    Utils.MetabetBalance(metaMaskAddress.metaMaskAddress.toString()).then(
      function (data) {
        data === 0 ? setBalance(null) : setBalance(data);
        console.log(data);
      }
    );
  }
  const options = [
    { name: "0.00000", img: ETH, text: "ETH" },
    { name: "0.00000", img: WETH, text: "WETH" },
    { name: "0.00000", img: USDT, text: "USDT" },
    { name: "0.00000", img: USDC, text: "USDC" },
    { name: "0.00000", img: BUSD, text: "BUSD" },
    { name: "0.00000", img: BNB, text: "BNB" },
    { name: "0.00000", img: ETC, text: "ETC" },
    { name: "0.00000", img: MATIC, text: "MATIC" },
    { name: "0.00000", img: GOAL, text: "GOAL" },
  ];
  options.map((item) => console.log(item));

  useEffect(() => {
    // console.log(metaMaskAddress, "metaMaskAddress");
  }, [metaMaskAddress]);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-ai">
          <div className="right-nav">
            <label>
              <input
                type="text"
                name="name"
                value={balance == null ? "0.00" : balance}
                disabled
              />
              <img src={foxCircle} alt="foxCircle" />
            </label>
            {!metaMaskAddress.metaMaskAddress ? (
              <label id="label-nav">
                <input type="text" name="name" placeholder="0.00" disabled />
                <img src={foxMini} alt="foxMini" />
              </label>
            ) : (
              <img src={Withdraw} alt="Withdraw" />
            )}
          </div>
        </div>
        <div className="dropdownBtn" onClick={() => setIsActive(!Active)}>
          <div className="Nav-Btn">
            <div className="Nav-text">
              {walletAddress ? walletAddress : "0.0000"}
              <img src={ETH} alt="ETH" />
            </div>
            <svg
              width="17"
              height="18"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4746_66667)">
                <path
                  d="M20.1138 6.41986L17.2769 3.58301L10.1138 10.7462L2.95062 3.58301L0.11377 6.41986L10.1138 16.4199L20.1138 6.41986Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4746_66667">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(20.1138 20) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
            {Active && (
              <div className="dropdownContent">
                {Object.values(options).map((option, index) => (
                  <div
                    onClick={() => setSelected(option)}
                    key={index}
                    className="dropdownItem"
                  >
                    {option.name?.slice(0, 10)}
                    <div>
                      <img src={option.img} alt="option.img" />
                      {option.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {!metaMaskAddress.metaMaskAddress ? (
            <div
              className="connect-btn"
              onClick={() => dispatch(metaMaskConnection())}
            >
              {isTablet || isDesktop ? (
                <img src={Connect} alt="Wallet-image" />
              ) : (
                <img src={navFox} alt="Wallet-image" />
              )}
            </div>
          ) : (
            <div
              className="connect-btn"
              onClick={() => dispatch(metaMaskDisconnect())}
            >
              {isTablet || isDesktop ? (
                <img src={Disconnect} alt="Wallet-img" />
              ) : (
                <img src={navFox} alt="Wallet-image" />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
