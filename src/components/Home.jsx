import React from 'react';
import HomeBanner from '../components/HomeBanner';
import Facility from '../components/Facility';
import Rooms from '../components/Rooms';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Facility />
      <Rooms />
      <Footer />
    </div>
  );
};

export default Home;