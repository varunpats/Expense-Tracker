import { useState } from "react";
import Card from "../UI/Card"
import ExpenseList from "./ExpenseList";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [year, setYear] = useState();

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    const getExpenseData = selectedYear => {
        setYear(selectedYear);
        filteredExpenses();
    }

    return <Card className="expenses">
        <ExpensesFilter onSelectYear={getExpenseData} />
        <ExpenseList items={filteredExpenses}/>
    </Card>
}

export default Expenses;