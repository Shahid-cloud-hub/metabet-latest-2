import React, { useEffect, useState } from "react";
import { Container, Truth2earnContainer } from "./Truth2earn.styles";
import { Truth2Filter } from "../ActiveBet/ActiveBetData";
import FeaturedBanners from "../../components/FeaturedBanners/FeaturedBanners";
import { Politics_banner_data } from "../../JasonData/FeaturedBannerData";
import VoteBtnUp from "../../assets/images/Vote_btn_Up.webp";
import VoteBtnDown from "../../assets/images/Vote_btn_Down.webp";
import eventended from "../../assets/images/Event_ended_btn.png";
import Truth2earnDropdown from "./Truth2earnDropdown";
import Progressbar from "../Progressbar/Progressbar";
import { useAxios } from "../../hooks/useAxios";

const Truth2earn = (props) => {
  const pathname = window.location.pathname;
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState(false);
  const [addStyle, setAddStyle] = useState();
  const [show, setShow] = useState(false);
  const { fetchData, response, loading } = useAxios();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    console.log(activeIndex);
    setOpen(activeIndex);
  }, [activeIndex]);

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getAllHighlights`,
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  const finalData = response?.flat(2);
  const result = finalData?.map((item) => item.resultVerification);

  const handleChange = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setOpen(activeIndex);
  };

  return (
    <Container>
      <div className="filter-btn">
        {Truth2Filter?.map((item) => {
          return (
            <>
              <button
                style={
                  item.id === 1 ? { color: "#FFFFFF" } : { color: "#577184" }
                }
              >
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </button>
            </>
          );
        })}
      </div>
      <Truth2earnContainer displayType="grid" gridTemplateColum="1fr 1fr 1fr">
        {result?.map((item, index) => {
          {
            console.log("first", item);
          }
          return (
            <div className="truth2earn">
              <FeaturedBanners key={index} pc_banner={item?.pc_banner} />
              <div className="vote">
                {item?.resultAnnounced === "false" ? (
                  <>
                    <img
                      src={index === activeIndex ? VoteBtnUp : VoteBtnDown}
                      onClick={() => handleChange(index)}
                      alt="eventEnded"
                    />
                  </>
                ) : (
                  <img src={eventended} alt="eventEnded" />
                )}
              </div>
              {index === activeIndex && (
                <div
                  className={`accordion-item get_accord ${
                    !isOpen ? "collapsed" : ""
                  }`}
                >
                  <div className="accordion-content">
                    <Truth2earnDropdown
                      Truth_data={item.Truth_data}
                      pc_banner_title={item?.pc_banner_title}
                    />
                    <Progressbar />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Truth2earnContainer>
    </Container>
  );
};

export default Truth2earn;
