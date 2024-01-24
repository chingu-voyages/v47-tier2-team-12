import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Studying from './components/Studying';
import RoutineActivity from './components/RoutineActivity';
import DailyTask from "./components/DailyTask"
import axios from 'axios';
const App = () => {
  const [allData , setAllData] = useState([])
  useEffect(() => {
    axios.get('./data/tasks-example.json')
    .then(res => setAllData(res.data))
  },[])
 

  return (
    <div>
      <div className='mb-5'>
      <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<RoutineActivity allData={allData}/>} />
        <Route path='/studying' element={<Studying/>} />
        <Route path='/dialy-task-project' element={<DailyTask/>} />
      </Routes>
    </div>
  )
}

export default App