import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [year, setYear] = useState()

    const getExpenseData = selectedYear => {
        setYear(selectedYear);
    }

    return <Card className="expenses">
        <ExpensesFilter onSelectYear={getExpenseData} />
        {props.data.map(item => (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))}
    </Card>
}

export default Expenses;