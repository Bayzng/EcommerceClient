import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {mobile} from "../responsive"
import Recommended from '../components/Recommended'
import { useSelector } from 'react-redux'
import StripeCheckout  from "react-stripe-checkout"
import { useState, useEffect } from 'react'
import image from "../../src/Assets/bayz.png"
import { userRequest } from "../requestMethod"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai';
import imageAds from "../Assets/bayzads.png"


const KEY = "pk_test_51NDbIBECvlM9QLIDj0W0INQYJKFDMI0SGjIOtSIrK3tDhgRYQE3bud4goTILX4I1OWtrJEFXE0TgwPsVn5p0RM5m00ZSrzVEoE"


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    color: #324d67;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBottom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`

const TopText = styled.span`
    font-weight: 700;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
    margin-bottom: 40px;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    font-weight: 900;
    font-size: 20px;
    color: #324d67;
    ${mobile({fontSize: "10px", fontWeight: "400"})}
`

const Star = styled.div`
    color: #f02d34;
    margin-top: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
`

const ProductId = styled.span`
    font-weight: 600;
    font-size: 15px;
    ${mobile({fontSize: "9px", fontWeight: "400"})}
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom 20px;
    ${mobile({marginTop: "10px"})}
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`

const ProductPrice = styled.div`
    font-weight: 500;
    font-size: 30px;
    color: green;
    ${mobile({marginBottom: "20px"})}
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    box-shadow: -8px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -8px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -8px 10px 5px 0px rgba(0,0,0,0.75);

`

const SummaryTitle = styled.h1`
    font-weight: 700;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Message = styled.div`
    // margin-left: 40px;
    text-align: center;
    color: #324d67;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const IconPay = styled.div`
    margin-top: 20px;
    
`




const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token);
    }

    // console.log(stripeToken);

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                navigate.push("/success", { data: res.data })
            }catch {}
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, navigate])


  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopBottom>
                    <Link to="/products/OUR-PRODUCTS" style={{ textDecoration: 'none', color: '#324d67' }}>
                        SHOPPING CONTINUE
                    </Link>
                </TopBottom>
                <TopTexts>
                    <TopText>BAYZ_PRODUCT</TopText>
                    <TopText>STORE</TopText>
                </TopTexts>
                <TopBottom type="filled">PAYMENT</TopBottom>
            </Top>
            <Bottom>
                
                {/* {cart.products.length < 1 &&  (
                    alert("Your Shopping Bag is Empty")
                )} */}

                <Info>
                    {cart.products.length >= 1 && cart.products.map((product)=>(
                        <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <Star>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                    </Star>
                                    <ProductId><b>ID: </b>{product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <ProductAmount> QUANTITY {product.quantity}</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice># {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                    ))}
                    
                    <hr />

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice># {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Extimated Shipping</SummaryItemText>
                        <SummaryItemPrice># 00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice># -00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice># {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="Bayz_Store"
                        image={image}
                        billingAddress
                        shippingAddress
                        description={`Your total is # ${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        
                        <Button>PAY NOW</Button>

                        <IconPay> 
                            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
                        </IconPay>
                    </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Message><h1>YOU MAY ALSO LIKE</h1></Message>
        <Recommended/>
        <img src={imageAds} className="adsimage" alt="ads" />
        <Footer/>
    </Container>
  )
}

export default Cart