import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Form from './components/pages/form/Form'
import Movies from './components/pages/page/movie/Movies'
import SingleMovie from './components/pages/page/singlemovie/SingleMovie'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/addmovie' element={<Form/>} />
          <Route path='/singlemovie/:id' element={<SingleMovie/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
