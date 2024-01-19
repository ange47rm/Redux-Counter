import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'

const Counter = () => {

    // Add state to component
    const count = useSelector((state) => state.counter.count)

    // Define dispatch to dispatch actions
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        // Reset local/component state and redux counterSlice state
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <section>
            <h3>Redux Counter</h3>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <br></br>
            <input type='number' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter