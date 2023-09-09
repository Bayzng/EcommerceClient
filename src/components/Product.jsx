import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethod";
import { useLocation } from "react-router-dom";
import { Divider } from "@mantine/core";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  width: 250px;
`;

const FiltersTitle = styled.div`
  margin-bottom: 10rem;
  color: yellow;
  background-color: green;
  padding: 5px;
  margin-left: 70px;
//   position: relative;
//   z-index: 10px
`;

const AllsContainer = styled.div`
  display: flex;
  margin-right: 7rem;
`;

// const Button = styled.button`
//     width: 40px;
//     height: 42px;
//     border-radius: 50%;
//     background-color: white;
//     transition: all 0.5s ease;

//     // &:hover{
//     //     background-color:#e9f5f5;
//     //     transform: scale(1.1);
//     // }
// `

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  // &:hover{
  //     background-color:#e9f5f5;
  //     transform: scale(1.1);
  // }
`;

const Product = ({ item }) => {
  const handleClick = () => {
    //update cart
    toast.success(`${item.title} liked.`);
  };

  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState("");

  const [size, setSize] = useState("");

  const [choice, setChoice] = useState("");

  const location = useLocation();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const dispatch = useDispatch();

  const handleClicked = () => {
    //update cart
    toast.success(`${item.title} added to the cart.`);
    dispatch(addProduct({ ...item, quantity, color, size, choice }));
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      {/* <Image src={product.img}/> */}
      <Info>
        <FiltersTitle>{item.title}</FiltersTitle>

        <AllsContainer>
        <Icon onClick={handleClicked}>
          <Link>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon onClick={handleClick} style={{ color: "red" }}>
          <Toaster />
          <FavoriteBorderOutlined />
        </Icon>
        </AllsContainer>

        
      </Info>
    </Container>
  );
};

export default Product;
