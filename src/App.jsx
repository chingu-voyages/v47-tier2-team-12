import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div className='app-wrapper flex flex-column'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App