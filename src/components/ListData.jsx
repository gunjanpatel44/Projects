import React, { useContext } from 'react';
import styles from '../styles/App.module.css';
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from '../store/todo-items-store';


function ListData() {
  const { handleRemoveData } = useContext(TodoItemsContext);
  const { contextData } = useContext(TodoItemsContext);

  const handleClick = (item) => {
    handleRemoveData(item.id);
  };

  return (
    <div>
      {contextData.map((item) => (
        <div className='flex gap-4 justify-between my-2' key={item.id}>
          <p className='p-2 w-96'>{item.name}</p>
          <p className='p-2 w-44'>{item.date}</p>
          <button className={styles.btnRed} onClick={() => handleClick(item)}><MdDelete /></button>
        </div>
      ))}
    </div>
  );
}

export default ListData;