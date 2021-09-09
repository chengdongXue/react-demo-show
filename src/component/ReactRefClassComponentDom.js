/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ReactDomRefComponent extends Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 userName 的 DOM 元素
    this.userNameRef = React.createRef();
    this.textRef = React.createRef();
    this.registerUserName = this.registerUserName.bind(this);
    this.state = {
      userName: 'xuechengdong',
    };
  }

  registerUserName() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.userNameRef.current.focus();
    this.setState({
      userName: 'Jackcheng',
    });
    this.textRef.current.style.color = 'red';
    this.textRef.current.innerText = 'You are replace with new values.';
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `userName` 上
    return (
      <div>
        <h3 ref={this.textRef}>How to execute Dom of react by ref operator</h3>
        <input type="text" name="userName" id="userName" value={this.state.userName} ref={this.userNameRef} />
        <input type="button" name="registerUserName" value="Register User Name" onClick={this.registerUserName} />
      </div>
    );
  }
}

export default ReactDomRefComponent;
