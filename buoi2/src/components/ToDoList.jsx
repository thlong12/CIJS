import React from 'react'
import { Footer } from './Footer'
import { Input } from './Input'
import { TaskList } from './TaskList'

export const ToDoList = () => {
    return (
        <div className='wrapper'>
            <Input />
            <TaskList />
            <Footer />
        </div>
    )
}
