'use client';

import MyButton from '@/app/my-button';
import AboutPage from '@/app/about-page';
import MyProfile from '@/app/my-profile';
import ShoppingList from '@/app/shopping-list';
import { useState } from 'react';

export default function Home() {
  const [sharedCount, setShareCount] = useState(0);

  function changeSharedCount() {
    setShareCount(sharedCount + 1);
  }

  return (
    <div>
      <h1>Hello world!</h1>
      <MyButton sharedCount={sharedCount} changeSharedCount={changeSharedCount}/>
      <AboutPage/>
      <MyProfile sharedCount={sharedCount} changeSharedCount={changeSharedCount}/>
      <ShoppingList/>
    </div>
  );
}
