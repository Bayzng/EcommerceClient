import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../responsive"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { publicRequest } from "../requestMethod"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"
import video from "../Assets/Bayz.mp4"
import './video.css'
import toast, { Toaster } from 'react-hot-toast';



const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`

const ImgContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({height: "40%"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 900;
    color: #324d67;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 700;
    font-size: 40px;
    color: green;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 900;
    color: #324d67;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #ded4ec;
    }
`

const Star = styled.div`
    color: #f02d34;
    margin-top: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
`
const Details = styled.div`
    margin-top: 15px;
    color: #324d67;
    font-weight: 500;
`
// const Video = styled.div`
//     width: 50px;
// `





const Product = () => {
    const location = useLocation()
    const id = (location.pathname.split("/")[2]);

    const [product, setProduct ] = useState({})

    const [quantity, setQuantity ] = useState(1)

    const [color, setColor ] = useState("")

    const [size, setSize ] = useState("")


    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data)
            }catch {}
        }
        getProduct()
    }, [id])

    const handleQuantity = (type) => {
        if(type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        //update cart
        toast.success(`${product.title} added to the cart.`)
        dispatch(addProduct({ ...product, quantity, color, size }))   
    };

    

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Star>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </Star>
                <Details>Details:</Details>
                <Desc>
                    {product.desc}
                </Desc>
                <Price># {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                            
                            {product.size?.map((s)=> (

                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                    <Toaster  />
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <div className="video">
            <video src={video} controls autoPlay="none" loop></video>
        </div>
        <div className="mygif">
            <img src="https://i.pinimg.com/originals/dc/6d/f7/dc6df7e28e51cb7dcec3bdda8b502f7e.gif" alt="" />
        </div>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product