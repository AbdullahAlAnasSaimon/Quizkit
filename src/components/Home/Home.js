import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Topics from '../Topics/Topics';

const Home = () => {
  const topics = useLoaderData();
  // console.log(topics.data);
  return (
    <div>
      <Hero></Hero>
      <Topics topics={topics.data}></Topics>
    </div>
  );
};

export default Home;