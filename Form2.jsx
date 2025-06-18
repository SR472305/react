// import React, { useReducer } from 'react'

// const reducer = (state , action)=>{
//     return{
//         ...state,[action.name] : action.value
//     }
//      error:{
//         return{
//             ...state.error,[action.error]: ""
//         }
//      }
// }

// const Form = () => {
//     const initalstate ={
//         name: "",
//         number: "",
//     }
//     error:{
//         name: ""
//         number :""
//     }
    
//     const inputhandler = (e)=>{
//          dispatch({name : e.target.name , value : e.target.value})
//     }

//     const formhandler = (e)=>{
//         e.preventDefault();
//         console.log(formdata);
        
//     }


//    const [formdata,dispatch] = useReducer(reducer,initalstate)
//   return (
//     <div>
//        <form action="" >
//            <label htmlFor="name">Name</label><br />
//            <input type="text" name='name' id='name' onChange={inputhandler} /><br />

//            <label htmlFor="number">Contact</label><br />
//            <input type="number" name="number" id="number" onChange={inputhandler} /><br /><br />

//            <input type="submit" value="Submit" onClick={formhandler} />

//        </form>
//     </div>
//   )
// }

// export default Form


import React, { useReducer } from 'react';

// Reducer to handle form state and errors
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.name]: action.value
        },
        errors: {
          ...state.errors,
          [action.name]: "" // Clear error when typing
        }
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  formData: {
    name: "",
    number: ""
  },
  errors: {
    name: "",
    number: ""
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { formData, errors } = state;

  // Handle input change
  const inputHandler = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      name: e.target.name,
      value: e.target.value
    });
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Number must be 10 digits";
    }

    return newErrors;
  };

  // Handle form submit
  const formHandler = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors });
    } else {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      // Optionally reset form
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label><br />
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={inputHandler}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <br />

        <label htmlFor="number">Contact</label><br />
        <input
          type="text"
          name="number"
          id="number"
          value={formData.number}
          onChange={inputHandler}
        />
        {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}
        <br />

        <input type="submit" value="Submit" onClick={formHandler} />
      </form>
    </div>
  );
};

export default Form;

