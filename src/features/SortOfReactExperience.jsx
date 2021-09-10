/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';
import MutableForm from '../component/MutableForm';
import FancyBorder from '../component/ConsistComponent';
import TraditionWaySharePropsVariable from '../component/ReactProps';
import ReactContextWrap from '../component/ReactContextComponent';
import StateHook from '../component/StateHook';
import EffectReactHook from '../component/EffectHook';
import ThemeParent from '../component/ReactHookContext';
import BoxMouseMove from '../component/CustomHook';
import ReactDomRefComponent from '../component/ReactRefClassComponentDom';
import ReactRefFunction from '../component/ReactRefFunctionDom';
// eslint-disable-next-line import/no-unresolved
import FileInputComponent from '../component/uploadFile/fileInputComponent';
import WasteRenderComponent from '../component/codeSplit/CodeSplitComponent';
import PureWasteComponent from '../component/codeSplit/PureWasteComponent';

const Communication = React.lazy(() => import('../component/Communication'));

class SortOfReactExperience extends Component {
  constructor(props) {
    super(props);
    this.backToContractor = this.backToContractor.bind(this);
    this.state = {
      employState: 'contractor',
      staffRemind: 'Become staff whether is sure to succeed? ',
      salary: 5000,
      roleMessage: 'Initial message for method of react of componentWillReceiveProps()',
    };
  }

  performingStaff() {
    this.setState({
      employState: 'Staff',
      salary: 10000,
      staffRemind: 'You became a staff in HP',
      roleMessage: 'component of children try to update component of parent',
    });
  }

  backToContractor() {
    // Dynamic import this file and call pure function inside.
    // The syntax uses a promise to wait for the Javascript file to be loaded before using the content of the file.
    // If you use create-react-app, which uses Webpack, you will start by using the dynamic import function. The syntax goes as follow:
    import('../component/codeSplit/CodeSplitComponent').then((match) => {
      match.codeSplitting('xue', 'victor');
    });

    const contractor = {
      employState: 'contractor',
      staffRemind: 'Become staff whether is sure to succeed? ',
      salary: 4000,
      roleMessage: 'component of parent try to update component of children',
    };
    this.setState(contractor);

    this.setState((state) => {
      console.log(state.salary);
      return {
        salary: state.salary + 100,
      };
    });

    this.setState((state) => {
      console.log(state.salary);
      return {
        salary: state.salary + 200,
      };
    });

    this.setState((state) => {
      console.log(state.salary);
      return {
        salary: state.salary + 400,
      };
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
            performingStaff={this.performingStaff.bind(this)}
          />
          {/* <button
            onClick={this.backToContractor}
            style={{
              height: 40, width: 120, color: 'red', fontSize: 20,
            }}
          >
            Contractor
          </button> */}
        </header>
        <MutableForm />
        <FancyBorder />
        <TraditionWaySharePropsVariable />
        <ReactContextWrap />
        <StateHook />
        <EffectReactHook />
        <ThemeParent />
        <BoxMouseMove />
        <ReactDomRefComponent />
        <ReactRefFunction />
        <FileInputComponent />
        <WasteRenderComponent />
        <PureWasteComponent />
      </div>
    );
  }
}

export default SortOfReactExperience;
