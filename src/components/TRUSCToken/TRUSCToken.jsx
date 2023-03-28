import React, { useState } from "react";
import { TRUSCTokenContainer, Container1, Balance } from "./TRUSCToken.styles";
import Trueai from "../../assets/images/TRUSC/Trueai.webp";
import trusc from "../../assets/images/TRUSC/trusc.webp";
import TransferBtn from "../../assets/images/TRUSC/Transfer-btn.webp";
import WithdrawBtn from "../../assets/images/TRUSC/Withdraw-btn.webp";
import { TruscData, TruscData1 } from "../../JasonData/FeaturedBannerData";
import TruscTab from "./TruscTab/TruscTab";
import Tether from "../../assets/images/TRUSC/Tether.webp";
import USDC from "../../assets/images/TRUSC/USDC.webp";
import BUSD from "../../assets/images/TRUSC/BUSD.webp";
import liquidityFox from "../../assets/images/TRUSC/liquidityFox.webp";
import foxmini from "../../assets/images/TRUSC/fox-mini.webp";
import usdt from "../../assets/images/TRUSC/usdt-mini.webp";
import busd from "../../assets/images/TRUSC/busd-mini.webp";
import usdc from "../../assets/images/TRUSC/usdc-mini.webp";
import icon from "../../assets/images/TRUSC/switch.png";
import TruscBet from "../../assets/images/TRUSC/TruscBet.png";
import bet from "../../assets/images/TRUSC/bet.png";
import bnb from "../../assets/images/TRUSC/bnb.png";
import eth from "../../assets/images/TRUSC/eth.png";
import shib from "../../assets/images/TRUSC/shib.png";
import matic from "../../assets/images/TRUSC/matic.png";
import btc from "../../assets/images/TRUSC/btc.png";
import dot from "../../assets/images/TRUSC/dot.png";
import CoinMarketCap from "../../assets/images/TRUSC/CoinMarketCap.png";

const TRUSCToken = () => {
  const [Active, setIsActive] = useState(false);
  const [Active1, setIsActive1] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const [selectedCurrency1, setSelectedCurrency1] = useState("USD");
  const handleCurrencyChange1 = (event) => {
    setSelectedCurrency1(event.target.value);
  };
  const options = [
    { value: "BET", text: "$BET", img: bet },
    { value: "BUSD", text: "BUSD", img: busd },
    { value: "BNB", text: "BNB", img: bnb },
    { value: "ETH", text: "ETH", img: eth },
    { value: "TRU", text: "$TRU", img: usdc },
    { value: "USDT", text: "USDT", img: usdt },
    { value: "MATIC", text: "MATIC", img: matic },
    { value: "BTC", text: "BTC", img: btc },
    { value: "DOT", text: "DOT", img: dot },
  ];
  return (
    <TRUSCTokenContainer>
      <Container1>
        <div className="heading">
          <span>Liquidity Pools</span>
          <hr />
        </div>
        <div className="balance">
          <div className="icon">
            <img src={Tether} al="Tether" />
            <span>$100,000.00</span>
          </div>
          <div className="icon">
            <img src={BUSD} al="BUSD" />
            <span>$25,000.00</span>
          </div>
          {/* <div className="icon">
            <img src={TruscBet} al="TruscBet" />
            <span>$125,000.00</span>
          </div> */}
          <div className="icon">
            <img src={liquidityFox} al="liquidityFox" />
            <div className="textspan">
              <span id="blue">TOTAL:</span>
              <span>$125,000.00</span>
            </div>
          </div>
        </div>
      </Container1>
      <Balance>
        <div className="liquidity-pool">
          <img src={liquidityFox} al="liquidityFox" />

          <div className="fox-stats">
            {TruscData?.map((item) => (
              <div className="text">
                <span id="title">{item.title}</span>
                <input type="text" placeholder={item.placeholder} disabled />
              </div>
            ))}
            <div className="text1">
              <span id="title">ACTIVE BETS</span>
              <input type="text" placeholder="0" disabled />
            </div>
          </div>
        </div>
      </Balance>
      <Container1>
        <div className="heading1">
          <span>Swap</span>
          <hr />
        </div>
        <div className="convert">
          <div className="truai">
            <label onClick={() => setIsActive1(!Active1)}>
              From:
              <img src={foxmini} />
              <input
                placeholder="TRUSC"
                style={{ cursor: "pointer" }}
                disabled
              />
            </label>{" "}
            {Active1 && (
              <div className="select1">
                {" "}
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
            <span>00.00</span>
            <div className="text">
              <span id="grey">Balance: 25.00</span>
              <span id="blue">MAX</span>
            </div>
          </div>
          <img id="icon" src={icon} alt="icon" />
          <div className="truai">
            <div className="dropdown">
              <label onClick={() => setIsActive(!Active)}>
                To: <img src={usdt} />
                <input
                  placeholder="USDT"
                  style={{ cursor: "pointer" }}
                  disabled
                />
              </label>
              {Active && (
                <div className="select">
                  {" "}
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
            <span>00.00</span>
            <div className="text">
              <span id="grey">Balance: 25.00</span>
              <span id="blue">MAX</span>
            </div>
          </div>
        </div>
        <button>Swap</button>
      </Container1>
      <Balance>
        <div className="liquidity-pool1">
          <div className="images">
            <img src={TruscBet} al="TruscBet" />
            <div className="fox-stats">
              {TruscData1?.map((item) => (
                <div className="text">
                  <span id="title">{item.title}</span>
                  <input type="text" placeholder={item.placeholder} disabled />
                </div>
              ))}
              <div className="text2">
                <span id="title">ACTIVE BETS</span>
                <input type="text" placeholder="0" disabled />
              </div>
            </div>
          </div>
          <img id="coin" src={CoinMarketCap} al="CoinMarketCap" />
        </div>
      </Balance>
    </TRUSCTokenContainer>
  );
};

export default TRUSCToken;
