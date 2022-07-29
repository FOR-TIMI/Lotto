import React, { Component } from 'react'
import Ball from './Ball';
import "./Lottery.css";

class Lottery extends Component{

    static defaultProps = {
        title: 'lotto',
        numBalls:6,
        maxNum: 40
    }

    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls})}
        this.handleClick = this.handleClick.bind(this)

    }

    generateBalls(){
        this.setState(currState =>({
            nums: currState.nums.map(n =>Math.floor(Math.random() * this.props.maxNum) + 1)
        }))

    }

    handleClick(){
       this.generateBalls() 
    }


    render(){
        return(
            <section className='Lottery'>
                <h1 className='Lottery-title'>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.handleClick}>Draw</button>
            </section>
        )
    }
}

export default Lottery