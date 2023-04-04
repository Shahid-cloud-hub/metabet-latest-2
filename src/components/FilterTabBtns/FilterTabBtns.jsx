import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviousNextMethods from "./ClassBaseCarousel";
import { useLocation } from "react-router-dom";

const FilterTabBtns = ({
  filterItem,
  setItemData,
  menuItems,
  tabItem,
  callback,
  callbackName,
  betHis,
  activeBet,
}) => {
  const [check, setCheck] = useState();
  const { pathname } = useLocation();

  let myActivePage = "/my-active-bets";
  let myActiveBetPage = "/my-bet-history";

  const uName = [...new Set(tabItem?.map((item) => item.name))];
  const tabItem1 = uName?.map((nameObjs) => {
    const filterItem = tabItem.find((item) => item.name == nameObjs);
    const imgV = filterItem ? filterItem.img : null;
    const imgO = filterItem ? filterItem.imgO : null;
    console.log("first", imgV);
    return { name: nameObjs, imgV, imgO };
  });

  const handle = (nameValue) => {
    console.log("name from handle funciton", nameValue);

    setCheck(nameValue);
    callback(nameValue);
  };

  const getTabName = (name, data) => {
    console.log(name, data, "name and date");

    filterItem(name);
    setCheck(name);
    callbackName(name);

    if (name === "All") {
      setItemData(data);
    }
  };

  return (
    <>
      <PreviousNextMethods
        betHis={betHis}
        activeBet={activeBet}
        data={
          (pathname === myActivePage && menuItems) ||
          (pathname === myActiveBetPage && tabItem1)
        }
        test="Slick Carousel is here"
        check={check}
        getTabName={getTabName}
        callbackName={callbackName}
      />
      {/* <Slider {...settings}>
        {betHis &&
          tabItem1?.map((item) => {
            return (
              <>
                <button
                  onClick={() => handle(item?.name)}
                  style={
                    item?.name?.toLowerCase() === check
                      ? {
                          background:
                            " linear-gradient(90deg, #997860 -8.82%, #FFA133 111.76%)",
                          cursor: "pointer",
                        }
                      : { color: "#fff", cursor: "pointer" }
                  }
                >
                  {item.imgV && <img src={item?.imgV} alt={item?.name} />}
                  <span>
                    {item?.name == "Trending-Event"
                      ? "Trending Events"
                      : item?.name}
                  </span>
                </button>
              </>
            );
          })}
        {activeBet &&
          menuItems?.slice(0, 9)?.map((Val, id) => {
            console.log(Val?.name?.toLowerCase());
            console.log(check);
            return (
              <button
                onClick={() => getTabName(Val?.name, Filter)}
                key={id}
                style={
                  Val?.name?.toLowerCase() === check
                    ? { cursor: "pointer", border: "1px solid #a8d7ff" }
                    : {
                        cursor: "pointer",
                        border:
                          "1px solid linear-gradient(90deg, #997860 -8.82%, #FFA133 111.76%)",
                      }
                }
                className={
                  Val?.name?.toLowerCase() === check
                    ? "betactive betactive-pseudo "
                    : ""
                }
              >
                {Val.imgV && <img src={Val?.imgV} alt={Val?.name} />}
                <span
                  style={{ cursor: "pointer" }}
                  className={
                    Val?.name?.toLowerCase() === check ? "gradient-text" : ""
                  }
                >
                  {Val?.name == "Trending-Event"
                    ? "Trending Events"
                    : Val?.name}
                </span>
              </button>
            );
          })}
      </Slider> */}
    </>
  );
};

export default FilterTabBtns;
