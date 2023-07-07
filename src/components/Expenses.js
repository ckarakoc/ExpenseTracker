import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

export default function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </Card>
    );
}