import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react"

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState("Welcome")

function changedTitle(){
  setNewTitle('Welcome to Peaksoft');
  console.log(newTitle);
}
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h1>{props.expenseTitle}</h1>
        <div className="expense-item__price">${props.expensePrice}</div>
        {/* <button onClick={props.changeHandler}>Change title</button> */}
        <h1>{newTitle}</h1>
        <button onClick={changedTitle}>Changed title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
