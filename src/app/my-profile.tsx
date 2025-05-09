'use client';

import { useState } from 'react';

const user = {
  name: '老王',
  imageUrl: 'https://i.imgur.com/JhLgPTT.jpeg',
  imageSize: 150,
};
export default function MyProfile() {
  const [clickCount, setClickCount] = useState(0);

  function test() {
    setClickCount(clickCount + 1);
  }

  return (
    <>
      <h1>你好：{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
        }}
      />
      <button onClick={test}>点击增加count，已经点击了{clickCount}次</button>
    </>
  );
}
