import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import BodySection from "./components/BodySection/BodySection";
import DeliverySection from "./components/DeliverySection/DeliverySection";
import Footer from "./components/Footer/Footer";
import MobileAppSection from "./components/MobileAppSection/MobileAppSection";
import Navbar from "./components/Navbar/Navbar";
import PromotionSection from "./components/PromotionSection/PromotionSection";
export default function Home() {
  return (

    <>
      <Navbar></Navbar>
      <BodySection></BodySection>
      <BenefitsSection></BenefitsSection>
      <MobileAppSection></MobileAppSection>
      <PromotionSection></PromotionSection>
      <DeliverySection></DeliverySection>
      <Footer></Footer>
    </>

  );
}