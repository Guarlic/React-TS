import * as React from 'react';
import './style.css';
import Buttons from './Buttons';
import Images from './Images';

export let count = 0;

export default function App() {
  const Title = () => (
    <h1>
      Sojak Studio
    </h1>
  );

  const SubTitle = () => (
    <h2>
      Progaming Community!
    </h2>
  );

  return (
    <div>
      <Title />
      <SubTitle />
      <Buttons />
      <Images />
    </div>
  );
}
