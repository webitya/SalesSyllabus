import CaseStudiesEl from "../../Elements/CaseStudiesEl"
import FooterEl from "../../Shared/FooterEl"
import LayoutEl from "../../Shared/LayoutEl"



const CaseStudies=()=>{
    const display=(
        <>
          <LayoutEl>
             <CaseStudiesEl/>
             <FooterEl/>
          </LayoutEl>
        </>
    )
    return display
}
export default CaseStudies