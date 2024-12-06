import UserFeedback from "../../Elements/A2Resources/A2ResFeedback"
import HeroSection from "../../Elements/A2Resources/A2ResHero"
import IndustryResourcesSection from "../../Elements/A2Resources/A2ResIndustry"
import RecentlyAddedResources from "../../Elements/A2Resources/A2ResRecent"
import FooterEl from "../../Shared/FooterEl"
import LayoutEl from "../../Shared/LayoutEl"




const Resources=()=>{
    const display=(
        <>
           <LayoutEl>
            <HeroSection/>
            <IndustryResourcesSection/>
            {/* <RecentlyAddedResources/> */}
            {/* <UserFeedback/> */}
            <FooterEl/>
           </LayoutEl>
        </>
    )
    return display
}
export default Resources