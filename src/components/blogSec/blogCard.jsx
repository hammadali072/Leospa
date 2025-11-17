import React from 'react';
import { Link } from 'react-router-dom';
import { User, CalendarCheck } from 'phosphor-react';

import ThemeButton from '../themeButton/themeButton';
import TitleComponent from '../titleComponent/titleComponent';

const BlogCard = ({ data }) => {
    return (
        <div className='border border-grey100 lg:p-5 p-3.5 duration-300 rounded-lg overflow-hidden hover:shadow-shadow1 group'>
            <Link className='flex rounded-lg overflow-hidden' to='/'>
                <img className='w-full aspect-[4/3] h-auto object-cover duration-300 group-hover:scale-110' src={data.image} alt="Post img" />
            </Link>
            <div className='pt-5'>
                <ul className="flex items-center gap-10">
                    <li className="flex items-center gap-2">
                        <div className="flex justify-center items-center">
                            <User className='text-primary' size={20} weight='bold' />
                        </div>
                        <Link to="#" className="text-textColor md:text-base text-sm font-medium duration-300 hover:text-primary">{data.user}</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="flex justify-center items-center">
                            <CalendarCheck className='text-primary' size={20} weight='bold' />
                        </div>
                        <TitleComponent size='small-medium' className="text-textColor md:text-base">{data.datePosted}</TitleComponent>
                    </li>
                </ul>
                <Link className='my-5 text-black md:text-2xl text-xl leading-[120%] font-Merriwheather font-bold tracking-[0.5px] duration-300 hover:text-primary' to='/'>{data.heading}</Link>
                <TitleComponent size='base' className='text-textColor mb-5'>{data.description}</TitleComponent>
                <ThemeButton variant='underline'>Read More</ThemeButton>
            </div>
        </div>
    )
}

export default BlogCard
