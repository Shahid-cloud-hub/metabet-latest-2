import React, { useContext, useEffect, useState } from "react";
import BUSD from "../../assets/images/BUSD.png";
import { Context } from "../../Context";
import Utils from "../../utilities";
import Loading from "../Loading/Loading";

const TradeAccordian = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [bets, setAllBets] = useState([]);
  const [odd, setOdd] = useState(0);
  const { items } = useContext(Context);

  useEffect(() => {
    Utils.AllBets(props.id).then(function (data) {
      setAllBets(data);
    });
  }, [props?.id, items?.getRender]);

  const arr = bets;

  const formatDate = (seconds) => {
    const s = new Date(seconds * 1000).toLocaleString("en-US");
    return s;
  };

  const checkOdd = (result, token) => {
    Utils.currentOdd(props?.id, result, token).then(function (data) {
      setOdd(Number(data));
    });
    return odd;
  };

  const RecentTradeData = [
    {
      id: 1,
      userID: 2,
      time: "02:10 PM",
      odds: "1.20",
      betAmount: "0.00", //"amount.toFixed(2)",
      icon3: BUSD,
      icon4: "https://bscscan.com/images/brandassets/BscScan-logo-circle.png",
      backgroundColor: "#223743",
      border: "8px",
    },
  ];

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        style={{ flexDirection: "column" }}
      >
        {arr.length === 0 ? (
          <span className="loading" style={{ height: "250px", color: "#fff" }}>
            No Bet Founded
          </span>
        ) : arr.length > 0 ? (
          Object.values(arr)
            ?.reverse()
            ?.map((item) => (
              <>
                <div
                  className="td-item"
                  style={{
                    background: item.backgroundColor,
                    borderRadius: item.border,
                  }}
                >
                  <div className="td-wrapper">
                    <div className="item_1">
                      <span>{String(item?.eventId).substring(20, -1)}</span>
                    </div>
                    <div className="item_2">
                      <span>{String(item?.user).substring(8, -1)}</span>
                      <span>{formatDate(Number(item.timestamp))}</span>
                      <span>
                        {checkOdd(item?.result, item?.token).toFixed(2)}
                      </span>
                      <div id="betAmount">
                        <span>{Number(item?.amount) / 1e18}</span>
                        <img src={item?.icon3} alt={item?.name} />
                      </div>
                      <div id="scan-icon">
                        <img
                          src={RecentTradeData[0].icon4}
                          alt="icon"
                          width={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
        ) : (
          <div className="loading">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeAccordian;
