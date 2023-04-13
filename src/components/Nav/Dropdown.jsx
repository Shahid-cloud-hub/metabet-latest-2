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
import foxCircle from "../../assets/images/foxCircle.svg";
import foxMini from "../../assets/images/fox-mini.webp";
import tru from "../../assets/images/tru.svg";
import navBet from "../../assets/images/navBet.svg";
import Connect from "../../assets/images/Connect.webp";
import Disconnect from "../../assets/images/Disconnect.webp";
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
import { BetStatusContainer } from "./Nav.styles";

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
  if (metaMaskAddress.metaMaskAddress) {
    Utils.MetabetBalance(metaMaskAddress.metaMaskAddress.toString()).then(
      function (data) {
        data === 0 ? setBalance(null) : setBalance(data);
        // console.log(data);
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

  useEffect(() => {
    // console.log(metaMaskAddress, "metaMaskAddress");
  }, [metaMaskAddress]);

  return (
    <BetStatusContainer>
      <div className="bet-status-container">
        {isDesktop && (
          <div className="bet-status-boxes">
            <label>
              <input
                type="text"
                name="name"
                value={balance == null ? "0.00" : balance}
                disabled
              />
              <img src={foxCircle} alt="foxCircle" />
            </label>
            <label>
              <input type="text" name="name" placeholder="0.00" disabled />
              <img id="label-nav" src={tru} alt="tru" />
            </label>
            <label>
              <input type="text" name="name" placeholder="0.00" disabled />
              <img src={navBet} alt="navBet" />
            </label>
          </div>
        )}
        {!metaMaskAddress.metaMaskAddress ? (
          <>
            <button onClick={() => dispatch(metaMaskConnection())}>
              Connect
            </button>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(metaMaskDisconnect())}>
              Disconnect
            </button>
          </>
        )}
      </div>
    </BetStatusContainer>
  );
}

export default Dropdown;
