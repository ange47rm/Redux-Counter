import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {

    // Add state to component
    const count = useSelector((state) => state.counter.count)

    // Define dispatch
    const dispatch = useDispatch()

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}

export default Counter