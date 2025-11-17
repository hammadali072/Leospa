import AboutSec from "../components/aboutSec/aboutSec"
import HeroSec from "../components/heroSec/heroSec"
import ServiceSec from "../components/serviceSec/serviceSec"
import TeamSec from "../components/teamSec/teamSec"
import TestimonialSec from "../components/testimonialSec/testimonialSec"
import BestProductsSec from "../components/bestProductsSec/bestProductsSec"
import EmpowerSkinSec from "../components/empowerSkinSec/empowerSkinSec"
import SkinProductSec from "../components/skinCareProductsSec/skinProductSec"
import NewsletterSec from "../components/newsletterSec/newsletterSec"
import ProductBenefitsSec from "../components/productBenefitsSec/productBenefitsSec"
import PopularCollection from "../components/popularCollection/popularCollection"
import NewBeautyProducts from "../components/newBeautyProducts/newBeautyProducts"
import ProductShowcaseSec from "../components/productShowcaseSec/productShowcaseSec"

const HomePage = () => {
    return (
        <>
            <HeroSec />
            <EmpowerSkinSec />
            <SkinProductSec />
            <AboutSec />
            <ServiceSec />
            <TeamSec />
            <BestProductsSec />
            <ProductShowcaseSec />
            <PopularCollection />
            <NewBeautyProducts />
            <TestimonialSec />
            <ProductBenefitsSec />
            <NewsletterSec />
        </>
    )
}

export default HomePage
