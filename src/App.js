import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpened: false,
  };

  ShowModal = () => {
    this.setState({ modalIsOpened: true });
  };

  HideModal = () => {
    this.setState({ modalIsOpened: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpened} close={this.HideModal} />;
        {this.state.modalIsOpened && (
          <Backdrop show={this.state.modalIsOpened} />
        )}
        <button className="Button" onClick={this.ShowModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
