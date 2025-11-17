import React from 'react'
import { productBenefitsData } from '../../Data'
import ProductBenefit from './productBenefit'

const ProductBenefitsSec = () => {
    return (
        <section className='xl:py-[88px] py-16'>
            <div className="container">
                <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-5 items-center'>
                    {productBenefitsData.map((item, index) => (
                        <ProductBenefit key={index} props={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductBenefitsSec
