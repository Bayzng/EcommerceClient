import React from 'react'
import "./adds.css"

const Ads = () => {
  return (
    <div>
        <div className='ads-main'>
            <section class="slideshow">
                <div class="slideshow-container slide anime">
                    <img className='img' src="https://digitalscholar.in/wp-content/uploads/2022/05/Digital-marketing-tips-for-eCommerce-Marketing.gif"/>
                    <img className='img' src="https://64efaa5520e422058e83d82a--snazzy-swan-58e654.netlify.app/image/WhatsApp%20Image%202023-08-30%20at%2013.38.28%20(1).jpeg"/>
                    {/* <div class="text-container">
                    <p className='p'> HELLO WELCOME TO  <br /> <span className='bayzstore'>BAYZ_STORE</span> <br /> The digital product market & development website</p>
                    </div> */}
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2023/Initiatives/712x384.gif"/>
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg"/>
                </div>
            </section>
            <img className='img second-img' src="https://i.pinimg.com/originals/77/12/66/7712662202eaec6176a883c7e30c6daf.gif"/>
        </div>
    </div>
  )
}

export default Ads