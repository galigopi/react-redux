import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementbyAmount, decrementbyAmount } from '../slices/counterSlices'

const Counter = () => {
    const [num, setNum] = useState()
    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch();

    return (
        <div>
            <input value={num} type='number' onChange={(e) => {
                // dispatch(incrementbyAmount(Number(e.target.value)));
                setNum(e.target.value)
            }} /> 
            <button onClick={(e) => dispatch(incrementbyAmount(num))}>add</button>
            <button onClick={(e) => dispatch(decrementbyAmount(num))}>remove</button>
            <br/>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button><br />
            <span>{count}</span>
            <br />
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div >
    )
}

export default Counter
