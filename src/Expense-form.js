import SingleInput from './Single-input';
import React, { Component } from 'react';

class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.state = { amt: 0, cat: "", descr: "" };
    }

    render() {
        return (
            <div>
                <form>
                    <SingleInput id="amt" content={this.state.amt} type="number" placeholder="$" controlFunc={this.changeExpense}/>
                    <SingleInput id="cat" content={this.state.cat} type="text" placeholder="Category" controlFunc={this.changeExpense}/>
                    <SingleInput id="descr" content={this.state.descr} type="text" placeholder="Description" controlFunc={this.changeExpense}/>

                    <button type="button" onClick={this.onBtnClick.bind(this)}>Add Expense</button>
                </form>
            </div>
        );
    }

    onBtnClick(){
        console.log(this.state.descr);
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
            console.log(this.state);
        });
    }

    changeExpense(e){
        this.setState({[e.target.id]:e.target.value});
        //e.target.id <-- the element id (which matches our state)
        //e.target.value <-- the element value
        //[e.target.id] <-- is the way to define a dynamic var name
    }
}

export default ExpenseForm;
