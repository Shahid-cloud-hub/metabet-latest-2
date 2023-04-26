import React, { useState } from "react";
import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { DashContainer } from "./WorldcupLandingPage.styles";
import { useNavigate } from "react-router-dom";
import FilteredEventsList from "../FilterTabBtns/FilteredEventsList";
import useBreakpoint from "../../hooks/useBreakpoints";
import HorizontalFilter from "../FilterTabBtns/HorizontalFilter";

const WorldcupLandingPage = () => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();
  const { isDesktop, isTablet } = useBreakpoint();

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/group`,
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screenSize = window?.screen?.availWidth;

  return (
    <>
      <DashContainer>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <>
            <div className="parent-wrapper">
              {screenSize > 920 && <HorizontalFilter />}
              {screenSize <= 920 && (
                <FilteredEventsList
                  options={[
                    { name: "All", value: "all", defaultValue: true },
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
              )}
            </div>
            <div className="card-parent">
              {response?.map((item, index) => (
                <>
                  <div className="card" key={index}>
                    {item?.event?.banner && (
                      <img
                        src={item?.event?.banner}
                        alt={item?.event?.title}
                        style={{ width: "85%" }}
                        s
                        onClick={() =>
                          navigate(
                            `${item?.group}/${item?.event?.title}/statistics/${item?.event?.highlights[0]?._id}`,
                            {
                              state: item?.event?.highlights[0]?._id,
                            }
                          )
                        }
                      />
                    )}
                    {item?.event?.bet_banner && (
                      <img
                        src={item?.event?.bet_banner}
                        alt={item?.event?.title}
                        style={{ width: "85%" }}
                        onClick={() =>
                          navigate(
                            `${item?.group}/${item?.event?.title}/statistics/${item?.event?.possibleComes[0]?._id}`,
                            {
                              state: item?.event?.possibleComes[0]?._id,
                            }
                          )
                        }
                      />
                    )}
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </DashContainer>
    </>
  );
};

export default WorldcupLandingPage;
