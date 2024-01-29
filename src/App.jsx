import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div className='app-wrapper flex'>
      <Sidebar />
    </div>
  )
}

export default App