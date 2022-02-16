/**
 * khong viet dc if else trong render 
 * 
 */
import React, { Component } from 'react'

export default class DemoIfElse extends Component {
    isLogin = 1;
    userName = 'anh'
    renderContent = () => {
        if (this.isLogin) {
            return 'hello ' + this.userName

        } return <button onClick={this.handleLogin}>login</button>

    }
    handleLogin = () => {
        this.userName = true
        console.log(this.userName);
    }
    render() {
        return (
            <div>{this.renderContent()}</div>
        )
    }
}
