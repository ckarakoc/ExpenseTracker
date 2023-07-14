import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2021);

    function filterChangeHandler(year) {
        setFilteredYear(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />

                {props.expenses.filter(expense => expense.date.getFullYear() === filteredYear).map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
        </div>
    );
}