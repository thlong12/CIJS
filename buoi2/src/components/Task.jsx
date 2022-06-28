import React from 'react'

export const Task = (props) => {
  return (
    <div className='task'>
        <input type='radio' id={props.title} />
        <label htmlFor={props.title}>{props.title}</label>
    </div>
  )
}
