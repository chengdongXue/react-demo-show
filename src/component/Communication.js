import React, { Component } from 'react';

class Communication extends Component {

    constructor(props){
        super(props);
        console.log(`Initial constructor`);
        this.state = {
            employees: [{
                    name: 'Victor',
                    jobTitle: 'CM',
                    description: 'I am outsource people.'
                },{
                    name: 'Austin',
                    jobTitle: 'CM',
                    description: 'I am outsource people too.'
                }
            ]
        }
        console.log(`Initial state of react`);
    }

    componentWillMount() {
        console.log(`componentWillMount(): To executing something before rendering dom of react`);
    }

    componentWillReceiveProps() {
        console.log(`componentWillReceiveProps(): It seem sure to call this function when the state or props has update`);
        // console.log(`componentWillReceiveProps(): It seem sure to call this function when ${this.props.roleMessage}`);
    }

    shouldComponentUpdate() {
        console.log(`shouldComponentUpdate(): To determine whether is needs to render at once when it was received new props and state`);
        // return false is indicate that it was won't render at once
        // return true is indicate that it seem sure that perform render() function.
        return true;
    }

    render() {
        console.log('render(): rendering page in progress...');
        return(
            <div>
                {
                    this.state.employees.map((item, index) => {
                        return (
                            <div key={index} style={{fontSize: 14}}>
                                <span>{item.name}</span>
                                <span>{item.jobTitle}</span>
                                <span>{item.description}</span>
                            </div>
                        )
                    })  
                }
                <h3>Employ State Is <span>{this.props.employState}</span></h3>
                <h3>Your salary is {this.props.salary} RMB</h3>
                <h3>{this.props.staffRemind}</h3>
                <h4>Trying click the button as below, Which your mind is being changed by something on future</h4>
                <button onClick={this.props.performingStaff} style={{height: 40, width: 100, color: 'red', fontSize: 20}}>Staff</button>
            </div>
        )
    }

    componentDidMount() {
        console.log(`componentDidMount(): To performing something after rendered dom of react`);
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate(): The render() function has been rendered, will to call this function`);
    }
}

export default Communication;