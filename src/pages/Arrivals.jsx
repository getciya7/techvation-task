import React from "react";
import { ref_1, ref_2, ref_3 } from "../assets";

function Arrivals() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section class="arrivals" id="arrivals">
        <h1 class="heading">
          We would like to highlight
          <span>
            <br />
            few of our following transactions for your reference:
          </span>
        </h1>
        <br />

        <div class="box-container">
          <div class="box" data-aos="fade-right">
            <div class="image">
              <img src={ref_3} alt="" />
            </div>
            <div class="content">
              {/* <!--<h3>Structured a transaction to raise funds for a Technology Company to acquire a Company overseas</h3>--> */}
            </div>
          </div>

          <div class="box" data-aos="fade-down">
            <div class="image">
              <img src={ref_2} alt="" />
            </div>
            <div class="content">
              {/* <!--<h3>Successfully re-organised a debt in sync with cash flows of a large educational institution with more than 10,000 students with more than 10 Schools and 6 Colleges.</h3>--> */}
            </div>
          </div>

          <div class="box" data-aos="fade-left">
            <div class="image">
              <img src={ref_1} alt="" />
            </div>
            <div class="content">
              {/* <!--<h3>Advised our NBFC-MFI clients to raise Term Loans even during and post Covid pandemic, when MFIs were facing challenge raising fresh Term loans</h3>--> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Arrivals;
