import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementbyAmount, decrementbyAmount, fetchtodos, resetStore } from '../slices/counterSlices'
// import axios from 'axios'

const Counter = () => {
    const [num, setNum] = useState()
    const stateapiData = useSelector((state) => state.counter)
    const [data, setData] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json().then(response => setData(response)))
            .catch((err) => console.log('fetch call error'))
    }, [])
    // useEffect(() => {
    //     axios.get('http://localhost:8080/status')
    //         .then(response =>console.log(response))
    //         .catch((err) => console.log('fetch call error'))
    // }, [])

    const { studentData, value } = stateapiData;
    return (
        <div>
            <input value={num} type='number' onChange={(e) => {
                // dispatch(incrementbyAmount(Number(e.target.value)));
                setNum(e.target.value)
            }} />
            <button onClick={(e) => dispatch(incrementbyAmount(num))}>add</button>
            <button onClick={(e) => dispatch(decrementbyAmount(num))}>remove</button>
            <br />
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button><br />
            <span>{value}</span>
            <br />
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <button
                aria-label="Increment value"
                onClick={() => dispatch(fetchtodos(data))}
            >
                fetch Todos
            </button>

            <button
                aria-label="Increment value"
                onClick={() => {
                    dispatch(resetStore());
                    setNum(0)
                }}
            >
                reset
            </button>
            <br />
            <br />
            <div className='center'>
                <table>
                    <thead >
                        <tr >
                            <th>Id</th>
                            <th>title</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData?.map((item) => (
                            item.id <= 10 &&
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "true" : "false"} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Counter
