import React, { Component } from "react";
import Tab from "./Components/Tab";
import Card from "./Components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoaded: false,
      index: 0,
      currentPerson: {
        name: "",
        email: "",
        uid: "eqfe",
        address: "",
        gender: "",
        phone: "",
      },
      lastPerson: JSON.parse(window.localStorage.getItem("last-person")) || {
        name: "",
        email: "",
        uid: "eqfe",
        address: "",
        gender: "",
        phone: "",
      },
      //getLastPersonForHighlighting : JSON.parse(window.localStorage.getItem)
      click: false,
    };
    this.setCurrentPerson = this.setCurrentPerson.bind(this);
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/cfjBPIUaPS?indent=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          contacts: json,
        });
      });

    this.setState(
      {
        currentPerson: JSON.parse(
          window.localStorage.getItem("last-person")
        ) || {
          name: "",
          email: "",
          uid: "eqfe",
          address: "",
          gender: "",
          phone: "",
        },
      },
      () => console.log(this.state)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPerson !== this.state.currentPerson) {
      window.localStorage.setItem(
        "last-person",
        JSON.stringify(this.state.currentPerson)
      );
    }
  }

  setCurrentPerson(id) {
    const person = this.state.contacts.find((user) => user.uid === id);
    window.localStorage.setItem("last-person", JSON.stringify(person));
    this.setState({ currentPerson: person });
  }

  render() {
    var { isLoaded, contacts, index, click } = this.state;
    //console.log(contacts[0]);
    if (!isLoaded) {
      return (
        <div className="spinner">
          <span>Loading...</span>
          <div className="half-spinner"></div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="mainContainer">
            <div className="container">
              <Tab
                contacts={contacts}
                setCurrentPerson={this.setCurrentPerson}
                lastPerson={this.state.lastPerson}
                currentPerson={this.state.currentPerson}
              />
            </div>
            <div className="cardPositon">
              <Card
                contacts={contacts[index]}
                currentPerson={this.state.currentPerson}
                lastPerson={this.state.lastPerson}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
