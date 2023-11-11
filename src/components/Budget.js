
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);   

    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        // if (event.target.value > 20000) {
        //     alert("Budget value cannot be more than 20000");
        //     return;
        // } 
        // setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
{<span>Budget: {currency}</span> }
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;