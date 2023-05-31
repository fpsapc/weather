import React, {useReducer} from 'react'

const reducer = (state, action)=> {
    switch(action.type) {
        case "INCREMENT": 
        return { count: state.count+1, value: state.value}
        case "TOGGLE":
            return { count: state.count, value: !state.value}
            default:
                return state;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,{count:0,value:true});
  
    return (
        <>
    <div className='center'>
      <p>{state.count}</p>
      <button onClick={()=> {
        dispatch({type: "INCREMENT"});
        dispatch({type: "TOGGLE"});
      }}>click!</button>
      <p>{state.value && <p>this is text</p>}</p>
    </div>
    </>
  )
}

export default UseReducer
