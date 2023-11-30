import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const testimonialsData = [
  {
    id: 1,
    quote:
      "He promptly completed the task at hand and communicates really well till the project reaches the finishing line. ",
    author: "Steve Kruger",
    img: "",
    position: "UI/UX Designer at Woof Design Studio",
  },
  {
    id: 2,
    quote:
      "He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally.",
    author: "John Doe",
    img: "",
    position: "Developer Relations at Woof Studios",
  },
  {
    id: 3,
    quote:
      "He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again.",
    author: "Steve Stevenson",
    img: "",
    position: "CEO Woof Web Design Studios",
  },
];

const Testimonial = () => {

const [index, setIndex] = useState(0);
const handleNext = () => {
  setIndex((state) =>
    state === testimonialsData.length - 1 ? 0 : state + 1
  );
};
const handlePrev = () => {
  setIndex((state) =>
    state === 0 ? testimonialsData.length - 1 : state - 1
  );
};

  return (
    <>
    <div className="mt-5 text-center new-arrival">
      <h2>Testimonial</h2>
    </div>
    <div className="testimonial-slider ">
      <div className="testimonial">
        <div className="testimonial-content">
          <p className="quote">{testimonialsData[index].quote}</p>
          <div className="author-info">
            <img src={testimonialsData[index].img} alt={testimonialsData[index].author}/>
            <h4>{testimonialsData[index].author}</h4>
            <p>{testimonialsData[index].position}</p>
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="arrow arrow-left" onClick={handlePrev}>
          <FaChevronRight />
        </div>
        <div className="arrow arrow-right" onClick={handleNext}>
          <FaChevronLeft />
        </div>
      </div>
    </div>
  </>
  );
};

export default Testimonial;