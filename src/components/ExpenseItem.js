
import React, { useContext } from 'react';
import { TiDelete, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            {/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td> */}
            <td> <img src="/plus.png" alt="Plus" style={{ cursor: 'pointer' }} onClick={event => increaseAllocation(props.name)} /></td>
            <td> <img src="/minus.png" alt="Minus" style={{ cursor: 'pointer' }} onClick={event => decreaseAllocation(props.name)} /></td>
            {/* <td><TiPlus size='1.5em'  style={{ color: 'blue', fontSize: '24px' }}  onClick={event=> increaseAllocation(props.name)}></TiPlus></td> */}
            <td><TiDelete size='1.5em' style={{ color: 'red', fontSize: '24px' }} onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;