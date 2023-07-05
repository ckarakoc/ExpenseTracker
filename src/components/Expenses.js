import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

export default function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense) =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </div>
    );
}