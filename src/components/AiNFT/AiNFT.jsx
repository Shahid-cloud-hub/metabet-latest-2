import React, { useEffect, useState } from "react";
import AILogoImg from "../../assets/images/Ai-NFT/ai.png";
import { AINFTContainer } from "./AINFT.Style";
import AiFilter from "./AiFilter";
import { Filter } from "../ActiveBet/ActiveBetData";
import { useAxios } from "../../hooks/useAxios";
import AiDropDownFilter from "./AiDropDownFilter";

const AiNFT = () => {
  const [itemData, setItemData] = useState(Filter);
  const [getName, setGetName] = useState("all");
  const { fetchData, response } = useAxios();

  const uniqueNames = [...new Set(Filter.map((item) => item.name))];
  const menuItems = uniqueNames.map((nameObj) => {
    const filterItem = Filter.find((item) => item.name == nameObj);
    const imgV = filterItem ? filterItem.img : null;
    const imgO = filterItem ? filterItem.imgO : null;
    const imgP = filterItem ? filterItem.imgP : null;

    return { name: nameObj, imgV, imgO, imgP };
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

  let title = getName;

  if (getName === "all") {
    const getAllEvents = async () => {
      await fetchData({
        method: "GET",
        url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
      });
    };

    useEffect(() => {
      getAllEvents();
      window.scrollTo(0, 0);
    }, [title]);
  } else {
    const getBanners = async () => {
      await fetchData({
        method: "GET",
        url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/${title}`,
      });
    };
    useEffect(() => {
      getBanners();
      window.scrollTo(0, 0);
    }, [title]);
  }

  const hightlightData = response?.map(
    (item) => item?.event?.highlights[0]?.stats?.data?.smart_contract_id
  );

  const arrData =
    hightlightData == undefined ? [] : Object.values(hightlightData);

  return (
    <AINFTContainer>
      <div className="ai-logo">
        <img src={AILogoImg} alt="AI NFT" />
      </div>
      <div className="ai-filter-btn">
        <AiFilter
          filterItem={filterItem}
          setItemData={setItemData}
          menuItems={menuItems}
          callbackName={callbackName}
          activeBet={true}
        />
      </div>
      <div className="market-place-btn">
        <button>My NFTS</button>
        <button>Marketplace</button>
        <button>Leaderboard</button>
      </div>
      <div className="market-place-filter-btn">
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Sales High/Low", value: "all", defaultValue: true },
              { name: "Size", value: "size" },
              { name: "Live", value: "live" },
              { name: "Ended", value: "ended" },
              { name: "Number Bets", value: "number_bets" },
              { name: "Ending Soon", value: "ending_soon" },
            ]}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Price High/Low", value: "all", defaultValue: true },
              { name: "Size", value: "size" },
              { name: "Live", value: "live" },
              { name: "Ended", value: "ended" },
              { name: "Number Bets", value: "number_bets" },
              { name: "Ending Soon", value: "ending_soon" },
            ]}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Score High/Low", value: "all", defaultValue: true },
              { name: "Size", value: "size" },
              { name: "Live", value: "live" },
              { name: "Ended", value: "ended" },
              { name: "Number Bets", value: "number_bets" },
              { name: "Ending Soon", value: "ending_soon" },
            ]}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </AINFTContainer>
  );
};

export default AiNFT;
