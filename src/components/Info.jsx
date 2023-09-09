import React from "react";
import "./App.css";
import {mobile} from "../responsive"
import styled from 'styled-components'
import image from "../Assets/bayzads.png"

const Container = styled.div`
  
  ${mobile({fontSize: "10px", marginLeft: "30px"})}
`

const Info = () => {
  return (
    <>
      <img src={image} className="adsimage" alt="ads" />
      <Container className="info">
        <h1>EXPLORE THE HOME OF <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;interior&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;interior&nbsp;</span>
      </button></h1>
      </Container>
    </>
  )
}

export default Info