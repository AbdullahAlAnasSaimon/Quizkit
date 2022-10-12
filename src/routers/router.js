import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Quizes from "../components/Quizes/Quizes";
import Statistics from "../components/Statistics/Statistics";
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
      }, 
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);