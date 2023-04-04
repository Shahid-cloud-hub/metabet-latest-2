import React, { useEffect, useState } from "react";
import { Container } from "./BETHistory.styles";
import BetContainer from "./BetContainer";
import fox from "../../assets/images/Betimg/fox.png";
import { Filter } from "../ActiveBet/ActiveBetData";
import FilterTabBtns from "../FilterTabBtns/FilterTabBtns";
import { useAxios } from "../../hooks/useAxios";
import { useSelector } from "react-redux";
import Utils from "../../utilities.js";

const BetHistory = () => {
  const [itemData, setItemData] = useState(Filter);
  const [getName, setGetName] = useState("all");
  const [bets, setBets] = useState([]);
  const metaMaskAddress = useSelector((state) => state.wallet);

  const uniqueNames = [...new Set(Filter.map((item) => item.name))];
  const menuItems = uniqueNames.map((nameObj) => {
    const filterItem = Filter.find((item) => item.name == nameObj);
    const imgV = filterItem ? filterItem.img : null;
    const imgO = filterItem ? filterItem.imgO : null;

    return { name: nameObj, imgV, imgO };
  });

  const filterItem = (curcat) => {
    console.log(curcat, "filterItem");
    const newItem = Filter.filter((newVal) => {
      console.log("check", newVal.name === curcat);
      return newVal.name === curcat;
    });
    setItemData(newItem);
  };

  const callbackName = (name) => {
    setGetName(name);
  };

  let group = "ufc";
  let title = getName;

  console.log(getName);

  const { fetchData, response } = useAxios();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/${title}`,
    });
  };

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, [group, title]);

  const hightlightData = response?.map(
    (item) => item?.event?.highlights[0]?.stats?.data?.smart_contract_id
  );

  const arrData =
    hightlightData == undefined ? [] : Object.values(hightlightData);

  useEffect(() => {
    if (metaMaskAddress.metaMaskAddress) {
      if (getName != "all") {
        Utils.AllUserBets_id(
          metaMaskAddress.metaMaskAddress.toString(),
          arrData
        ).then(function (data) {
          setBets(data);
        });
      } else if (
        getName == "dxy" ||
        getName == "ufc" ||
        getName == "ethereum" ||
        getName == "bitcoin" ||
        getName == "football" ||
        getName == "cricket"
      ) {
        Utils.AllUserBets(metaMaskAddress.metaMaskAddress.toString()).then(
          function (data) {
            setBets(data);
          }
        );
      }
    }
  }, [metaMaskAddress]);

  console.log("====================================>");

  return (
    <>
      <Container>
        <div className="history_span">
          <span>BET HISTORY</span>
        </div>
        <div className="filter-btn">
          <FilterTabBtns
            filterItem={filterItem}
            setItemData={setItemData}
            menuItems={menuItems}
            tabItem={Filter}
            callbackName={callbackName}
            betHis={true}
          />
        </div>
        <BetContainer data={arrData} name={getName} />
        {!metaMaskAddress.metaMaskAddress ? (
          <button id="history_btn">
            Connect Wallet
            <img src={fox} alt="fox" />
          </button>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default BetHistory;
