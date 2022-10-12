import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Quizes = ({ quizkit }) => {
  const quizes = useLoaderData();
  if(quizkit){
    return ;
  }
  else{
    return (
      <div className='w-10/12 mx-auto'>
        <h1 className='text-4xl font-bold text-center my-10 text-gray-800'>Start Quizzes</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {
            quizes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
          }
        </div>
      </div>
    );
  }
  
};

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className='flex justify-between m-5 p-4 bg-blue-50 border-2 border-blue-100 rounded-lg'>
      <div>
        <h2 className='text-3xl font-semibold'>{name}</h2>
        <p className='my-2 text-sm'>Total Quiz: {total}</p>
        <Link to={`/quizes/${id}`} className='mt-2 py-1 px-3 bg-blue-600 text-white inline-block rounded-md hover:bg-blue-500 duration-200 ease-in-out'>Start Quiz &rarr;</Link>
      </div>
      <div className='w-28 bg-slate-800 rounded-lg'>
        <img className='rounded-lg h-full' src={logo} alt="" />
      </div>
    </div>
  );
}

export default Quizes;