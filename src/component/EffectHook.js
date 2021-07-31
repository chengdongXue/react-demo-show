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
    },[count]);// 仅在 count 更改时更新
    /**
     * 我们传入 [count] 作为第二个参数。这个参数是什么作用呢？如果 count 的值是 5，而且我们的组件重渲染的时候 count 还是等于 5，React 将对前一次渲染的 [5] 和后一次渲染的 [5] 进行比较。因为数组中的所有元素都是相等的(5 === 5)，React 会跳过这个 effect，这就实现了性能的优化。
     * 当渲染时，如果 count 的值更新成了 6，React 将会把前一次渲染时的数组 [5] 和这次渲染的数组 [6] 中的元素进行对比。这次因为 5 !== 6，React 就会再次调用 effect。如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。    
    */
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