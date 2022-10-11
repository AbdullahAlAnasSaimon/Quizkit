import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quizkit = useLoaderData();
  // console.log(quizkit.data);
  // console.log(quizkit.data.questions);
  const {name, total, questions} = quizkit.data;
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

const Question = ({questionObj}) =>{
  console.log(questionObj);
  const {id, correctAnswer, options, question} = questionObj;

  let questions = question.replace(/<\/?[^>]+(>|$)/g, "");
   
  return (
    <div>
      <div className='text-center'>{questions}</div>
      <div>
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

const Option = ({option}) =>{
  return (
    <div>
      {option}
    </div>
  );
}

export default Quiz;