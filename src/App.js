
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Communication from "./component/Communication";
import MutableForm from "./component/MutableForm";
import FancyBorder from './component/ConsistComponent';
import TraditionWaySharePropsVariable from './component/ReactProps';
import ReactContextWrap from './component/ReactContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.backToContractor = this.backToContractor.bind(this);
    this.state = {
      employState: 'contractor',
      staffRemind: 'Become staff whether is sure to succeed? ',
      salary: 5000,
      roleMessage: 'Initial message for method of react of componentWillReceiveProps()'
    }
  }

  performingStaff() {
    this.setState({
      employState: "Staff",
      salary: 10000,
      staffRemind: 'You became a staff in HP',
      roleMessage: 'component of children try to update component of parent'
    });
  }

  backToContractor() {
    const contractor_ = {
        employState: 'contractor',
        staffRemind: 'Become staff whether is sure to succeed? ',
        salary: 4000,
        roleMessage: 'component of parent try to update component of children'
    };
    this.setState(contractor_);

    this.setState(function(state) {
      console.log(state.salary);
      return{
        salary: state.salary + 100
      }
    });

    this.setState(function(state) {
      console.log(state.salary);
      return{
        salary: state.salary + 200
      }
    });

    this.setState(function(state) {
      console.log(state.salary);
      return{
        salary: state.salary + 400
      }
    });
  }

  render() {
    // JSX patten codes
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Communication
            employState={this.state.employState}
            staffRemind={this.state.staffRemind}
            salary={this.state.salary}
            roleMessage={this.state.roleMessage}
            performingStaff={this.performingStaff.bind(this)}></Communication>
          <button onClick={this.backToContractor} style={{height: 40, width: 120, color: 'red', fontSize: 20}}>Contractor</button>
        </header>
        <MutableForm></MutableForm>
        <FancyBorder></FancyBorder>
        <TraditionWaySharePropsVariable></TraditionWaySharePropsVariable>
        <ReactContextWrap></ReactContextWrap>
      </div>
    );
  }
}

export default App;
