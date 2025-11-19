import HeroSec2 from '../components/heroSec/heroSec2'
import AboutSec2 from '../components/aboutSec/aboutSec2'
import EmpowerSkinSec from '../components/empowerSkinSec/empowerSkinSec'
import NewsletterSec from '../components/newsletterSec/newsletterSec'
import ServiceSec from '../components/serviceSec/serviceSec'
import SkinProductSec from '../components/skinCareProductsSec/skinProductSec'
import TeamSec from '../components/teamSec/teamSec'
import TestimonialSec from '../components/testimonialSec/testimonialSec'

const AboutPage = () => {
    return (
        <>
            <HeroSec2
                heading="About Us"
                Link="/about"
                pageText="About Us"
            />
            <AboutSec2 />
            <ServiceSec />
            <EmpowerSkinSec />
            <SkinProductSec />
            <TestimonialSec />
            <TeamSec />
            <NewsletterSec />
        </>
    )
}

export default AboutPage
