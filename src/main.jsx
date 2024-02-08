import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewClient, { action as newClientAction } from './pages/NewClient'
import Index, { loader as loaderIndex } from './pages/Index'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    {
      index: true,
      element: <Index></Index>,
      loader: loaderIndex
    },
    {
      path: '/clients/new',
      element: <NewClient></NewClient>,
      action: newClientAction
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
