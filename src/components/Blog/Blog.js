import React from 'react';

const Blog = () => {
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <h1 className='text-4xl text-center font-bold my-10 text-gray-800'>Blogs</h1>
      <div className='p-5 bg-blue-100 rounded-lg'>
        <h1 className='text-2xl font-semibold mt-3 mb-7'>Q-1: What is the purpose of React Router?</h1>
        <p><code>React Router</code> is mainly used for developing Single Page Web Applications. <code>React Router</code> is also used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any <code>'route'</code> inside the router file, the user will be redirected to that particular route.</p>
      </div>
      <div className='p-5 bg-blue-100 rounded-lg my-8'>
        <h1 className='text-2xl font-semibold mt-3 mb-7'>Q-2: How Does Context API Works?</h1>
        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
      </div>
      <div className='p-5 bg-blue-100 rounded-lg'>
        <h1 className='text-2xl font-semibold mt-3 mb-7'>Q-3: What is the use of useRef Hook in React?</h1>
        <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
      </div>
    </div>
  );
};

export default Blog;