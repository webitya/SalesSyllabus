import CommunityMarketingChart from "../../Elements/BrandingEl/BrandGraph"
import BrandHero from "../../Elements/BrandingEl/BrandHero"
import Testimonials from "../../Elements/BrandingEl/BrandTest"
import WhatWeOffer from "../../Elements/BrandingEl/BrandWhat"
import WhyB2B from "../../Elements/BrandingEl/BrandWhyB2B"
import LayoutEl from "../../Shared/LayoutEl"



const Branding=()=>{
      const display=(
        <>
          <LayoutEl>
           <BrandHero/>
           <WhatWeOffer/>
           <CommunityMarketingChart/>
           <WhyB2B/>
           
           {/* <Testimonials/> */}
          </LayoutEl>
        </>
      )
      return display
}
export default Branding