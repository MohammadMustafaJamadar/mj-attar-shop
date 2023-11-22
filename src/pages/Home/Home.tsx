import React from "react";
import CarouselSection from "../../components/home/CarouselSection";
import CollectionSection from "../../components/home/CollectionSection";


const Home = () => {


  return (
    <React.Fragment>
      <div className="carosel-section">  
      <CarouselSection/>
      </div>
      <div className="collection-section">
      <CollectionSection/>
      </div>
    </React.Fragment>
  );
};

export default Home;
