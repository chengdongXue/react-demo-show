import React, { Component, PureComponent } from 'react';

// 使用纯组件
export default class PureWasteComponent extends PureComponent {
    // React在v15.5中引入了Pure Components。 这启用了默认的相等性检查（更改检测）
    // 我们不必将 shouldComponentUpdate 生命周期方法添加到我们的组件以进行更改检测，我们只需要继承 React.PureComponent.
    // React 将会自己判断是否需要重新渲染.
    // 继承 React.PureComponent时，不能再重写shouldComponentUpdate，否则会引发警告.
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

    // 该组件的初始状态为 {count: 0} 。当我们单击 click Me 按钮时，它将 count 状态设置为 1。屏幕的 0 就变成了 1
    // 当我们再次单击该按钮时出现了问题，组件不应该重新呈现，因为状态没有更改。count 的上个值为1，新值也 1，因此不需要更新 DOM
    // 这表明即使状态相同，我们的组件也在重新呈现，这称为浪费渲染
    componentWillUpdate(nextProps, nextState) {
        console.log('当一个组件由于状态变化而确定要更新/重新渲染时，react会调用该方法!');
    }

    increaseCountFn() {
        // count: this.state.count + 1
        // 如果状态值实时变修改，那么react自动会重新渲染虚拟dom元素

        // count：1
        // 如果被更新的状态值和上一次状态值相等，那么react就不会渲染dom
        // 继承pureComponent，react会自动帮忙检查状态值
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('执行react虚拟渲染render函数！');
        return (
            <div style={{width: '100%', height: '100px', backgroundColor: 'red', marginTop: 20}}>
                <span style={{color: 'white'}}>启用了默认的相等性检查当你使用React的pureComponent组件，无需使用shouldwillcomponent，它会自我检查！</span>
                {this.state.count}
                <br></br>
                <button onClick={this.increaseCountFn}>浪费的渲染</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('虚拟dom渲染完成之后执行该生命周期函数，可以在此函数中call后台api，取得数据之后setState() 更新dom！');
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('当一个组件成功重新渲染时，会调用该react方法！');
    }

    componentWillUnmount(){
        console.log('执行卸载组件操作！');
    }
}