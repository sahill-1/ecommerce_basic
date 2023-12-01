import React from "react";
import img from "../images/download.jpg";
const Newarrival = () => {
  return (
    <div>
      {/* <div className="mt-5 text-center new-arrival">
        <h2>New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div> */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 mb-0">New Arrivals</h1>
        <hr className="w-25 mx-auto bg-primary" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div>
      <div className="new-arrival-body">
        <div className="main">
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
          <div className="card" tabindex="0">
            <img src={img} alt="error" />
            <div className="text">
              <h2 data-splitting="">The City</h2>
              <p data-splitting="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos excepturi nostrum necessitatibus doloremque? Quasi
                non molestias odio. Quasi non molestias odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
