import React from 'react'
import { Task } from './Task'

export const TaskList = () => {
    const array = ['Clean up bedroom', 'Buy some milk', 'Jogging', 'Learn react', 'Doing ex'];
    return (
      <div className='list'>
        {array.map((el, index) => {
          return <Task key={index} title={el} />;
        })}
      </div>
    );
  };
