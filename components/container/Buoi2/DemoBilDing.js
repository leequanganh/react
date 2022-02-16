import React, { Component } from "react";

export default class DemoBilDing extends Component {
  sayHello = (name) => {
    <p>hello 123 {name}</p>;
  };
  sayxx = (asd) => {
    alert(`"fasdf" ${asd}`);
  };
  render() {
    let userName = "anh";

    return (
      <>
        <p> Hello {userName}</p>
        <p>{this.sayHello(userName)}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.sayxx("asd");
          }}
        >
          asd
        </button>
      </>
    );
  }
}
