import React, { useState } from 'react'
import Form from './Form'
import Todos from './Todos'


const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"This is Brand new Title",
      description:"This is brand new Discription"
    },
    {
      id:2,
      title:"This is Brand new Title 2",
      description:"This is brand new Discription 2"
    },
    {
      id:3,
      title:"This is Brand new Title 3",
      description:"This is brand new Discription 3"
    }
  ])

  const [id, setId] = useState("")
  // console.log("this is",id)

  const deleteTodo = (id) =>{
    setTodos(todos.filter((d)=>d.id != id))
  }
  return (
    <>
<div className="container">
  <h1 className='text-center'>React To Do List CURD App</h1>
</div>
<Form id={id} setId={setId} todos={todos} setTodos={setTodos}/>
<Todos todos={todos} deleteTodo={deleteTodo} setId={setId}/>
    </>
  )
}

export default App