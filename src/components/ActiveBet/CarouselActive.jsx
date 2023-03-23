import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tbanner1 from "../../../assets/images/Politics/tbanner1.webp";
import tbanner2 from "../../../assets/images/Politics/tbanner2.webp";
import tbanner3 from "../../../assets/images/Politics/tbanner3.webp";
import tbanner4 from "../../../assets/images/Politics/tbanner4.webp";
import tbanner5 from "../../../assets/images/Politics/tbanner5.webp";
import tbanner6 from "../../../assets/images/Politics/tbanner6.webp";
import tbanner7 from "../../../assets/images/Politics/tbanner7.webp";
import tbanner8 from "../../../assets/images/Politics/tbanner8.webp";
import tbanner9 from "../../../assets/images/Politics/tbanner9.webp";
import tbanner10 from "../../../assets/images/Politics/tbanner10.webp";
import tbanner11 from "../../../assets/images/Politics/tbanner11.webp";
import tbanner12 from "../../../assets/images/Politics/tbanner12.webp";
import tbanner13 from "../../../assets/images/Politics/tbanner13.webp";
import tbanner14 from "../../../assets/images/Politics/tbanner14.webp";
import tbanner15 from "../../../assets/images/Politics/tbanner15.webp";
import tbanner16 from "../../../assets/images/Politics/tbanner16.webp";
import tbanner17 from "../../../assets/images/Politics/tbanner17.webp";
import tbanner18 from "../../../assets/images/Politics/tbanner18.webp";
import tbanner19 from "../../../assets/images/Politics/tbanner19.webp";
import tbanner20 from "../../../assets/images/Politics/tbanner20.webp";
import tbanner21 from "../../../assets/images/Politics/tbanner21.webp";
import { NavLink } from "react-router-dom";

export default function CarouselActive() {
  let images = [
    {
      id: 1,
      img: tbanner1,
      link: "https://metabetmask.com/trending-event/andrew-tate/statistics/6412c95fd377d98772efc283"
    },
    {
      id: 2,
      img: tbanner2,
      link:"https://metabetmask.com/trending-event/fed-raise/statistics/6412cb40b785a3b101bde959"
    },
    {
      id: 3,
      img: tbanner3,
      link:"https://metabetmask.com/trending-event/crufts/statistics/6412cd21d377d98772efc712"

    },
    {
      id: 5,
      img: tbanner5,
      link:"https://metabetmask.com/trending-event/sam-bankman-fried/statistics/6412d010d377d98772efc87a"

    },
    {
      id: 6,
      img: tbanner6,
      link:"https://metabetmask.com/trending-event/cryptocurrency/statistics/6412d31ad377d98772efcb9b"
    },
    {
      id: 7,
      img: tbanner7,
      link:"https://metabetmask.com/trending-event/grayscale/statistics/6412d3c9d377d98772efccaf"

    },
    {
      id: 8,
      img: tbanner8,
      link:"https://metabetmask.com/trending-event/twitter-ceo/statistics/6412d43ebddb1d54d3b52ab7"

    },
    // {
    //   id: 9,
    //   img: tbanner9,
    //   link:"https://metabetmask.com/trending-event/ethereum-market/statistics/6405c12f37a14b9894fff3c2"

    // },
    {
      id: 9,
      img: tbanner10,
      link:"https://metabetmask.com/trending-event/kardashian-sis/statistics/6412c5addc8bd5e516d145dc"
    },
    {
      id: 10,
      img: tbanner11,
      link:"https://metabetmask.com/trending-event/genesis-file/statistics/6412d591d377d98772efcead"

    },
    {
      id: 11,
      img: tbanner12,
      link: "https://metabetmask.com/trending-event/dcg-file/statistics/6412d64bd377d98772efcf37"
    },
    {
      id: 12,
      img: tbanner13,
      link: "https://metabetmask.com/trending-event/silvergate-bank/statistics/6412d6aed377d98772efcfbd"

    },
    {
      id: 13,
      img: tbanner14,
      link:  "https://metabetmask.com/trending-event/flights-from-china/statistics/6412d7d6d377d98772efd047"
    },
    {
      id: 14,
      img: tbanner15,
      link:"https://metabetmask.com/trending-event/worlds-richest-man/statistics/6412d83fd377d98772efd0d1"
    },
    {
      id: 15,
      img: tbanner16,
      link:"https://metabetmask.com/trending-event/dana-white/statistics/6412d8dbd377d98772efd15b"

    },
    {
      id: 16,
      img: tbanner17,
      link:"https://metabetmask.com/trending-event/united-states-default/statistics/6412d9e4d377d98772efd1e5"

    },
    {
      id: 17,
      img: tbanner18,
      link:"https://metabetmask.com/trending-event/volodymyr-zelensky/statistics/6412e32235579d578114b75d"

    },  {
      id: 18,
      img: tbanner19,
      link:"https://metabetmask.com/trending-event/who-will-win/statistics/6412e5dca822c96e69648f58"

    },  {
      id: 19,
      img: tbanner20,
      link:"https://metabetmask.com/trending-event/wimbledon/statistics/6412e6bea822c96e6964905c"

    },  {
      id: 20,
      img: tbanner21,
      link:"https://metabetmask.com/trending-event/crap-fishing/statistics/6412e730a822c96e6964915a"

    },
  ];
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.map((item) => (
        <>
          {" "}
          <div className="slide_img">
            <a href={item.link} target="_blank">
            <img src={item.img} alt="image" />{" "}
            </a>
          </div>
        </>
      ))}
    </Slider>
  );
}
