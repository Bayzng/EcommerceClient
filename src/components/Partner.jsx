import React, {Component} from "react";
import "./App.css";



class Partner extends Component{
  render(){
    const marquee = {
      // dots: true,
      // infinite: true,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      // cssEase: "linear",
      
    };
    return(
      <div className="mainContainer ">
        <h1 className="client">OUR <span>CLIENT</span></h1>
        <div {...marquee} className="marquee track ">
          <div className="bayo">
            <img src="https://64e369d1a80c1818830dc107--snazzy-swan-58e654.netlify.app/image/samsung.png" alt="logo"/>
            <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" alt="logo"/>
            <img src="http://dltafrica.io/static/media/dlt-logo.eefca3e3164ab53e491a.png" alt="logo"/>
            <img src="https://64e369d1a80c1818830dc107--snazzy-swan-58e654.netlify.app/image/google.png" alt="logo"/>
            <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" alt="logo"/>
            {/* <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" alt="logo"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;