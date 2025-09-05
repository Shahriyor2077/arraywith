import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Home from "./home"
import Login from "./login"
import MainLayout from './layout'
import ProductDetail from './product-detail'
import About from './about'
const AppRouter = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/posts' element={<About/>}/>
              <Route path='/product/:id' element={<ProductDetail/>}/>
              <Route path='*' element={<div>404</div>}/>
            </Route>
            
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </React.Fragment>
  )
}

export default AppRouter