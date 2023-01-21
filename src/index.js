import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >

  <Route index element={<Home />} />
  <Route path='/movies' element={<Movies />} />
  <Route path='/tvseries' element={<TVSeries />} />
  <Route path='/upcoming' element={<Upcoming />} />

  <Route path="*" element={<NotFound />} />   
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

