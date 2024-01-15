import React, { useEffect } from "react";
import CarouselSection from "../../../components/container/home/CarouselSection";
import CollectionSection from "../../../components/container/home/CollectionSection";
import MostViewedProducts from "../../../components/container/home/MostViewedProducts";
import TopCategories from "../../../components/container/home/TopCategories";
import PopularProducts from "../../../components/container/home/PopularProducts";
import Cta from "../../../components/container/home/Cta";
import RecentProducts from "../../../components/container/home/RecentProducts";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
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
