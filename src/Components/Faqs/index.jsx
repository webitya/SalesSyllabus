import FAQPageEl from "../../Elements/FaqsEl"
import FooterEl from "../../Shared/FooterEl"
import LayoutEl from "../../Shared/LayoutEl"



const Faqs=()=>{
    const display=(
        <>
          <LayoutEl>
             <FAQPageEl/>
             <FooterEl/>
          </LayoutEl>
        </>
    )
    return display
}
export default Faqs