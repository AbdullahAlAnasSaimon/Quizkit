import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
// set state for update answer count
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const trueValue = (value) =>{
    setCount(count + value);
  }
  const falseValue = (value) =>{
    setCount2(count2 + value);
  }
// receiving data from api
  const quizkit = useLoaderData();
  const { name, total, questions } = quizkit.data;

  return (
    <div>
      <h2 className='text-4xl text-center font-semibold my-5'>{name} Quizes</h2>
      <p className='text-center my-5'>Total Quiz : {total}</p>
      <div className='text-center border-2 bg-blue-200 border-blue-300 w-8/12 mx-auto p-2 rounded-lg'>
        <p className='text-lg font-semibold my-2'>Correct Answer: {count}</p>
        <p className='text-lg font-semibold my-2'>Wrong Answer: {count2}</p>
      </div>
      <div className='w-11/12 md:w-8/12 mx-auto'>
        {
          questions.map(question => <Question
            key={question.id}
            questionObj={question}
            trueValue={trueValue}
            falseValue={falseValue}
          ></Question>)
        }
      </div>
      <ToastContainer />
    </div>
  );
};

// question component
const Question = ({ questionObj, trueValue, falseValue }) => {
  // state for toggoler
  const [show, setShow] = useState(true);
  const { id, correctAnswer, options, question } = questionObj;

  const toggleShow = () => {
    setShow(!show);
  }
// remove p tag from questions
  let questions = question.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div>
      <div className='my-10 border-2 border-blue-300 rounded-lg py-4'>
        <div className='flex justify-between items-center w-11/12 mx-auto mt-4 mb-6'>
          <div className='text-lg md:text-2xl font-semibold w-11/12'>{questions}</div>
          {/* <div>{count}</div> */}
          <button onClick={toggleShow}>
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} className="p-2 bg-gray-100 hover:bg-slate-200 rounded-full"></FontAwesomeIcon>
          </button>
        </div>
        <div id={id}>
          {
            options.map((option, index) => <Option
              key={index}
              option={option}
              correctAnswer={correctAnswer}
              trueValue={trueValue}
              falseValue={falseValue}
            ></Option>)
          }
        </div>
        <div className={`mx-8 mt-8 ${show ? show : 'p-4'} bg-green-300 rounded-lg`}>
          {show ? show : <span className='font-semibold'>Correct Answer : </span>}
          {show ? show : correctAnswer}
        </div>
      </div>
    </div>
  );
};

// option component for show the answer option
const Option = ({ option, correctAnswer, trueValue, falseValue }) => {

  const handleButtonClick = (event) => {

    const questionInnerText = event.target.innerText.trim();
    const correctAnswer2 = correctAnswer.replace(/\s+/g, ' ').trim();
    
    const htg = event.target.innerText
    event.target.parentNode.childNodes.forEach(node => {
      if(htg !== node.innerText){
        node.setAttribute("disabled", true);
        node.classList.add('bg-gray-200', 'text-gray-400');
      }
    })

    // implement true condition
    if (questionInnerText === correctAnswer2) {
      event.target.classList.add('bg-green-300');
      event.target.classList.remove('bg-slate-100');
      const notify = () => toast.success('Answer is Correct!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      notify();
      trueValue(1);
    }
    // implement false condition
    else {
      event.target.classList.add('bg-red-300');
      event.target.classList.remove('bg-slate-100');
      const notify = () => toast.error('Wrong Answer!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      notify();
      falseValue(1);
    }
  }

  return (
    <button id='quiz-btn' onClick={handleButtonClick} className='my-1 text-left mx-4 md:mx-8 p-2 pl-4 bg-slate-100 w-11/12 md:w-11/12 rounded-lg'>
      {option}
    </button>
  );
}


export default Quiz;