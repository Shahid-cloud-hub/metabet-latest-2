import { useContext, useEffect, useState } from "react";
import "./Styles.css";
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
import tru from "../../assets/images/tru.svg";
import trubet from "../../assets/images/Ai-NFT/trubet.png";
import dollar from "../../assets/images/Ai-NFT/dollar.png";
import trolly from "../../assets/images/Ai-NFT/trolly.png";
import navBet from "../../assets/images/navBet.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  metaMaskConnection,
  metaMaskDisconnect,
} from "../../redux/walletConnect/walletConnectSlice";

import useBreakpoint from "../../hooks/useBreakpoints";
import truncateEthAddress from "truncate-eth-address";
import Utils from "../../utilities";
import { Context } from "../../Context";

const DropdownNFT = () => {
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
    <>
      <div className="dropdown">
        {isDesktop && (
          <div className="dropdown-ai">
            <div className="right-nav-nft">
              <label>
                <span>NFT Circ Supply</span>
                <input
                  type="text"
                  name="name"
                  value={balance == null ? "0.00" : balance}
                  disabled
                />
              </label>
              <label>
                <span>Market Cap</span>
                <input type="text" name="name" placeholder="$0.00" disabled />
              </label>
              <label>
                <img src={trubet} alt="trubet" />
                <input type="text" name="name" placeholder="$0.00" disabled />
              </label>
            </div>
            <div className="dollar">
              <img src={dollar} alt="dollar" />
              <div className="dollar-text">
                <input type="text" name="name" placeholder="$0.00" disabled />
                <span>Total fees Earnt</span>
              </div>
            </div>
          </div>
        )}
        <div className="dropdownBtn">
          <img src={trolly} alt="trolly" />
          {!metaMaskAddress.metaMaskAddress ? (
            <div
              className="connect-btn-nft"
              onClick={() => dispatch(metaMaskConnection())}
            >
              <button>Connect</button>
            </div>
          ) : (
            <div
              className="connect-btn-nft"
              onClick={() => dispatch(metaMaskDisconnect())}
            >
              <button>Disconnect</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownNFT;