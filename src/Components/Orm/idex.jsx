import OrmB2BSection from "../../Elements/OrmEl/OrmB2B"
import BenefitsOfORMSection from "../../Elements/OrmEl/OrmBenefits"
import OrmContentSection from "../../Elements/OrmEl/OrmContent"
import OnlineReputationManagementChart from "../../Elements/OrmEl/OrmGraph"
import GraphSection from "../../Elements/OrmEl/OrmGraph2"
import OnlineReputationSection2 from "../../Elements/OrmEl/OrmH2"
import OrmHero from "../../Elements/OrmEl/OrmHero"
import OrmMonitoringSection from "../../Elements/OrmEl/OrmMonitor"
import OrmServicesSection from "../../Elements/OrmEl/OrmService"
import ORMImportanceSection from "../../Elements/OrmEl/OrmWhy/indeex"
import LayoutEl from "../../Shared/LayoutEl"



const Orm=()=>{
    const display=(
        <>
           <LayoutEl>
               <OrmHero/>
               <OnlineReputationSection2/>
               <GraphSection/>
               {/* <OrmContentSection/> */}
               <ORMImportanceSection/>
               
               <OnlineReputationManagementChart/>
               <BenefitsOfORMSection/>
               <OrmMonitoringSection/>
           </LayoutEl>
        </>
    )
    return display
}
export default Orm