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