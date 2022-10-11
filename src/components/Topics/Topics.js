import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = ({ topics }) => {
  const quizes = useLoaderData();
  console.log(quizes.data);
  if(topics){
    return (
      <div>
        <h1 className='text-4xl font-bold text-center my-5'>Start Quizzes</h1>
        <div>
          {
            topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
          }
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
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
    <div className='flex'>
      <div>
        <h2>{name}</h2>
        <p>{total}</p>
        <button>Start Quiz</button>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Topics;