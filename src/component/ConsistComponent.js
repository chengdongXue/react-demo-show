/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const FancyBorder = (props) => (
  <div style={{
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15,
  }}
  >
    <div style={{
      backgroundColor: 'grey', width: 500, height: 400, borderRadius: 10,
    }}
    >
      {props.children}
      {props.left}
      {props.right}
    </div>
  </div>
);

const SideBarLeft = () => (
  <div style={{
    float: 'left', height: 300, width: 150, backgroundColor: 'green',
  }}
  >
    <h4>This is left side</h4>
  </div>
);

const SideBarRight = () => (
  <div style={{
    float: 'right', height: 300, width: 150, backgroundColor: 'pink',
  }}
  >
    <h4>This is right side</h4>
  </div>
);

const WelcomeDialog = () => (
  <FancyBorder left={<SideBarLeft />} right={<SideBarRight />}>
    <div>
      <h3>Welcome to Consist Components</h3>
    </div>
  </FancyBorder>
);

export default WelcomeDialog;
