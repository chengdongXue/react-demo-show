import React, { Component } from 'react';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树
// 为当前的 theme 创建一个 context（“light”为默认值）
const ThemeContext = React.createContext();
class ReactContextWrap extends Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树
    // 无论多深，任何组件都能读取这个值
    // 在这个例子中，我们将 Light 作为当前的值传递下去
    return (
      <ThemeContext.Provider value="主题是：Light">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

export default ReactContextWrap

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 Light
  static contextType = ThemeContext;
  render() {
    return <div><h3>Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树</h3><h3>17层地狱：{this.context}</h3><SecondDeep></SecondDeep></div>;
  }
}

class SecondDeep extends Component {
  static contextType = ThemeContext;
  render() {
    const index = 2;
    {
      if(index === 1){
        return <div><h4>{this.context}</h4></div>
      } else {
        return <div><h3>18层地狱：<ThreeDeep></ThreeDeep></h3></div>
      }
    }
  }
}

class ThreeDeep extends Component {
  static contextType = ThemeContext;
  render() {
    return <div><h5>{this.context}</h5></div>
  }
}