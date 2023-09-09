import styled from "styled-components"


const Container = styled.div`
    height: 40px;
    background-color: #324d67;  
    color: white;  
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    // margin-top: 15px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deals! free shopping on orders over ₦75,000 🤪
    </Container>
  )
}

export default Announcement