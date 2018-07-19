import React, { Component } from 'react';
import Expense from "./Expense"

class ExpenseDisplay extends Component {

    renderExpenses() {
        return this.props.expenses.map((expense, index) => <Expense key={index} {...expense} />);
    }

    render() {
        return (
            <ul>
                {this.renderExpenses()}
            </ul>
        );
    }

    constructor(props){
       super(props);
       //this.renderExpenses = this.renderExpenses.bind(this);
    }
}

export default ExpenseDisplay;