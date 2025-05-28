import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <h1>CSS Overflow 5 ile JavaScript'siz Carousel</h1>
      <ul className="carousel" tabIndex={0} aria-label="Carousel örneği">
        <li>Slide 1</li>
        <li>Slide 2</li>
        <li>Slide 3</li>
        <li>Slide 4</li>
        <li>Slide 5</li>
        <li>Slide 6</li>
        <li>Slide 7</li>
        <li>Slide 8</li>
      </ul>
    </div>
  );
};

export default Carousel;
