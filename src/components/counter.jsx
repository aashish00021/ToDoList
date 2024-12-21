import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../redux/CounterSlice';


function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);

    function add(){
        dispatch(incrementByAmount(input));
    }
    

    return (
        <>
            <div>
                <h1>Counter</h1>
                <h1>Count is: {count}</h1>
            </div>
            <div>
                {/* Use anonymous functions to call dispatch when the button is clicked */}
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>       
            </div>
            <div>
                <input 
                type = "number" 
                placeholder='Enter a number'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={add}>Add Number</button>
            </div>
        </>
    );
}

export default Counter;
