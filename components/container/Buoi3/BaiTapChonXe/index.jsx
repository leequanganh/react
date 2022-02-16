import React, { Component } from 'react'

export default class index extends Component {
    state = {
        carOption: './img/imgRedCar.jpg'
    }
    handleOption = (option) => {
        this.setState({
            carOption: option

        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={this.state.carOption} className="col-7" />
                    <div className="col-5 row">
                        <button onClick={() => { this.handleOption('./img/imgRedCar.jpg') }} className="btn btn-danger col4" >red car</button>
                        <button onClick={() => { this.handleOption('./img/imgSilverCar.jpg') }} className="btn btn-secondary col-4" > silver car </button>
                        <button onClick={() => { this.handleOption('./img/imgBlackCar.jpg') }} className="btn btn-dark col-4" > black car</button>

                    </div>
                </div>

            </div>
        )
    }

}
