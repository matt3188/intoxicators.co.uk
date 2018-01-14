import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import React, { Component } from "react";
import Slider from "react-slick";

class slickCarousel extends Component {
  render() {
    var objects = [
      {
        image: "images/slider-01.jpg",
        title: "title 01"
      },
      {
        image: "images/slider-02.jpg",
        title: "title 02"
      },
      {
        image: "images/slider-03.jpg",
        title: "title 03"
      },
      {
        image: "images/slider-04.jpg",
        title: "title 04"
      },
      {
        image: "images/slider-05.jpg",
        title: "title 05"
      },
      {
        image: "images/slider-06.jpg",
        title: "title 06"
      }
    ];

    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 1000,
      pauseOnHover: 0,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="carousel-container">
        <div className="bg-tint" />
        <Slider className="slider" {...settings}>
          {objects.map(item => (
            <li
              key={item.title}
              className="slide"
              style={{ backgroundImage: "url(" + item.image + ")" }}
              alt={item.title}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default slickCarousel;
