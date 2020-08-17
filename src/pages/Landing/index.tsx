import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

import hairImage from "assets/img/hair-photo/hair-photo.jpg";
import hairImage2x from "assets/img/hair-photo/hair-photo@2x.jpg";
import hairImage3x from "assets/img/hair-photo/hair-photo@3x.jpg";

import sexImage from "assets/img/sex-photo/sex-photo.jpg";
import sexImage2x from "assets/img/sex-photo/sex-photo@2x.jpg";
import sexImage3x from "assets/img/sex-photo/sex-photo@3x.jpg";

import "./index.scss";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing-page-container">
        <Header />
        <div className="features-container">
          <div className="title">What can we help with</div>

          {/* Feature 1, Hair loss problem */}
          <div className="feature">
            <div className="img-box">
              <img
                srcSet={`${hairImage3x} 1200w, ${hairImage2x} 800w, ${hairImage} 400w`}
                className="feature-img"
                src={hairImage}
                alt="hair-loss-problem"
              />
            </div>
            <div className="content">
              <div className="watermark">01</div>
              <p className="title">Hair Loss</p>
              <p className="caption">
                Hair loss needn’t be irreversible. We can help!
              </p>
              <p className="desc">
                Hair loss needn’t be irreversible. There’s a scientifically
                proven way that’s most effective in keeping and regrowing your
                hair. It’s all to do with blocking a pesky hormone called DHT.
                That’s the bad guy behind hair loss. And you can keep him at
                bay. The choice is yours.
              </p>
            </div>
          </div>

          {/* Feature 2, Sex problem */}
          <div className="feature align-img-right">
            <div className="img-box">
              <img
                srcSet={`${sexImage3x} 1200w, ${sexImage2x} 800w, ${sexImage} 400w`}
                className="feature-img"
                src={sexImage}
                alt="sex-problem"
              />
            </div>
            <div className="content">
              <div className="watermark">02</div>
              <p className="title">Erectile Dysfunction</p>
              <p className="caption">
                Erections can be a tricky thing. But no need to feel down!
              </p>
              <p className="desc">
                There are plenty of reasons why you might be having difficulty
                in the erection department. We can help you figure out possible
                reasons why. And prescribe a pill if needed.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
