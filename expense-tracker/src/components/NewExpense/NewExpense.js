import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const getExpenseData = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAppendData(expense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onAddData={getExpenseData} />
        </div>
    )
}

export default NewExpense