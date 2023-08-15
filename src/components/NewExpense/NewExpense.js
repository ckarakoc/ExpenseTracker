import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    function onSaveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {isEditing ? (<ExpenseForm
                onSaveExpenseData={onSaveExpenseDataHandler}
                onCancel={() => setIsEditing(false)}
            />) : (
                <button onClick={() => setIsEditing(true)}>Add New Expense</button>
            )}

        </div>
    );
};