import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Topics = ({ topics }) => {
  const quizes = useLoaderData();
  console.log(quizes.data);
  if(topics){
    return (
      <div>
        <h1 className='text-4xl font-bold text-center my-5'>Start Quizzes</h1>
        <div className='grid grid-cols-2 w-11/12 mx-auto'>
          {
            topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
          }
        </div>
      </div>
    );
  }
  else{
    return (
      <div className='w-10/12 mx-auto'>
        <div className='grid grid-cols-2'>
          {
            quizes.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
          }
        </div>
      </div>
    );
  }
  
};

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className='flex justify-between m-5 p-4 bg-blue-100 shadow-lg rounded-lg'>
      <div>
        <h2 className='text-3xl font-semibold my-2'>{name}</h2>
        <p className='my-2'>Total Quiz: {total}</p>
        <Link className='py-1 px-3 bg-blue-400 my-3 rounded-md hover:bg-blue-500'>Start Quiz &rarr;</Link>
      </div>
      <div className='w-3/12 bg-slate-800 rounded-lg'>
        <img className='rounded-lg' src={logo} alt="" />
      </div>
    </div>
  );
}

export default Topics;