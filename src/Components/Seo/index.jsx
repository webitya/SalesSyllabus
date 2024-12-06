import BenefitsB2B from "../../Elements/SeoEl/SeoBenefits"
import DataDrivenInsights from "../../Elements/SeoEl/SeoData"
import SeoHero from "../../Elements/SeoEl/SeoHero"
import WhatWeOffer from "../../Elements/SeoEl/SeoOffer"
import StagesOfSEO from "../../Elements/SeoEl/SeoStrate"
import ClientTestimonials from "../../Elements/SeoEl/SeoTest"
import LayoutEl from "../../Shared/LayoutEl"



const Seo=()=>{
    const display=(
        <>
          <LayoutEl>
             <SeoHero/>
             <WhatWeOffer/>
             <StagesOfSEO/>
             <BenefitsB2B/>
             <DataDrivenInsights/>
             {/* <ClientTestimonials/> */}
          </LayoutEl>
        </>
    )
    return display
}
export default Seo