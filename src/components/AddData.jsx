import React, { useState } from 'react';
import styles from '../styles/App.module.css';

function AddData({ handleAddData }) {
  const [todoValue, setTodoValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleClick = () => {
    console.log('Adding todo:', todoValue);

    // Create the new item
    const newItem = {
      id: Date.now(), // Generate unique id (timestamp)
      name: todoValue,
      date: selectedDate // Use the selected date
    };
    console.log('New data:', newItem);

    handleAddData(newItem); // Call the function to update data
    
    setTodoValue('');
    setSelectedDate('');
  }

  return (
    <div className='flex gap-4 justify-between'>
      <input
        type="text"
        placeholder='Enter Todo here'
        id="todo-input"
        className='border-solid border-2 border-black px-2 w-96'
        value={todoValue}
        onChange={handleChange}
      />
      <input
        type="date"
        id='selectDate'
        className='border-solid border-2 border-black px-2 w-44'
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button className={styles.btnGreen} onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddData;
