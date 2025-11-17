import React from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { List } from 'phosphor-react';
import { menuData } from '../../Data';

import brandLogo from '../../assets/brand-logo.webp';

const Header = () => {

    const location = useLocation();

    const textColor = (item) => {
        if (location.pathname === item.to) {
            return 'text-primary'
        } else if (location.pathname === '/') {
            return 'text-white hover:text-primary'
        }
        else {
            return 'text-black hover:text-primary'
        }
    }

    return (
        <>
            <div className='alert_otr overflow-hidden'>
                <div className='flex gap-x-16 flex-nowrap items-center bg-lightPink10 group'>
                    <div className='flex gap-x-16 flex-nowrap items-center my-2 animate-slide group-hover:[animation-play-state:paused]'>
                        {[...Array(5)].map((_, i) => (
                            <p key={i} size='small' className='text-black text-nowrap lg:text-sm text-xs font-normal tracking-[0.5px]'>Free Shipping over $50! Return are always on us</p>
                        ))}
                    </div>
                    <div className='flex gap-x-16 flex-nowrap items-center my-2 animate-slide group-hover:[animation-play-state:paused]'>
                        {[...Array(5)].map((_, i) => (
                            <p key={i} size='small' className='text-black text-nowrap lg:text-sm text-xs font-normal tracking-[0.5px]'>Free Shipping over $50! Return are always on us</p>
                        ))}
                    </div>
                </div>
            </div>
            <header className={clsx("header", "absolute top-10 left-0 w-full h-auto z-50")}>
                <div className="container">
                    <div className="flex lg:items-end items-center justify-between py-2">
                        <Link to='/'>
                            <img className='lg:w-28 w-20 h-auto' src={brandLogo} alt="Brand LOGO" />
                        </Link>
                        <ul className='hidden lg:flex items-center gap-10'>
                            {menuData.map((item, index) => (
                                <li key={index}>
                                    <Link className={clsx("lg:text-base text-sm uppercase", textColor(item), "duration-300")} to={item.to}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex lg:hidden'>
                            <List size={24} weight='bold' className={clsx(location.pathname === "/" ? "text-white" : "text-black", "duration-300 hover:text-primary")} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
