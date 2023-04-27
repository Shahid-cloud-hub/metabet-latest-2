import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PreviousNextMethods from "../FilterTabBtns/ClassBaseCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassBaseCarouselAi from "./ClassBaseCarouselAi";

const AiFilter = ({
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
    const imgP = filterItem ? filterItem.imgP : null;
    console.log("first", imgV);
    return { name: nameObjs, imgV, imgO, imgP };
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
      <ClassBaseCarouselAi
        betHis={betHis}
        activeBet={activeBet}
        data={menuItems}
        test="Slick Carousel is here"
        check={check}
        getTabName={getTabName}
        callbackName={callbackName}
      />
    </>
  );
};

export default AiFilter;
