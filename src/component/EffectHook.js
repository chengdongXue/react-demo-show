import React, { useState, useEffect, Component } from 'react';

class ReactComponentDidMountAndDidUpdate extends Component {
    constructor(props){
        super(props);
        this.state = ({
            count: 0
        })
    }

    componentDidMount() {
        console.log(this.state.count);
    }

    componentDidUpdate() {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }

    render() {
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.setState({count: this.state.count+1})}>React Class Component</button>
            </div>
        )
    }
}

const EffectReactHook = () => {
    const [count, setCount] = useState(0);

    // The useEffect indicate that It was similar to both componentDidMount and componentDidUpdate methods.
    useEffect(() => {
        // Update the document title using the browser API.
        // It will performing the componentDidMount() after render() has performed done.
        // It will performing the componentDidUpdate() If you have any state to to update.
        // First time, It will be initial setup something >>>> componentDidMount().
        // And Second, It will be executing something >>>> componentDidUpdate().
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <h3>You clicked {count} times In React EffectState Hook</h3>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default EffectReactHook;