import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      {/* <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project
              within`` minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div> */}
      <div className="explore">
        <div className="container">
          <h1>Explore the Services</h1>
          <div className="items">
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              /> */}
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/plasticine/100/react.png"
                alt="react"
              />
              <div className="line"></div>
              <span>React</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/solidity.png"
                alt="solidity"
              />
              <div className="line"></div>

              <span>Solidity</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png"
                alt="java-coffee-cup-logo"
              />
              <div className="line"></div>
              <span>Java</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/html-5.png"
                alt="html-5"
              />
              <div className="line"></div>
              <span>HTML</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-sql-mobile-app-development-flaticons-lineal-color-flat-icons.png"
                alt="external-sql-mobile-app-development-flaticons-lineal-color-flat-icons"
              />
              <div className="line"></div>
              <span>SQL</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/amazon-web-services.png"
                alt="amazon-web-services"
              />
              <div className="line"></div>
              <span>AWS</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/external-becris-flat-becris/64/external-iot-fintech-becris-flat-becris.png"
                alt="external-iot-fintech-becris-flat-becris"
              />
              <div className="line"></div>
              <span>IOT</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              /> */}
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color-glass/48/permanent-job.png"
                alt="permanent-job"
              />
              <div className="line"></div>
              <span>Placements</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/c-plus-plus-logo.png"
                alt="c-plus-plus-logo"
              />
              <div className="line"></div>
              <span>C++</span>
            </div>
            <div className="item">
              {/* <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              /> */}
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/happy.png"
                alt="happy"
              />
              <div className="line"></div>
              <span>...More</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}
    </div>
  );
}

export default Home;
