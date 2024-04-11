import React, { useState, useContext } from 'react';
import { TodoItemsContext } from './store/todo-items-store'
import './App.css';
import AddData from './components/AddData';
import ListData from './components/ListData';
import BharatClock from './components/BharatClock';

// import { useState }  from 'react';

function App() {

  // using useContext
  const [contextData, setContextData] = useState([]); // State to hold the data using usestate in context api

  const handleAddData = (newItem) => {
    const updatedData = [...contextData, newItem];
    setContextData(updatedData);

    // using useState
    // const [data, setData] = useState([]); // State to hold the data
    // const updatedData = [...data, newItem];
    // setData(updatedData);
  };

  const handleRemoveData = (id) => {
    // using useContext
    setContextData(contextData.filter(item => item.id !== id));

    // using useState
    // setData(data.filter(item => item.id !== id));
  };


  return (
    <div className='flex flex-col'>
      <BharatClock />
      <p className='font-bold text-2xl py-2'>To Do App</p>
      <div className='border border-black p-4 table'>
        <TodoItemsContext.Provider value={
          {
            contextData: contextData,
            handleAddData: handleAddData,
            handleRemoveData: handleRemoveData
          }
        }>
        <AddData />
        <ListData />
        </TodoItemsContext.Provider>
      </div>
    </div>
  )
}

export default App;