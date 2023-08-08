import React from 'react'
import './styles/global.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import GroupPage from './pages/GroupPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home/:userId",
    element: <HomePage />,
  },
  {
    path: "/home/:userId/:groupId",
    element: <GroupPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
