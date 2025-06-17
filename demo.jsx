import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if(action.type === "inc" ){
        state + 1;
        console.log("inc");
        
    }
    if(action.type === "dec"){
          state -1 ;
          console.log("dec");
          
    }
    if(action.type === "res"){
        state =0 ;
        console.log("reset");
        
    }

    // switch (action.type) {
    //     case "+":
    //         if(state >= 10){
    //             alert("only ten time");
    //             return state = 0;
    //         }
    //         return state + 1;

    //     case "-":
    //         if(state <= 0){
    //             alert("zero is last  one");
    //             state = 0
    //         }
    //         return state - 1;


    //     case "reset":
    //         return state = 0;

    //     default:
    //         state;
    // }

}

const Demo = () => {
    let initialState = 0
    const [Counter, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter {Counter}</h1>

            <button onClick={() => dispatch({ type: "+" , id : "inc"})}>+</button>
            <button onClick={() => dispatch({ type: "-" , id : "dec"})}> -</button >
            <button onClick={() => dispatch({ type: "reset"  , id :"res"})}>reset</button>
        </div >
    )
}

export default Demo
