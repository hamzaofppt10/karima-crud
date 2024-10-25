import React, { useRef } from 'react'

const form = () => {
  const nameRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const {state,addUser,deleteuser,updateuser}=usereducer();



  const handleSubmit =(e)=>{
    e.preventDefault();
    const newUser={
      id:date.now(),
      name:nameRef.current.value,
      userName:nameRef.current.value,
      email:nameRef.current.value,
    }
   fetch



  }

  return (
    <div>
       <form action="">

       </form>
    </div>
  )
}

export default form