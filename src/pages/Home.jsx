import TopCarousel from "../components/TopCarousal"
import HeroSection from "../components/HeroSection"
import ProgramsSection from "../components/ProgramsSection"
// import ApplicationProcess from "../components/ApplicationProcess"
import PartnershipBenefits from "../components/PartnershipBenefits"
import PartnersSection from "../components/PartnersSection"
import MembersSection from "../components/MembersSection"

const Home = () => {
  return (
    <div>
      <TopCarousel />
      <HeroSection />
      <ProgramsSection />
      {/* <ApplicationProcess /> */}
      <PartnershipBenefits />
      <PartnersSection />
      <MembersSection />
    </div>
  )
}

export default Home
