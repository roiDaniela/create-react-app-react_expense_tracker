import React, { Component } from 'react';
import ExpenseForm from './Expense-form';
import ExpenseDisplay from './Expense-display'

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { expenses: [] };
        this.addExpense = this.addExpense.bind(this);
    }

    render() {
        return (
            <div className="App">
                <ExpenseForm addExpense={this.addExpense}/>
                <ExpenseDisplay expenses={this.state.expenses}/>
            </div>
        );
    }

    addExpense(expense) {
        this.setState({ expenses: this.state.expenses.concat(expense) });
        console.log(this.state);
    }
}

export default App;
