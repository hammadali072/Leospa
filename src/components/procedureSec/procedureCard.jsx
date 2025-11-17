import { Link } from 'react-router-dom';
import ThemeButton from '../themeButton/themeButton';
import TitleComponent from '../titleComponent/titleComponent';

const ProcedureCard = ({ data }) => {
    return (
        <div className='rounded-lg border border-grey100 p-5 text-center duration-300 hover:shadow-shadow1 group'>
            <Link className='flex rounded-lg mb-9 overflow-hidden' to='/'>
                <img className='w-full aspect-blogImg2 object-cover duration-300 group-hover:scale-110' src={data.image} alt="Post img" />
            </Link>
            <Link className='text-[24px] leading-[120%] font-bold font-Merriwheather tracking-[0.5px] text-black mb-5 duration-300 hover:text-primary' to='/'>{data.heading}</Link>
            <TitleComponent size='base' className='text-textColor mb-10'>{data.description}</TitleComponent>
            <ThemeButton variant='primary'>Read More</ThemeButton>
        </div>
    )
}

export default ProcedureCard
