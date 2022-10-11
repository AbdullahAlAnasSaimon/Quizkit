import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer/>
    </div>
  );
};

const Question = ({ questionObj }) => {
  // const [ans, setAns] = useState('');
  // console.log(questionObj);
  const { correctAnswer, options, question } = questionObj;
  // setAns(correctAnswer);
  let questions = question.replace(/<\/?[^>]+(>|$)/g, "");



  
  return (
    <div>
      <div className='my-10 border-2 border-blue-300 rounded-lg py-4 pb-8'>
        <div className='mb-8 mt-4 mx-8 text-2xl font-semibold'>{questions}</div>
        {
          options.map((option, index) => <Option
            key={index}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>)
        }
      </div>
    </div>
  );


};



const Option = ({ option, correctAnswer }) => {

  const handleButtonClick = (event) =>{
    const questionInnerText = event.target.innerText;
    if(questionInnerText === correctAnswer){
      event.target.classList.add('bg-green-300');
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
    }else{
      event.target.classList.add('bg-red-300');
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
      <button id='quiz-btn' className='text-left mx-8 p-2 bg-slate-100 w-11/12 rounded-md' onClick={handleButtonClick}>
        {option}
      </button>
    </div>
  );
}

export default Quiz;