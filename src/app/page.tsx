import Banner from "@/components/Banner";
import CausesSection from "@/components/CausesSection";
import DonationForm from "@/components/DonationForm";
import HealthPartners from "@/components/HealthPartners";
import PopularCategories from "@/components/PopularCategories";
import TrendingFundraisers from "@/components/TrendingFundraisers";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Main content */}
      <Banner />
      <TrendingFundraisers />
     {/* <DonationForm /> */}
      <CausesSection />
      <HealthPartners />
      <PopularCategories />
      {/* Footer */}
     
    </div>
  );
}
