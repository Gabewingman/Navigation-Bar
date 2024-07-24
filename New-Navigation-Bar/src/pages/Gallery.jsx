import React from "react";
import "../pages/Gallery.css" // Assuming you are using CSS Modules
import q1 from "../assets/Gallery/q1.jpg";
import q2 from "../assets/Gallery/q2.jpg";
import q3 from "../assets/Gallery/q3.jpg";
import q4 from "../assets/Gallery/q4.jpg";
import q5 from "../assets/Gallery/q5.jpg";
import q6 from "../assets/Gallery/q6.jpg";
import q7 from "../assets/Gallery/q7.jpg";
import q8 from "../assets/Gallery/q8.jpg";
import q9 from "../assets/Gallery/q9.jpg";
import q10 from "../assets/Gallery/q10.jpg";
import q11 from "../assets/Gallery/q11.jpg";
import q12 from "../assets/Gallery/q13.jpg";

function Gallery() {
  return (
    <>
      <div class="Gallery">
        <a target="_blank" href={q1}>
          <img src={q1} alt="q1" width="250px" />
        /</a>

        <a target="_blank" href={q2}>
          <img src={q2} alt="q2" width="250px" />
        </a>

        <a target="_blank" href={q3}>
          <img src={q3} alt="q3" width="250px" />
        </a>

        <a target="_blank" href={q4}>
          <img src={q4} alt="q4" width="250px" />
        </a>

        <a target="_blank" href={q5}>
          <img src={q5} alt="q5" width="250px" />
        </a>

        <a target="_blank" href={q6}>
          <img src={q6} alt="q6" width="250px" />
        </a>

        <a target="_blank" href={q7}>
          <img src={q7} alt="q7" width="250px" />
        </a>

        <a target="_blank" href={q8}>
          <img src={q8} alt="q8" width="250px" />
        </a>

        <a target="_blank" href={q9}>
          <img src={q9} alt="q9" width="250px" />
        </a>

        <a target="_blank" href={q10}>
          <img src={q10} alt="q10" width="250px" />
        </a>

        <a target="_blank" href={q11}>
          <img src={q11} alt="q11" width="250px" />
        </a>

        <a target="_blank" href={q12}>
          <img src={q12} alt="q12" width="250px" />
        </a>
        </div>
    </>
  );
}

export default Gallery;
