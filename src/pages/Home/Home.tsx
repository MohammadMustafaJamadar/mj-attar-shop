import React from "react";
import CarouselSection from "../../components/home/CarouselSection";
import CollectionSection from "../../components/home/CollectionSection";
import MostViewedProducts from "../../components/home/MostViewedProducts";
import TopCategories from "../../components/home/TopCategories";
import PopularProducts from "../../components/home/PopularProducts";
import Cta from "../../components/home/Cta";
import RecentProducts from "../../components/home/RecentProducts";

const Home = () => {
  return (
    <React.Fragment>
      <div className="carosel-section">
        <CarouselSection />
      </div>
      <div className="collection-section">
        <CollectionSection />
      </div>
      <section className="section">
        <div className="most-viewed-section">
          <MostViewedProducts />
        </div>

        <div className="top-categories-section">
          <TopCategories />
        </div>

        <div className="popular-products-section">
          <PopularProducts />
        </div>
        <div className="cta-section">
          <Cta />
        </div>
        <div className="recent-products-section">
          <RecentProducts />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
