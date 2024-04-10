import React from 'react';
import styles from '../styles/App.module.css';

function ListData({ data, handleRemoveData }) {
  const handleClick = (item) => {
    handleRemoveData(item.id);
  };

  return (
    <div>
      {data.map((item) => (
        <div className='flex gap-4 justify-between my-2' key={item.id}>
          <p className='p-2 w-96'>{item.name}</p>
          <p className='p-2 w-44'>{item.date}</p>
          <button className={styles.btnRed} onClick={() => handleClick(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ListData;