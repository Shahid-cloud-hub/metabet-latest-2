import React from 'react'
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import Treding from "./Treding.json"


export const TrendingApi = () => {
  const { fetchData, response, loading } = useAxios();
  const getTrending = async () => {
    await fetchData({
      // method: "GET",
      // headers: {
      //   "Authorization": "Bearer zfxGnaHe8AX23Dvvq ", "accept": "application/json", "Access-Control-Allow-Origin": '*'
      // },
      // url: `https://api.explodingtopics.com/api/v1/reports?start_date=1640962800&end_date=1651120489&api_key=zfxGnaHe8AX23Dvvq`,

      method: "GET",
      // headers: "zfxGnaHe8AX23Dvvq",
      url: `https://api.twitter.com/2/users`,
    });
  };
  console.log("first", response)

  //dependency array []

  useEffect(() => {
    getTrending();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <h1>hi</h1>
      {/* {Object?.values(Treding)?.map((item) => {
        return (
          <div>
            <span>{item?.title}</span>
          </div>
        )
      })} */}
    </>
  )
}
