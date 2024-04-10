import React, { useState } from 'react';
import './App.css';
import AddData from './components/AddData';
import ListData from './components/ListData';
import BharatClock from './components/BharatClock';

function App() {
  const [data, setData] = useState([]); // State to hold the data

  // Function to handle data update
  const handleAddData = (newItem) => {
    const updatedData = [...data, newItem];
    setData(updatedData);
  };

  // Function to handle remove data
  const handleRemoveData = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className='flex flex-col'>
      <BharatClock />
      <p className='font-bold text-2xl py-2'>To Do App</p>
      <div className='border border-black p-4 table'>
        <AddData handleAddData={handleAddData} />
        <ListData data={data} handleRemoveData={handleRemoveData} />
      </div>
    </div>
  )
}

export default App;