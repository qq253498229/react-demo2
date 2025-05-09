'use client';

import { useState } from 'react';

export default function MyButton() {
  const [clickCount, setClickCount] = useState(0);

  function testFun() {
    console.log('testFun');
    setClickCount(clickCount + 1);
  }

  return (
    <button onClick={testFun}>这是我的button，已经点击了{clickCount}次</button>
  );
}
