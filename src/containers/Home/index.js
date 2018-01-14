import React from "react";
import Carousel from "components/Carousel";
import Card from "components/Card";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="section">
        <Carousel />
        <Card title="First Link" image="images/logo.jpg" linkTo="/calendar" />
        <Card title="Second Link" image="images/slider-03.jpg" linkTo="/calendar" />
        <Card title="Third Link" image="images/slider-04.jpg" linkTo="/calendar" />
      </section>
    </div>
  );
};

export default Home;
