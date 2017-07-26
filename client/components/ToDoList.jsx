import React from 'react';
import ToDoListEntry from './ToDoListEntry.jsx';

const ToDoList = (props) => {
  console.log('this is the props in ToDoList', props)
  return (
    <div>
      {props.lists.map((list, i) =>
        (<ToDoListEntry errand={list} key={i}/>)
      )}
    </div>
  )
}

export default ToDoList