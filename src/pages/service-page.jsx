import HeroSec2 from '../components/heroSec/heroSec2';
import AppointmentSec from '../components/appointmentSec/appointmentSec';
import NewsletterSec from '../components/newsletterSec/newsletterSec';
import ProcedureSec from '../components/procedureSec/procedureSec';
import ProductBenefitsSec from '../components/productBenefitsSec/productBenefitsSec';
import ServiceSec from '../components/serviceSec/serviceSec';
import TestimonialSec from '../components/testimonialSec/testimonialSec';

const ServicePage = () => {
    return (
        <>
            <HeroSec2
                heading="Our Services"
                Link="/serivices"
                pageText="Services"
            />
            <ProcedureSec />
            <AppointmentSec />
            <ServiceSec />
            <TestimonialSec />
            <ProductBenefitsSec />
            <NewsletterSec />
        </>
    )
}

export default ServicePage
