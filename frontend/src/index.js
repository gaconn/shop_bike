import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainLayout from './Views/Layouts/MainLayout';
import ErrorComponent from './Views/Components/ErrorComponent';
import Home from './Views/Pages/Home';
import { ROUTES } from './Common/Const';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);