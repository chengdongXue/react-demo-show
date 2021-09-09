/* eslint-disable jsx-a11y/no-onchange */
import { useRef } from 'react';

const ReactRefFunction = () => {
  // 你可以在函数组件内部使用 ref 属性，只要它指向一个 DOM 元素或 class 组件
  const selectRegion = useRef(null);

  const selectRegionFun = (e) => {
    console.log(e.target.value);
    console.log(selectRegion.current);
  };

  return (
    <div style={{ marginBottom: 20, marginTop: 20 }}>
      <select ref={selectRegion} onChange={selectRegionFun}>
        <option>China</option>
        <option>Japan</option>
        <option>American</option>
      </select>
    </div>
  );
};

export default ReactRefFunction;
