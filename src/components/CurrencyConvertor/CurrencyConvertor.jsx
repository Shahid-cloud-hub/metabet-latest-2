import React, { useState } from "react";
import { CurrencyConvertorContainer } from "./Currency.style";
import USDTImg from "../../assets/images/currencyConvertor/usdt.png";
import TruAiImg from "../../assets/images/currencyConvertor/truAi.png";
import SwapImg from "../../assets/images/currencyConvertor/swap.png";

const CurrencyConvertor = () => {
  const [fromCurrency, setFromCurrency] = useState("NFT");
  const [fromValue, setFromValue] = useState("");
  const [toCurrency, setToCurrency] = useState("TOKEN");
  const [toimg, setToImg] = useState(USDTImg);
  const [fromimg, setFromImg] = useState(TruAiImg);
  const [toValue, setToValue] = useState("");
  const [show, setShow] = useState(false);

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleFromImgChange(event) {
    setFromImg(event.target.value);
  }

  function handleFromValueChange(event) {
    setFromValue(event.target.value);
    setToValue(event.target.value * 2); // Assume 1 NFT = 0.2 TOKEN
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }
  function handleToImgChange(event) {
    setToImg(event.target.value);
    console.log("setToImg", setToImg);
  }

  function handleToValueChange(event) {
    setToValue(event.target.value);
    setFromValue(event.target.value / 2);
  }

  function handleSwap() {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setFromValue(toValue);
    setToValue(fromValue);
    setFromImg(toimg);
    setToImg(fromimg);
    setShow((prev) => !prev);
  }
  return (
    <CurrencyConvertorContainer>
      <div className="background">
        <div className="tabs">
          <div className="heading1">
            <span>Swap</span>
            <hr />
          </div>
          <div className="convert">
            <div className="truai">
              <label>
                From:
                <img
                  onChange={handleFromImgChange}
                  src={show ? TruAiImg : USDTImg}
                  alt={show ? "$TRU" : "USDT"}
                />
                <select
                  value={fromCurrency}
                  onChange={handleFromCurrencyChange}
                >
                  <option value="NFT">USDT</option>
                  <option value="TOKEN">$TRU</option>
                </select>
              </label>
              <input
                placeholder="$0.00"
                value={fromValue}
                onChange={handleFromValueChange}
              />
              <div className="text">
                <span id="grey">Balance: 25.00</span>
                <span id="blue">MAX</span>
              </div>
            </div>
            <img
              id="icon"
              src={SwapImg}
              alt="Convert icon"
              onClick={handleSwap}
            />
            <div className="truai">
              <div className="dropdown">
                <label>
                  To:{" "}
                  <img
                    onChange={handleToImgChange}
                    src={show ? USDTImg : TruAiImg}
                    alt={show ? "USDT" : "$TRU"}
                  />
                  <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="NFT">USDT</option>
                    <option value="TOKEN">$TRU</option>
                  </select>
                </label>
              </div>
              <input
                placeholder="$0.00"
                value={toValue}
                onChange={handleToValueChange}
              />
              <div className="text">
                <span id="grey">Balance: 00.00 </span>
                <span id="blue">MAX</span>
              </div>
            </div>
          </div>
          <button onClick={handleSwap}>Swap</button>
        </div>
      </div>
    </CurrencyConvertorContainer>
  );
};

export default CurrencyConvertor;
