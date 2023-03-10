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
  const [allEventsData, setallEventsData] = useState([]);
  const metaMaskAddress = useSelector((state) => state.wallet);

  console.log("display", smartContractId, getName);

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
            allEvents.push({ event, odds });
          }
          setallEventsData(allEvents);
          // console.log("events", allEvents);
        })();
      }
    }
  }, [smartContractId?.length]);

  // console.log(eventData, "array");

  //console.log(finallArr[0].eventId, 'array');
  // const checkOdd = (id, result, token) => {
  //   Utils.currentOdd(id, result, token).then(function (data) {
  //     setOdd(Number(data));
  //   });
  //   return odd;
  // };

  const formatDate = (seconds) => {
    const s = new Date(seconds * 1000).toLocaleString("en-US");
    return s;
  };

  console.log("test", allEventsData);

  // console.log(getEventName(finallArr[0]?.eventId), "test");
  // console.log(
  //   getEventName(formatDate(Number(finallArr[0]?.timestamp))),
  //   "test"
  // );
  // console.log(
  //   checkOdd(finallArr[0]?.eventId, finallArr[0]?.result, finallArr[0]?.token),
  //   "test"
  // );

  return (
    <ContainerBet>
      {itemData?.map((item) => {
        return (
          <>
            <div className="betHistory-container">
              <div className="bet-item-1">
                <div>
                  <img src={item.icon1} alt="" />
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{item.th_1}</span>
                    <span>{item.th_2}</span>
                  </div>
                  <div className="bet-td">
                    <span>{item.td_1}</span>
                    <span>{item.td_2}</span>
                  </div>
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{item.th_3}</span>
                    <span>{item.th_4}</span>
                    <span>{item.th_5}</span>
                  </div>
                  <div className="bet-td1">
                    <span>{item.td_3}</span>
                    <img src={item.td_4} alt="" />
                    <span>{item.td_5}</span>
                  </div>
                </div>
                <div className="status-btn">
                  <div className="right-pannel">
                    <div>
                      <button>Won</button>
                      <button>Lost</button>
                    </div>
                    <div>
                      <button>All</button>
                      <button>Live</button>
                    </div>
                  </div>
                  <div>
                    <button>Claim</button>
                    <button className="sell">Sell</button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </>
        );
      })}
    </ContainerBet>
  );
};

export default DisplayFilterTab;
