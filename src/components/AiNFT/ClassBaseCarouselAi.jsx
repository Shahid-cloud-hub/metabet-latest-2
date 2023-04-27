import { Component } from "react";
import { CarouselContainer } from "../FilterTabBtns/Carousel.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "../../assets/images/ActiveBets/next.png";
import PreArrow from "../../assets/images/ActiveBets/prev.png";
import { Filter } from "../ActiveBet/ActiveBetData";

export default class ClassBaseCarouselAi extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      data: props?.data,
      text_1: props.test,
      hanlderFunc: props.handle,
      compareNames: props.check,
      check: "",
      getTabName: props.getTabName,
    };
    this.state1 = {
      data: props?.data,
      text_1: props.test,
      hanlderFunc: props.handle,
      compareNames: props.check,
      check1: "",
      getTabName: props.getTabName,
    };
  }
  handle = (nameValue) => {
    this.state.getTabName(nameValue, Filter);
    this.setState({ check: nameValue });
  };
  handle1 = (nameValueHistory) => {
    this.state1.getTabName(nameValueHistory, Filter);
    this.setState1({ check1: nameValueHistory });
  };

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <CarouselContainer>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.data?.map((Val, id) => {
            return (
              <button
                onClick={() => this.handle(Val?.name)}
                style={
                  Val?.name === this.state.check
                    ? { cursor: "pointer", border: "1px solid #a8d7ff" }
                    : {
                        cursor: "pointer",
                        border:
                          "1px solid linear-gradient(90deg, #997860 -8.82%, #FFA133 111.76%)",
                      }
                }
                className={
                  Val?.name === this.state.check
                    ? "betactive betactive-pseudo"
                    : ""
                }
              >
                {Val?.imgV && (
                  <img
                    src={Val?.name === this.state.check ? Val?.imgP : Val?.imgV}
                    alt={Val.name}
                  />
                )}

                <span
                  style={{ cursor: "pointer" }}
                  className={
                    Val?.name === this.state.check ? "gradient-text" : ""
                  }
                >
                  {Val?.name == "Trending-Event"
                    ? "Trending Events"
                    : Val?.name}
                </span>
              </button>
            );
          })}
        </Slider>
        <div className="btn-container">
          <div onClick={this.previous}>
            <img src={PreArrow} alt="previous" />
          </div>
          <div onClick={this.next}>
            <img src={NextArrow} alt="next" />
          </div>
        </div>
      </CarouselContainer>
    );
  }
}