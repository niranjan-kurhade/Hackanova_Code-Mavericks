import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//import './blogid.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const Blogid = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/blogHome' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Navigate to='/' />
      </Routes>
    </div>
  );
};

export default Blogid;
