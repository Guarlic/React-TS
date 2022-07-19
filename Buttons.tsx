import * as React from 'react';
import './style.css';

export default function Buttons() {
  const Button1 = () => (
    <button
      onClick = { () => (
        alert('Hello!!')
      )}
    >test</button>
  );

  return (
    <Button1 />
  );
}