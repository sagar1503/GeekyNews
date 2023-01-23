import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import NotFound from './Components/NotFound';
import { Route, Routes } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Routes>
          <Route path='/'element={<NewsComponent key='Home' pageSize={9} country ="in" category="science"/>} />
          <Route path="/Entertainment" element={<NewsComponent key='Entertainment' pageSize={9} country ="in" category="Entertainment"/>} />
          <Route path="/Business" element={<NewsComponent key='Business' pageSize={9} country ="in" category="Business"/>} />
          <Route path="/General" element={<NewsComponent key='General' pageSize={9} country ="in" category="General"/>} />
          <Route path="/Health" element={<NewsComponent key='Health' pageSize={9} country ="in" category="Health"/>} />
          <Route path="/Science" element={<NewsComponent key='Science' pageSize={9} country ="in" category="Science"/>} />
          <Route path="/Sports" element={<NewsComponent key='Sports' pageSize={9} country ="in" category="Sports"/>} />
          <Route path="/Technology" element={<NewsComponent key='Technology' pageSize={9} country ="in" category="Technology"/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    )
  }
}

export default App
