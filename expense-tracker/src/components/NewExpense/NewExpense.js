import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const getExpenseData = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAppendData(expense);
        setIsEditing(false);
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onAddData={getExpenseData} onCancel={stopEditing} />}
        </div>
    )
}

export default NewExpense