import React, { useContext } from 'react';

const themes = [{
  color: 'red',
}, {
  color: 'black',
},
];

const ThemeContext = React.createContext(themes);

const ThemeParent = () => (
  <ThemeContext.Provider value={themes[1].color}>
    <ThemeChildren />
  </ThemeContext.Provider>
);

const ThemeChildren = () => {
  const contextTheme = useContext(ThemeContext);
  return (
    <div>
      <div>
        <h3>
          使用React函数来体验useContext保持数据供上下文使用的好处：
          {contextTheme}
        </h3>
      </div>
      <ThemeGrandChildren />
    </div>
  );
};

const ThemeGrandChildren = () => {
  const contextTheme = useContext(ThemeContext);
  return (
    <div>
      <h4>
        使用React函数来体验useContext保持数据供上下文使用的好处：
        {contextTheme}
      </h4>
    </div>
  );
};

export default ThemeParent;
