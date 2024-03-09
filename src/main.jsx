import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import AllMeal from './components/meal/AllMeal/AllMeal.jsx'
import Contact from './components/contact/Contact.jsx'
import MealInfo from './components/home/mealInfo/MealInfo.jsx'
 

const route = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children : [
      {
        path: '/allmeal',
        element :<AllMeal></AllMeal>
      },
      {
        path : '/mealinfo/:id',
        loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
        element:<MealInfo></MealInfo>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
