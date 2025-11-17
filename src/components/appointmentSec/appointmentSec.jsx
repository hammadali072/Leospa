import React from 'react';

import ContactImage from '../../assets/cta-img.webp';

const AppointmentSec = () => {
    return (
        <div className="relative flex items-center bg-primaryLight md:mb-12 xl:py-12">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:w-2/5 h-full overflow-hidden lg:block hidden">
                <img className='w-full h-auto object-cover' src={ContactImage} alt="contact image" />
            </div>
            <div className="container">
                <div className="lg:flex lg:justify-end lg:pl-[100px] lg:py-12 py-6">
                    <form action="" className='grid grid-cols-2 gap-x-3 gap-y-6 lg:w-3/5'>
                        <input
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full placeholder:text-[#999999] focus:outline-none'
                            type="text"
                            name="firstName"
                            placeholder="Name"
                            required
                        />
                        <input
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full placeholder:text-[#999999] focus:outline-none'
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                        />
                        <select
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full placeholder:text-[#999999] focus:outline-none'
                            name="service"
                        >
                            <option value="">Select service</option>
                            <option value="Service 1">Service 1</option>
                            <option value="Service 2">Service 2</option>
                            <option value="Service 3">Service 3</option>
                        </select>
                        <input
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full placeholder:text-[#999999] focus:outline-none'
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                        />
                        <input
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full placeholder:text-[#999999] focus:outline-none'
                            type="date"
                            name="date"
                        />
                        <input
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full placeholder:text-[#999999] focus:outline-none'
                            type="time"
                            name="time"
                        />
                        <textarea
                            className='py-2.5 px-2 border-b border-[#d4d3d3] bg-transparent lg:text-base text-sm text-[#999999] w-full col-span-2 placeholder:text-[#999999] focus:outline-none'
                            name="notes"
                            placeholder="Your notes"
                        />
                        <button type="submit" className="px-6 py-3 rounded-full lg:text-base text-sm font-medium transition duration-300 w-fit bg-primary border-2 border-transparent text-white hover:bg-transparent hover:border-primary hover:text-primary">
                            Make an Appointment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentSec;
