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
        <h1 className='text-4xl font-bold text-center my-5'>Start Quizzes</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {
            quizes.data.map(quiz => <Topic key={quiz.id} topic={quiz}></Topic>)
          }
        </div>
      </div>
    );
  }
  
};

const Topic = ({ topic: quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className='flex justify-between m-5 p-4 border-2 border-blue-200 shadow-lg rounded-lg'>
      <div>
        <h2 className='text-3xl font-semibold my-2'>{name}</h2>
        <p className='my-2'>Total Quiz: {total}</p>
        <Link to={`/quizes/${id}`} className='py-1 px-3 bg-blue-400 inline-block rounded-md hover:bg-blue-500'>Start Quiz &rarr;</Link>
      </div>
      <div className='w-28 bg-slate-800 rounded-lg'>
        <img className='rounded-lg h-full' src={logo} alt="" />
      </div>
    </div>
  );
}

export default Quizes;