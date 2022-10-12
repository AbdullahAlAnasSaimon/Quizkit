import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
  window.scrollTo(0, 0);
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
      <ToastContainer />
    </div>
  );
};


const Question = ({ questionObj }) => {
  const [show, setShow] = useState(true);
  const { correctAnswer, options, question } = questionObj;

  const toggleShow = () => {
    setShow(!show);
  }

  let questions = question.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div>
      <div className='my-10 border-2 border-blue-300 rounded-lg py-4'>
        <div className='flex justify-between items-center w-11/12 mx-auto mt-4 mb-6'>
          <div className='text-2xl font-semibold w-11/12'>{questions}</div>
          <button onClick={toggleShow}>
            <FontAwesomeIcon icon={show ? faEye : faEyeSlash} className="p-2 bg-gray-100 hover:bg-slate-200 rounded-full"></FontAwesomeIcon>
          </button>
        </div>
        {
          options.map((option, index) => <Option
            key={index}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>)
        }
        <div className={`mx-8 mt-8 ${show ? show : 'p-4'} bg-green-300 rounded-lg`}>
          {show ? show : <span className='font-semibold'>Correct Answer : </span>}
          {show ? show : correctAnswer}
        </div>
      </div>
    </div>
  );
};



const Option = ({ option, correctAnswer }) => {

  const handleButtonClick = (event) => {
    const questionInnerText = event.target.innerText.trim();
    const correctAnswer2 = correctAnswer.replace(/\s+/g, ' ').trim();
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
    } else {
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
    }
  }

  return (
    <div className='my-2 rounded-md overflow-hidden'>
      <button id='quiz-btn' onClick={handleButtonClick} className='text-left mx-8 p-2 bg-slate-100 w-11/12 rounded-md'>
        {option.trim()}
      </button>
    </div>
  );
}




export default Quiz;