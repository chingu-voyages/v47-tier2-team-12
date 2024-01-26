import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <div className='app-wrapper flex'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App