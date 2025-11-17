import React from 'react'

import TitleComponent from '../TitleComponent/TitleComponent'

const ProductBenefit = ({ props }) => {
    return (
        <div className='benefit_card flex sm:flex-col sm:justify-center items-center gap-4 sm:text-center'>
            <div>
                <img className='benefit_card_img md:w-16 md:h-16 w-14 h-14 object-contain' src={props.img} alt="img" />
            </div>
            <div>
                <TitleComponent type='h5' size='base' className='benefit_card_title sm:mb-2 text-black font-bold'>{props.heading}</TitleComponent>
                <TitleComponent size='base' className='benefit_card_desc text-black'>{props.desc}</TitleComponent>
            </div>
        </div>
    )
}

export default ProductBenefit
