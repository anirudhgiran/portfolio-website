import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

import './fontAwesome';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
