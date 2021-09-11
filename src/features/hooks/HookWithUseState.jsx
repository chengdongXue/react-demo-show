import React, { useState, useEffect, useCallback } from 'react';

const StudyUseState = () => {
  const [increaseNumber, setIncreaseNumber] = useState(0);
  // 不必使用多个state变量,State变量可以很好地存储对象和数组
  const [selectData, setSelectData] = useState([
    {
      id: '1',
      title: 'China',
    }, {
      id: '2',
      title: 'American',
    }, {
      id: '3',
      title: 'Germany',
    },
  ]);

  const useCountries = () => {
    useEffect(() => {
      const insertNewData = {
        id: '4',
        title: 'Japan',
      };
      setSelectData(insertNewData);
    }, []);
    return selectData;
  };

  const clickNumber = () => {
    setIncreaseNumber(increaseNumber + 1);
  };

  const InvokeEffect = () => {
    console.log(useCountries());
  };

  useEffect(() => {
    document.title = `${increaseNumber}`;
  }, [increaseNumber]);

  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <div style={{ marginTop: 100 }}>
        <h1>Number is </h1>
        <h2>{increaseNumber}</h2>
        <select>
          {selectData.map((item) => (
            <option key={item.id}>{item.title}</option>
          ))}
        </select>
        <button onClick={clickNumber} type="button">Click</button>
        <button onClick={InvokeEffect} type="button">Invoke custom hook</button>
      </div>
      <>
        <h1 ref={measuredRef}>Hello, world</h1>
        <h2>The above header is</h2>
        <h2>{Math.round(height)}</h2>
      </>
    </div>
  );
};

export default StudyUseState;
