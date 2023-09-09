import React from 'react'
import { Link } from "react-router-dom"
import "./Advert.css"



const Advert = () => {
  return (
    
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% OFF</p>
          <h3>FINE</h3>
          <h3>SMILE</h3>
          <p></p>
        </div>
        <div className="right">
          <p>Bayz Super Store</p>
          <h3>SUMMER SALE</h3>
          <p>Best Website For Amaizing Product</p> 
            <Link to="/explore" style={{ textDecoration: 'none', color: '#324d67' }}>
              <button type="button">EXPLORE</button>
            </Link>        
        </div>
        
        <img src="https://cdn.sanity.io/images/3224i810/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" className="footer-banner-image" alt="" />
      </div>
    </div>
  )
}

export default Advert