import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "../Assets/bayz.png";
import "./Advert.css";
import toast, { Toaster } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Container = styled.div`
  margin-bottom: 15px;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between ${mobile({ padding: "7px 0px" })};
`;

const Language = styled.span`
  margin: 7px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  padding: 5px;
  ${mobile({ width: "40px", display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ fontSize: "10px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "15px", marginRight: "10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const handle = () => {
    toast.error("Maintanance Mode");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language className="images">
            <Link to="/">
              <img src={image} alt="" />
            </Link>
          </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} onClick={handle} />
            <Toaster />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BAYZ_STORE</Logo>
        </Center>
        <Right>
          
          <Link to="/cart" style={{ color: "#a37534" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>

          {!isAuthenticated ? (
            <Link onClick={loginWithRedirect} style={{ textDecoration: "none", color: "#324d67" }}>
              <MenuItem>SIGN-IN</MenuItem>
            </Link>
          ) : (
            <ProfileMenu user={user} logout={logout}/>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
