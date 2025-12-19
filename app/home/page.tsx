import React from 'react'
import LandingPage from '../index/landingpage/LandingPage'
import Mission from '../index/our mission/Mission'
import StoreImages from '../index/storeImages/StoreImages'
import Vision from '../index/our vision/Vision'
import WhyUs from '../index/why us/WhyUs'
import FAQs from '../index/faqs/FAQs'

const page = () => {
  return (
    <div>
        <div>
            <LandingPage />
        </div>
        <div>
          <Mission /> 
        </div>
        <div>
          <StoreImages />
        </div>
        <div>
          <Vision />
        </div>
        <div>
          <WhyUs />
        </div>
        <div>
          <FAQs />
        </div>
    </div>
  )
}

export default page