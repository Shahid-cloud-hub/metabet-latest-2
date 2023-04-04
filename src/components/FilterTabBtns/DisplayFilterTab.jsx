import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Utils from "../../utilities";
import { ContainerBet } from "../ActiveBet/ActiveBet.styles";
import Loading from "../Loading/Loading";

const DisplayFilterTab = ({ itemData, smartContractId, getName }) => {
  const [bets, setBets] = useState([]);
  const [odd, setOdd] = useState(0);
  const [eventName, setEventName] = useState(null);
  const [betArr, setBetArr] = useState([]);
  const metaMaskAddress = useSelector((state) => state.wallet);
  const [allEventsData, setallEventsData] = useState([]);

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }
  const border = isActive ? "1px solid #f4cd68" : "";

  // console.log("display", smartContractId);

  useEffect(() => {
    const check = async (i) => {
      let data = await Utils.AllBets(i);

      return data;
    };

    const getEventName = (id) => {
      Utils.getEventName(id).then(function (data) {
        setEventName(data);
      });

      return [
        eventName == null ? "" : eventName[0].teamA,
        eventName == null ? "" : eventName[0].teamB,
      ];
    };
    if (smartContractId?.length > 0) {
      let arr = [];
      let eventData = [];

      let finallArr = [];

      for (let i = 0; i < smartContractId?.length; i++) {
        const s = check(smartContractId[i]);
        arr.push(s);
      }

      if (arr?.length > 0) {
        (async () => {
          arr = await Promise.all(arr);
          const data_3 = arr?.forEach((j) => {
            eventData?.push(j);
          });
          setBetArr(arr);
          eventData?.forEach((x) => {
            //console.log(x, "x");
            x.forEach((y) => {
              if (
                y?.user.toUpperCase() ==
                metaMaskAddress.metaMaskAddress.toString().toUpperCase()
              ) {
                finallArr?.push(y);
              }
            });
          });

          let allEvents = [];
          // debugger;
          for (let i = 0; i < finallArr.length; i++) {
            let tmp = {};
            let event = await Utils.getEventName(finallArr[i]?.eventId);

            let odds = await Utils.currentOdd(
              finallArr[i]?.eventId,
              finallArr[i]?.result,
              finallArr[i]?.token
            );
            allEvents.push({ finallArr, event, odds });
          }
          setallEventsData(allEvents);
          // console.log("events", allEvents);
        })();
      }
    }
  }, [smartContractId?.length]);

  // console.log("DisplayFilter Tab", itemData);

  const formatDate = (seconds) => {
    const s = new Date(seconds * 1000).toLocaleDateString("en-US");
    return s;
  };

  return (
    <ContainerBet>
      {itemData?.length === 0 ? (
        <Loading />
      ) : (
        itemData?.map((item) => {
          return (
            <>
              <div className="betHistory-container">
                <div className="bet-item-1">
                  <div>
                    <img src={item?.icon1} alt="" />
                  </div>
                  <div className="table-wrapper">
                    <div className="bet-th">
                      <span>Date</span>
                      <span>Event</span>
                    </div>
                    <div className="bet-td">
                      <span>
                        {metaMaskAddress.metaMaskAddress == null
                          ? ""
                          : item?.td_1}
                      </span>
                      {metaMaskAddress.metaMaskAddress == null
                        ? ""
                        : item?.td_2}
                    </div>
                  </div>
                  <div className="table-wrapper">
                    <div className="bet-th">
                      <span>Bet Amount</span>
                      <span>Currency</span>
                      <span>Current Odds</span>
                    </div>
                    <div className="bet-td1">
                      {metaMaskAddress.metaMaskAddress == null
                        ? ""
                        : item?.td_3}
                      <img
                        src={
                          metaMaskAddress.metaMaskAddress == null
                            ? ""
                            : item?.td_4
                        }
                        alt=""
                      />
                      <span>
                        {metaMaskAddress.metaMaskAddress == null
                          ? ""
                          : item?.td_5}
                      </span>
                    </div>
                  </div>
                  <div className="status-btn">
                    <div className="right-pannel">
                      <div>
                        <button>Won</button>
                        <button>Lost</button>
                        <button
                          onClick={handleClick}
                          style={{ border: border }}
                        >
                          All
                        </button>
                      </div>
                    </div>
                    <div>
                      {metaMaskAddress.metaMaskAddress == null ? (
                        ""
                      ) : (
                        <button>Claim</button>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </>
          );
        })
      )}
    </ContainerBet>
  );
};

export default DisplayFilterTab;
