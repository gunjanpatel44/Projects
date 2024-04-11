import React, { useRef,useContext } from 'react';
import styles from '../styles/App.module.css';
import { RiMenuAddFill } from "react-icons/ri";
import { TodoItemsContext } from '../store/todo-items-store';


function AddData() {

  // using useContext
  const { handleAddData } = useContext(TodoItemsContext);

  // using  useRef
  const toDoElement = useRef();
  const dueDateElement = useRef();

  // using useState 
  // const [todoValue, setTodoValue] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  // const handleChange = (e) => {
  //   setTodoValue(e.target.value);
  // };

  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  // };

  const handleClick = (event) => {
    event.preventDefault();

    const toDoName = toDoElement.current.value;
    const dueDate = dueDateElement.current.value;

    toDoElement.current.value = "";
    dueDateElement.current.value = "";

    // Create the new item
    const newItem = {
      id: Date.now(), // Generate unique id (timestamp)
      name: toDoName,
      date: dueDate // Use the selected date
    };

    handleAddData(newItem); // Call the function to update data

    // setTodoValue('');
    // setSelectedDate('');
  }


  return (
    <form className='flex gap-4 justify-between' onSubmit={handleClick}>
      <input
        type="text"
        ref={toDoElement}
        placeholder='Enter Todo here'
        id="todo-input"
        className='border-solid border-2 border-black px-2 w-96'
        // value={todoValue}
        // onChange={handleChange}
        required
      />
      <input
        type="date"
        ref={dueDateElement}
        className='border-solid border-2 border-black px-2 w-44'
        // value={selectedDate}
        // onChange={handleDateChange}
        required
      />
      <button type='submit' className={styles.btnGreen} ><RiMenuAddFill /></button>
    </form>
  );
}

export default AddData;
