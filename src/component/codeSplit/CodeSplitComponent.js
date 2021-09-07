import React, { Component } from 'react';

export default class WasteRenderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increaseCountFn = this.increaseCountFn.bind(this);
        console.log('初始化组件的构造函数！');
    }

    componentWillMount() {
        console.log('初始化react生命周期函数中的第一个方法！');
    }

    // 为了避免 React 组件中的渲染浪费，我们将挂钩到 shouldComponentUpdate 生命周期方法
    shouldComponentUpdate(propsNext, stateNext) {
        // shouldComponentUpdate 方法是一个生命周期方法，当 React 渲染 一个组件时，这个方法不会被调用 ，并根据返回值来判断是否要继续渲染组件
        // nextProps: 组件接收的下一个 props 值
        // nextState: 组件接收的下一个 state 值
        console.log('检测到值发生变化，根据返回值来判断到底是否需要重新继续渲染组件！');

        // 我们告诉 React 永远不要渲染组件，这是因为它返回 false
        // return false;

        // 因此，无论何时想要渲染组件，都必须返回 true。
        // return true;

        // 检查了当前状态对象this.state.count 中的计数值是否等于 === 到下一个状态 nextState.count 对象的计数值。 
        // 如果它们相等，则不应该重新渲染，因此我们返回 false，如果它们不相等则返回 true，因此应该重新渲染以显示新值
        if(this.state.count === stateNext.count) {
            // 代表了当前状态对象数据和通过setState()函数执行过后的值是一样的，react认为值相等的情况下，没必要重新渲染虚拟dom
            return false;
        } else {
            // 代表了当前状态对象数据和通过setState()函数执行过后的值是不一样的，react认为值不相等的情况下，有必要重新渲染虚拟dom
            return true;
        }
    }

    // 该组件的初始状态为 {count: 0} 。当我们单击 click Me 按钮时，它将 count 状态设置为 1。屏幕的 0 就变成了 1。
    // 当我们再次单击该按钮时出现了问题，组件不应该重新呈现，因为状态没有更改。count 的上个值为1，新值也 1，因此不需要更新 DOM
    // 这表明即使状态相同，我们的组件也在重新呈现，这称为浪费渲染。
    componentWillUpdate(nextProps, nextState) {
        console.log('当一个组件由于状态变化而确定要更新/重新渲染时，react会调用该方法!');
    }

    increaseCountFn() {
        this.setState({
            count: 1
        })
    }

    render() {
        console.log('执行react虚拟渲染render函数！');
        return (
            <div style={{width: '100%', height: '100px', backgroundColor: 'green', marginTop: 20}}>
                <span style={{color: 'white'}}>通过react的shouldComponentUpdate的返回值来判断是否需要重新渲染dom元素</span>
                {this.state.count}
                <br></br>
                <button onClick={this.increaseCountFn}>浪费的渲染</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('虚拟dom渲染完成之后执行该生命周期函数，可以在此函数中call后台api，取得数据之后setState()更新dom！');
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('当一个组件成功重新渲染时，会调用该react方法！');
    }

    componentWillUnmount(){
        console.log('执行卸载组件操作！');
    }
}

export const codeSplitting = async (firstName, lastName) => {
    const variableCodeSplitting = `You pass through data ${firstName}${lastName}`;
    console.log(variableCodeSplitting);
    return variableCodeSplitting;
};