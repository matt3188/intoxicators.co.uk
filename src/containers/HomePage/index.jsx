import React from 'react';
import Carousel from 'components/Carousel';
import Card from 'components/Card';
import './home.css';

const Home = () => (
  <div className="home">
    <section className="section">
      <Carousel />
      <Card title="Upcoming events" image="images/logo.jpg" linkTo="/calendar" />
      <Card title="Our cars" image="images/slider-03.jpg" linkTo="/calendar" />
      <Card title="Join the club" image="images/slider-04.jpg" linkTo="/calendar" />
    </section>
  </div>
  );

export default Home;
