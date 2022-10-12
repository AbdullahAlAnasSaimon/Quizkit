import React from 'react';
import ErrorPage from '../../images/404-Error.gif';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-xl md:text-6xl font-bold'>Ops! Page Not Found.</h1>
      <div>
        <img className='mt-2' src={ErrorPage} alt="" />
      </div>
    </div>
  );
};

export default Error;