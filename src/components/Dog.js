import React from 'react'

export class Dog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.reset = this.reset.bind(this)
    }
    handleIncrease(){
        this.setState(state => ({
            count: this.state.count + 1 
        }))
    }
    handleDecrease(){
        this.setState(state => ({
            count: this.state.count -1
        }))
    }
    reset(){
        this.setState(state => ({
            count: 0
        }))
    }
    render(){
        return(
            <>
                <button className='increase' onClick={this.handleIncrease}>Increase</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <button className='decrease' onClick={this.handleDecrease}>Decrease</button>
                <h2>{this.state.count}</h2>
            </>
        )
    };
}

export default Dog
