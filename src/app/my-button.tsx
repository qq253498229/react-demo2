'use client';
export default function MyButton() {
  function testFun() {
    console.log('testFun');
  }

  return (
    <button onClick={testFun}>这是我的button</button>
  );
}
