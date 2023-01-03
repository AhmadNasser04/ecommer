import React from "react";
import Carousel from "../../components/Carousel";
import { carouselImages } from "./CarouselImages";
import Ratings from "./Ratings";
import Trending from "./Trending";

function Home() {
  return (
    <div className="space-y-10">
      <section>
        <Carousel images={carouselImages} />
      </section>

      <section>
        <Ratings />
      </section>

      <section className="pt-5">
        <Trending />
      </section>
    </div>
  );
}

export default Home;
