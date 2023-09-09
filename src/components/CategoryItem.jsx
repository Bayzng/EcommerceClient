// import { Button } from "@material-ui/core"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Loader from "./Loader"
import image from "../Assets/new.png"
import "./App.css"


const Container = styled.div`
    flex: 1; 
    margin: 30px;
    height: 70vh;
    position: relative;
    background-color: #324d67;
    box-shadow: 20px 20px 10px grey;
    
`
const Image = styled.img`
    background-color: white;
    box-shadow: 20px 20px 10px grey;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const Info = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1`
    color: black;
    background-color: white;
    padding: 5px;
    margin-bottom: 20px;


`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: green;
    cursor: pointer;
    font-weight: 600;

`

const CategoryItem = ({item}) => {

  return (
    <Container>
        {/* <Loader/> */}
            <img src={image} className="newImage" alt="" />
            <Image src = {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.cat}`}>
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
    </Container>
  )
}

export default CategoryItem