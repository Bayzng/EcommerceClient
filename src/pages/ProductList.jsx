import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Ads from '../components/Ads/Ads'
import Announcement  from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import {mobile} from "../responsive"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import "./productList.css"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
    margin-top: 2rem;
`

const FilterContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
    font-size: 25px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`

const Option = styled.option``



const ProductList = () => {
    const location = useLocation()
    const cat = (location.pathname.split("/")[2]);
    const  [filters, setFilters] = useState({})
    const  [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <Ads/>
        <FilterContainer>
            <Filter>
                <FilterText>Product Categories:</FilterText>
                <Select name='choice' onChange={handleFilters}>
                    <Option disabled >
                    Product-brands
                    </Option>
                    <Option>BRAND</Option>
                    <Option>GUCCI</Option>
                    <Option>IPHONE</Option>
                    <Option>OFF-WHITE</Option>
                    <Option>SNEAKERS</Option>
                    <Option>NIKE</Option>
                    <Option>ELECTRONICS</Option>
                    <Option>CROCS</Option>
                    <Option>ZARA</Option>
                    <Option>WATCH</Option>
                    <Option>FASHION</Option>
                    <Option>FENDI</Option>
                </Select>

                <Select name='color' onChange={handleFilters}>
                    <Option disabled >
                    Product-Colors
                    </Option>
                    <Option>COLOR</Option>
                    <Option>white</Option>
                    <Option>pink</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                    <Option>silver</Option>
                    <Option>gold</Option>
                </Select>

                <Select name='size' onChange={handleFilters}>
                    <Option disabled >
                        Product-Sizes
                    </Option>
                    <Option>SIZES</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Trending Product:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest">SELECT</Option>
                    <Option value="asc">NEWEST</Option>
                    <Option value="desc">LATEST</Option>
                </Select>
            </Filter>
        </FilterContainer>
       
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList