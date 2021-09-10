/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.scss';

const StudyUseState = React.lazy(() => import('./features/hooks/HookWithUseState'));
const SortOfReactExperience = React.lazy(() => import('./features/SortOfReactExperience'));

const App = () => (
  <Suspense fallback={<div style={{ fontSize: 20, color: 'red' }}>Loading...</div>}>
    <BrowserRouter>
      <div className="headerContainer">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/sortOfReactExperience">sortOfReactExperience</Link>
        </div>
        <div>
          <Link to="/useStateHook">useStateHook</Link>
        </div>
      </div>
      <Switch>
        <Route path="/sortOfReactExperience">
          <SortOfReactExperience />
        </Route>
        <Route path="/useStateHook">
          <StudyUseState />
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
