import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quizkit = useLoaderData();

  const { name, total, questions } = quizkit.data;

  return (
    <div>
      <h2 className='text-4xl text-center font-semibold my-5'>{name} Quizes</h2>
      <p className='text-center my-5'>Total Quiz : {total}</p>
      <div className='w-8/12 mx-auto'>
        {
          questions.map(question => <Question
            key={question.id}
            questionObj={question}
          ></Question>)
        }
      </div>
    </div>
  );
};

const Question = ({ questionObj }) => {
  console.log(questionObj);
  const { id, correctAnswer, options, question } = questionObj;

  let questions = question.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div>
      <div className='my-10 border-2 border-blue-300 py-4 pb-8'>
        <div className='mb-8 mt-4 mx-8 text-2xl font-semibold'>{questions}</div>
        {
          options.map((option, index) => <Option
            key={index}
            option={option}
          ></Option>)
        }
      </div>
    </div>
  );
};

const Option = ({ option }) => {
  return (
    <div className='my-2 rounded-md overflow-hidden'>
      <button className='mx-8 p-2 bg-slate-100 w-11/12 rounded-md'>
        <div className='text-left'>{option}</div>
      </button>
    </div>
  );
}

export default Quiz;