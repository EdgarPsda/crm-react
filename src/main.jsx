import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewClient, { action, action as newClientAction } from './pages/NewClient'
import Index, { loader as loaderIndex } from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditClient, { loader as loaderEditClient, action as actionEditClient } from './pages/EditClient'
import { action as actionDeleteClient } from './components/Client'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    {
      index: true,
      element: <Index></Index>,
      loader: loaderIndex,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/clients/new',
      element: <NewClient></NewClient>,
      action: newClientAction,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/clients/:id/edit',
      element: <EditClient></EditClient>,
      loader: loaderEditClient,
      errorElement: <ErrorPage></ErrorPage>,
      action: actionEditClient
    },
    {
      path: '/clients/:id/delete',
      action: actionDeleteClient
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
