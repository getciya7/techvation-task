import React from "react";

function Footer() {
  return (
    <>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box" data-aos="fade-down">
            <h3>quick links</h3>
            <a href="#home">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#about">
              {" "}
              <i className="fas fa-arrow-right"></i> about
            </a>
            <a href="#products">
              {" "}
              <i className="fas fa-arrow-right"></i> service{" "}
            </a>
            <a href="#contact">
              {" "}
              <i className="fas fa-arrow-right"></i> contact{" "}
            </a>
          </div>

          <div className="box" data-aos="fade-up">
            <h3>contact us</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +91 89399 43841{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i>dinesh@hykcapital.com <br />
              hykcapital@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i>19, Solai 3rd Street
              <br />
              Ayanavaram <br />
              Chennai- 600023.
            </a>
          </div>

          <div className="box" data-aos="fade-left">
            <h3>contact us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          created by <span>R.S Techvation</span> | all rights reserved{" "}
        </div>
      </section>
    </>
  );
}

export default Footer;
