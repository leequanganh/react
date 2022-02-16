import React, { Component } from 'react'
import { dsdt } from './dataDssDt'
import ItemDt from './ItemDt'

export default class RenderWithMap extends Component {
    state = {
        data: dsdt
    }
    renderData = () => {
        return this.state.data.map((item) => {
            console.log(item);
            return <ItemDt />
        })
    }
    render() {
        return <div>{this.renderData()}</div>

    }
}
