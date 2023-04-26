import React, { useState } from "react";
import StatdropdownActive from "../../components/Stats4/StatdropdownActive";

import BNB_Icon from "../../assets/images/small_currency_icons/icon_1.webp";
import ETH_Icon from "../../assets/images/small_currency_icons/icon_2.webp";
import USDT_Icon from "../../assets/images/small_currency_icons/icon_3.webp";
import USDC_Icon from "../../assets/images/small_currency_icons/icon_4.webp";
import BUSD_Icon from "../../assets/images/small_currency_icons/icon_5.webp";
import TRUSC_Icon from "../../assets/images/small_currency_icons/icon_6.webp";
import GOAL_Icon from "../../assets/images/small_currency_icons/icon_8.webp";
import METABET_Icon from "../../assets/images/small_currency_icons/icon_9.webp";

import {
  ZERO_ADDRESS,
  GOAL_ADDRESS,
  BUSD_ADDRESS,
  METABET_ADDRESS,
} from "../../constants";

const Accordian = (props) => {
  const pathname = window.location.pathname;
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState(false);
  const [addStyle, setAddStyle] = useState();
  const [callBets, setCallBets] = useState();
  const [callPool, setCallPool] = useState();
  console.log("parent", callBets);
  console.log("parent", callPool);
  const callbackbets = (callbets) => {
    setCallBets(callbets);
  };
  const callbackpool = (callpool) => {
    setCallPool(callpool);
  };

  let FifaTableData = [
    {
      id: 1,
      name: "GOAL",
      poolCricket: "0.0000",
      img: GOAL_Icon,
      amount: "Amount",
      win: "Possible Win:",
      odds: "Odds",
      display_none: "none",
      token: GOAL_ADDRESS,
    },
    {
      id: 2,
      name: "BNB",
      poolCricket: "0.0000",
      img: BNB_Icon,
      amount: "Amount",
      win: "Possible WIN:",
      odds: "Odds",
      token: ZERO_ADDRESS,
    },
    {
      id: 3,
      name: "ETH",
      poolCricket: "0.0000",
      img: ETH_Icon,
      amount: "Amount",
      win: "Possible WIN:",
      odds: "Odds",
      token: ZERO_ADDRESS,
    },
    {
      id: 4,
      name: "USDT",
      poolCricket: "0.0000",
      img: USDT_Icon,
      amount: "Amount",
      win: "Possible WIN:",
      odds: "Odds",
      token: ZERO_ADDRESS,
    },
    {
      id: 5,
      name: "USDC",
      poolCricket: "0.0000",
      img: USDC_Icon,
      amount: "Amount",
      win: "Possible WIN:",
      odds: "Odds",
      token: ZERO_ADDRESS,
    },
    {
      id: 6,
      name: "BUSD",
      poolCricket: "0.0000",
      img: BUSD_Icon,
      amount: "Enter Amount",
      win: "Possible WIN:",
      odds: "Odds",
      token: BUSD_ADDRESS,
    },
    {
      id: 7,
      name: "TRUSC",
      poolCricket: "0.0000",
      img: TRUSC_Icon,
      amount: "Enter Amount",
      win: "Possible WIN:",
      odds: "Odds",
      token: BUSD_ADDRESS,
    },
    // {
    //   id: 8,
    //   name: "TRUEAI",
    //   poolCricket: "0.0000",
    //   img: TRUEAI_Icon,
    //   amount: "Enter Amount",
    //   win: "Possible WIN",
    //   token: BUSD_ADDRESS,
    // },
    {
      id: 8,
      name: "METABET",
      poolCricket: "0.0000",
      img: METABET_Icon,
      amount: "Enter Amount",
      odds: "Odds",
      win: "Possible WIN:",
      token: METABET_ADDRESS,
    },
  ];

  // console.log("first", props.id);

  return (
    <div className="accordion-wrapper">
      <div className={`accordion-title ${isOpen ? "open" : ""}`}>
        {FifaTableData.map((item) => (
          <>
            <div
              className={
                item.id === 1 ||
                item.id === 3 ||
                item.id === 4 ||
                item.id === 5 ||
                (item.id === 7 &&
                  (pathname === "/Ethereum" ||
                    pathname === "/Bitcoin" ||
                    pathname === "/politics-details" ||
                    pathname === "/UFC-Events" ||
                    pathname === "/Cricket-Event" ||
                    pathname === "/dxy"))
                  ? "hide"
                  : `Head Head-${item.id}` && pathname === "/football-stats"
                  ? "Head"
                  : `Head Head-${item.id}`
              }
              style={isOpen ? { borderRadius: "8px" } : {}}
            >
              <div className={`Hwrapper`}>
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>

              <div className="item changeItem">
                <span>{item?.id === 8 && callPool ? callPool : 0.0}</span>
                <span>{item?.id === 8 && callBets ? callBets : 0.0}</span>
                <button
                  disabled={
                    !props.eventStatus || props.bitAndEth == false
                      ? false
                      : true
                  }
                  onClick={() => {
                    setOpen(!isOpen);
                    setShowAccord(item.id);
                    setAddStyle(item.id);
                  }}
                  style={
                    item.id === addStyle
                      ? { background: "#fc4c1e" }
                      : { background: "#7b7b7b" }
                  }
                >
                  {!props.eventStatus || props.bitAndEth == false
                    ? "Bet Now"
                    : "Event Ended"}
                </button>
              </div>
            </div>
            {item.id === showAccord && (
              <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                  <StatdropdownActive
                    id={props.id}
                    betWinId={props.winBtn}
                    token={item.token}
                    img={item.img}
                    amount={item.amount}
                    name={item.name}
                    win={item.win}
                    odds={item.odds}
                    callbackbets={callbackbets}
                    callbackpool={callbackpool}
                  />
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
