import React from 'react';
import HeroImg from '../../images/Saly.png'

const Hero = () => {
  return (
    <div className='w-11/12 mx-auto mt-16 flex'>
      <div className='w-6/12 my-20'>
        <h1 className='text-4xl font-semibold leading-tight'>Where Motivation Meets Mastary To Make Learning Awesome</h1>
        <p className='pl-5 my-5 border-l-2 border-blue-400 text-gray-500'>Play online Web Development quizzes. There is a fun quiz about imaginable: HTML, CSS, Javascript, React, ExpressJs and more!</p>
        <div className='mt-7'>
          <button className='mr-7 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full duration-300 ease-in-out'>Explore Quizzes &rarr;</button>
          <button className='mr-7 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-full duration-300 ease-in-out'>Watch Demo &#9658;</button>
        </div>
      </div>
      <div className='w-6/12'>
        <img className='w-9/12' src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;