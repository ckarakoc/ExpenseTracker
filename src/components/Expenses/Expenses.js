import { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onChangeFilter={filterChangeHandler} 
                    selected={filteredYear} 
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};