import React, { useState } from 'react'


const Button = () => {
  let [count, setCount] = useState(0);
  const cong = (value) => {
    prompt("Nhap vao gia tri: ")
    setCount(count + value);
  };

  const tru = (value) => {
    prompt("Nhap vao gia tri: ")
    setCount(count - value);
  };

  const nhan = () => {
    prompt("Nhap vao gia tri: ")
    setCount(count * value);
  };

  const chia = () => {
    prompt("Nhap vao gia tri: ")
    setCount(count / value);
  };
  return (
    <div>
      <button onClick={cong}>+</button>
      <button onClick={tru}>-</button>
      <button onClick={nhan}>*</button>
      <button onClick={chia}>/</button>

    </div>
  );
};

export default Button;