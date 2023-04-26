import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { DashContainer } from "../components/WorldcupLandingPage/WorldcupLandingPage.styles";
import { useAxios } from "../hooks/useAxios";

const Polities = ({ group_type }) => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  const res = response ? response : [];
  // console.log("res", response);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DashContainer>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="card-parent">
          {Object?.values(res)
            .reverse()
            .slice(0, 21)
            ?.map((item, index) => (
              <>
                <div className="card" key={index}>
                  <img
                    src={item?.event?.banner}
                    alt={item?.event?.title}
                    style={{ width: "90%" }}
                    onClick={() =>
                      navigate(
                        `${item?.event?.title}/statistics/${item?.event?.highlights[0]?._id}`,
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
  );
};

export default Polities;
