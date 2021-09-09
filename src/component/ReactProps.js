/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';

class TraditionWaySharePropsVariable extends Component {
  constructor(props) {
    super(props);
    this.state = (
      {
        theme: '主题是：Dark',
        layer: '使用props传统方式》》》第一层传递到第二层传递到第三层',
      }
    );
  }

  render() {
    return <Toolbar theme={this.state.theme} layer={this.state.layer} />;
  }
}

export default TraditionWaySharePropsVariable;

const Toolbar = (props) =>
// Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
// 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
// 因为必须将这个值层层传递所有组件。
  (
    <div>
      <ThemedButton theme={props.theme} layer={props.layer} />
    </div>
  );

class ThemedButton extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.theme}</h3>
        <h3>{this.props.layer}</h3>
      </div>
    );
  }
}
