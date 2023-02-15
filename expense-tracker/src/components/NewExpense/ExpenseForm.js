import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        setDate(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        const expense = {
            title,
            amount,
            date: new Date(date)
        }

        props.onAddData(expense);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={date} min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;