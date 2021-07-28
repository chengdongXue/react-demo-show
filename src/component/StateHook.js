import React, { Component, useState } from 'react';

class StateClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = ({
            index: 0
        })
    }

    render() {
        return(
            <div>
                <h3>{this.state.index}</h3>
                <button onClick={() => this.setState({index: this.state.index+1})}>React Hook</button>
            </div>
        )
    }
}

function StateHook() {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <h3>使用react hook来表示相同class component中this.state and this.setState的写法：{index}</h3>
            <button onClick={() => setIndex(index+1)}>React Hook</button>
        </div>
    )
}

export default StateHook;