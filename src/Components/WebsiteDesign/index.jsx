import WebsiteDesignFeatures from "../../Elements/WebsiteEl/WebFeat"
import WebsiteDesignHero from "../../Elements/WebsiteEl/WebHero"
import Testimonials from "../../Elements/WebsiteEl/WebTest"
import LayoutEl from "../../Shared/LayoutEl"




const WebsiteDesign=()=>{
    const display=(
        <>
           <LayoutEl>
              <WebsiteDesignHero/>
              <WebsiteDesignFeatures/>
              {/* <Testimonials/> */}
           </LayoutEl>
        </>
    )
    return display
}
export default WebsiteDesign