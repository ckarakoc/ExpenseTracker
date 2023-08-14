import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />

                {/* .filter(expense => expense.date.getFullYear() === filteredYear) */}
                {props.items.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} 
                    />
                ))}
            </Card>
        </div>
    );
};