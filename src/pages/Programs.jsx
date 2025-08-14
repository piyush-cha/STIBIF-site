import TopCarousel from "../components/TopCarousal"
import HeroSection from "../components/HeroSection"
import ProgramsSection from "../components/ProgramsSection"
// import ApplicationProcess from "../components/ApplicationProcess"
import PartnershipBenefits from "../components/PartnershipBenefits"
import PartnersSection from "../components/PartnersSection"
import MembersSection from "../components/MembersSection"

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "100vh", marginTop: "120px" }}>

      <ProgramsSection />
      {/* <ApplicationProcess /> */}
     

    </div>
  )
}

export default Home
