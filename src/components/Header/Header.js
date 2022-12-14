import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto bg-white shadow-lg py-1 px-2 mt-2 rounded-lg sticky top-1 z-10'>
      <div className='w-12'>
        <Link to='/home' className='flex justify-center md:justify-start items-center'>
          <img src={Logo} alt="Brand Logo" />
          <h1 className='text-3xl font-bold text-blue-600'>QuizKit</h1>
        </Link>
      </div>
      <div className='text-md py-4 md:py-0'>
        <Link className='mx-0 md:mx-2 px-3 py-2 text-blue-500 font-medium hover:bg-blue-50 rounded-md duration-300 ease-in-out	' to='/home'>Home</Link>
        <Link className='mx-0 md:mx-2 px-3 py-2 text-blue-500 font-medium hover:bg-blue-50 rounded-md duration-300 ease-in-out	' to='/quizes'>Quizes</Link>
        <Link className='mx-0 md:mx-2 px-3 py-2 text-blue-500 font-medium hover:bg-blue-50 rounded-md duration-300 ease-in-out	' to='/statistics'>Statistics</Link>
        <Link className='mx-0 md:mx-2 px-3 py-2 text-blue-500 font-medium hover:bg-blue-50 rounded-md duration-300 ease-in-out	' to='/blog'>Blog</Link>
      </div>
    </div>
  );
};

export default Header;