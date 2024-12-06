import BlogCards from "../../Elements/BlogCards"
import BlogPageEl from "../../Elements/BlogForm"
import FooterEl from "../../Shared/FooterEl"
import LayoutEl from "../../Shared/LayoutEl"



const Blogs=()=>{
    const display=(
        <>
          <LayoutEl>
             <BlogCards/>
             <BlogPageEl/>
             <FooterEl/>
          </LayoutEl>
        </>
    )
    return display
}
export default Blogs