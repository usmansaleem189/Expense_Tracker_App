import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransactions = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit_income = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: Math.abs(+amount),
            sign: '+'
        }
        addTransaction(newTransaction);
    }

    const onSubmit_expense = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: (Math.abs(+amount)) * -1,
            sign: '-'
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (Sign <em>(i.e. <math>+/-</math>)</em> will not make a difference. Absolute value will be taken. Chose <em>'Add Income'</em> or <em>'Add Expense'</em> accordingly)</label
                    >
                    <input type="number" value = {amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button onClick={onSubmit_income} className="btn" id='btn_income'>Add Income</button>
                <button onClick={onSubmit_expense} className="btn" id='btn_expense'>Add Expense</button>
            </form>
        </div>
    )
}
