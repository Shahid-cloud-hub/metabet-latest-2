import React from "react";
import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { DashContainer } from "./WorldcupLandingPage.styles";
import { useNavigate } from "react-router-dom";
import { TrendingApi } from "../../api/TrendingApi";

const WorldcupLandingPage = () => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

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
  return (
    <>
    <DashContainer>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="card-parent">
          {response?.slice(0, 19)?.map((item, index) => (
            <>
              <div className="card" key={index}>
                <img
                  src={item?.event?.banner}
                  alt={item?.event?.title}
                  style={{ width: "90%" }}
                  onClick={() =>
                    navigate(
                      `${item?.group}/${item?.event?.title}/statistics/${item?.event?.highlights[0]?._id}`,
                      {
                        state: item?.event?.highlights[0]?._id,
                      }
                    )
                  }
                />
              </div>
            </>
          ))}
        </div>
      )}
    </DashContainer>
          <TrendingApi/></>
    

  );
};

export default WorldcupLandingPage;
