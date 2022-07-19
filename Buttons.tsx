import * as React from 'react';
import './style.css';
import { root } from './index';
import { count } from './App';

export default function Buttons() {
  const Button1 = () => (
    <button
      onClick = { () => (
        count++,
        alert(count)
      )}
    >test</button>
  );
  
  const Button2 = () => (
    <button
      onClick = { () => (
        alert('This is Button2!!')
      )}
    >button2</button>
  );

  return (
    <div>
      <Button1 />
      <Button2 />
    </div>
  );
}