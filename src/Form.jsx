import React, { useEffect, useState } from 'react'

const Form = ({setTodos,todos,id,setId}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

    
    if(id){
      updatebyid(id)
      setId("");
    }else{
      const obj = {
        id:Math.random(),
        title,
        description
    }
      setTodos([...todos, obj])
    }
    
    setId("");
    setTitle("");
    setDescription("");
        
    }
    useEffect(() => {
     if(id){
      const updateData = todos.filter((d)=>d.id === id)
      console.log(updateData)
      setTitle(updateData[0].title)
      setDescription(updateData[0].description)
     } 
    }, [id])

    const updatebyid = (id) =>{
      const obj = {
        title,
        description
      }
      setTodos((prevData)=>
      prevData.map((todo)=>todo.id === id ? {...todo,...obj}:todo))
    }
    
    
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="container my-5 text-center" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <input value={title} className='mx-2'placeholder='Title'
         type='text'onChange={(e)=>setTitle(e.target.value)}/>
        <input value={description} className='mx-2'placeholder='Description'
         type='text' onChange={(e)=>setDescription(e.target.value)}/>
         {
          id && (<button className='btn btn-warning' >Edit</button>)
         }
         {
          !id && (<button className='btn btn-warning' >Add</button>)
         }
        
    </div>
    </form>
    </>
  )
}

export default Form