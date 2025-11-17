import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { List } from 'phosphor-react';
import { menuData } from '../../Data';

import brandLogo from '../../assets/brand-logo.svg';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const textColor = (item) => {
        if (location.pathname === item.to) {
            return 'text-primary font-semibold'
        } else if (location.pathname === '/' && !isScrolled) {
            return 'text-white hover:text-primary'
        }
        else {
            return 'text-black hover:text-primary'
        }
    }

    const mobileIconColor = () => {
        if (location.pathname === '/' && !isScrolled) {
            return 'text-white';
        }
        return 'text-black';
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
            <header className={clsx(
                "header z-50 duration-300",
                isScrolled
                    ? "fixed top-0 left-0 w-full bg-white shadow-md"
                    : "absolute top-10 left-0 w-full"
            )}>
                <div className="container">
                    <div className="flex items-center justify-between py-4">
                        <Link to='/' className="relative z-10">
                            <img
                                className='xl:w-48 w-32 h-auto'
                                src={brandLogo}
                                alt="Brand LOGO"
                            />
                        </Link>
                        <ul className='hidden lg:flex items-center gap-10'>
                            {menuData.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={clsx(
                                            "relative lg:text-base text-sm uppercase duration-300",
                                            "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                                            textColor(item),
                                            location.pathname === item.to ? "after:w-full" : "hover:after:w-full"
                                        )}
                                        to={item.to}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex lg:hidden'>
                            <List
                                size={24}
                                weight='bold'
                                className={clsx(mobileIconColor(), "duration-300 hover:text-primary")}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header