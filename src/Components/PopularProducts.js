import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import img from "../images/food1.png";

const PopularProducts = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <div className="mt-5 text-center new-arrival">
        <h2>Popular Products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div>
      <div className="my-5">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "rgb(189, 189, 189);",
              border: "none",
              borderRadius: "50%",
              color: "black",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "rgb(189, 189, 189);",
              border: "none",
              borderRadius: "50%",
              color: "black",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 4,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          <div className="popular-products">
            <img src={img} alt="" />
            <h4>Name</h4>
            <h5>Price</h5>
          </div>
          <div className="popular-products">
            <img src={img} alt="" />
            <h4>Name</h4>
            <h5>Price</h5>
          </div>
          <div className="popular-products">
            <img src={img} alt="" />
            <h4>Name</h4>
            <h5>Price</h5>
          </div>
          <div className="popular-products">
            <img src={img} alt="" />
            <h4>Name</h4>
            <h5>Price</h5>
          </div>
          <div className="popular-products">
            <img src={img} alt="" />
            <h4>Name</h4>
            <h5>Price</h5>
          </div>
          <div className="popular-products">
            <img src={img} alt="" />
            <h4>Name</h4>
            <h5>Price</h5>
          </div>
        </ReactSimplyCarousel>
      </div>
    </>
  );
};

export default PopularProducts;
