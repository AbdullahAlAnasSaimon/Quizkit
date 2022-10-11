import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Quizes from '../Quizes/Quizes';

const Home = () => {
  const quizes = useLoaderData();
  // console.log(topics.data);
  return (
    <div>
      <Hero></Hero>
      <Quizes quizes={quizes.data}></Quizes>
    </div>
  );
};

export default Home;