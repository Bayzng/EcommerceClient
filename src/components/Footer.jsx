// import { Container } from '@material-ui/core'
import { Facebook, Instagram, MailOutline, Twitter, WhatsApp } from '@material-ui/icons'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components'
import {mobile} from "../responsive"
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    color: #324d67;
`
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialContainer = styled.h1`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Title = styled.h1`
    margin-bottom: 30px;
    color: Black;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "lightgrey"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 60%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Bayz_Store</Logo>
            <Desc>
                Step into a world where shopping knows no bounds. At <strong style={{color: "green"}}>BAYZ_STORE</strong> , we've meticulously curated a 
                diverse range of products that cater to every need and desire. From trending fashion apparel 
                that keeps you ahead of the style curve, to cutting-edge electronics that elevate your tech 
                game, and from home essentials that redefine comfort, we have it all under one digital roof.
            </Desc>
            <SocialContainer>

                <Link to="">  
                    <SocialIcon color="385999">
                            <Facebook/>
                    </SocialIcon>
                </Link>

                <Link to="https://instagram.com/iam_akeem_adebayo">
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                </Link>

                <Link to="https://twitter.com/AkeemAd28605307?t=Al0aApjPbDfCNhUB90SEMg&s=09">
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                </Link>

                <Link to="https://wa.me/8144796373">
                    <SocialIcon color='4a7624'>
                        <WhatsApp/>
                    </SocialIcon>
                </Link>

            </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Acccount</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Terms</ListItems>
                <ListItems>Trendy</ListItems>
            </List>
        </Center>
        <Right>

        <Title>Contact</Title>
        <ContactItem>
            <LocationOnIcon style={{marginRight: "10px"}}/>  652 Ikeja, Lagos State Nigeria
        </ContactItem>
        <ContactItem>
            <PhoneIcon style ={{marginRight: "10px"}}/>+234 81-4479-6373
        </ContactItem>
        <ContactItem>
            <MailOutline style ={{marginRight: "10px"}}/> bayz2070@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer