import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClickHello = () => {
    alert("Hello mn");
  };
  handleLuong = (luong) => {
    alert(`luong toi ${luong} `);
  };
  render() {
    let luong = 300;
    return (
      <>
        <button onClick={this.handleClickHello}>bam vao</button>
        <button
          onClick={() => {
            this.handleLuong(luong);
          }}
        >
          {" "}
          luong toi
        </button>
      </>
    );
  }
}
