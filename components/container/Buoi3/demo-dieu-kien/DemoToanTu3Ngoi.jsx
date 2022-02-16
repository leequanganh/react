import React, { Component } from 'react'

export default class DemoToanTu3Ngoi extends Component {
    islogin = true
    userName = 'amnh'
    render() {
        return (
            <div>
                {this.islogin ? `xin chao ${this.userName}` : <button>login</button>}
            </div>
        )
    }
}
