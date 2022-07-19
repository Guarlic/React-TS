import * as React from 'react';
import './style.css';
import Buttons from './Buttons';

export default function App() {
  const Title = () => (
    <h1>
      Hello, World!
    </h1>
  );

  const SubTitle = () => (
    <h2>
      React with TS!
    </h2>
  );

  return (
    <div>
      <Title />
      <SubTitle />
      <Buttons />
    </div>
  );
}
