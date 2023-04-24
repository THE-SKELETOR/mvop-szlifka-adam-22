import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import Stuff from './routes/tictactoe/stuff'
import JanKenPo from './routes/jankenpo/game'
import NumberGuess from './routes/numberguess/game'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/stuff',
        element: <Stuff />
      },
      {
        path: '/jankenpo',
        element: <JanKenPo />
      },
      {
        path: '/numberguess',
        element: <NumberGuess />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
