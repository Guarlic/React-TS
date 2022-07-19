import * as React from 'react';
import './style.css';

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

  const Button = () => (
    <button
      onClick={() => alert('test')}
    >Button~!</button>
  );

  return (
    <div>
      <Title />
      <SubTitle />
      <Button />
    </div>
  );
}
