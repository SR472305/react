import React, { useReducer } from 'react'

const reducer = (state, action) => {
    return {
        ...state, [action.name]: action.value
    }
}


const Formhandler = () => {

   const initialstate = {
    name : "",
    email : "",
   }

    const [FormData, dispatch] = useReducer(reducer, initialstate);

    const inputhandler = (e)=>{
           dispatch({name : e.target.name , value : e.target.value})
    }

    const formsubmit =(e) =>{
          e.preventDefault();
          console.log(FormData);
          
    } 

    return (
        <div>
            <form action="" method="post">
                <label htmlFor="name">name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name' onChange={inputhandler} />

                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter your email' id='email' name='email' onChange={inputhandler} />

             

              <button onClick={formsubmit}>Submit</button>

            </form>
        </div>
    )
}

export default Formhandler
