import styled from "styled-components"
import { catergories } from "../data"
import CategoryItem from "./CategoryItem"
import {mobile} from "../responsive"


const Container = styled.div`
    margin-top: 7rem;
    display: flex;
    padding: 20px:;
    justify-content: space-between; 
    margin-bottom: 10%;
    ${mobile({padding: "0px", flexDirection: "column"})}
`

const Categories = () => {
  return (
    <Container>
        {catergories.map(item=> {
            return (
                <CategoryItem item = {item} key={item.id}/>
            )
        })}
    </Container>
  )
}

export default Categories