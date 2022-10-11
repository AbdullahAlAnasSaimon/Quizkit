import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Quizes from "../components/Quizes/Quizes";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/home',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/quizes',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Quizes></Quizes>
      },
      {
        path: '/quizes/:quizId',
        loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <Quiz></Quiz>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);