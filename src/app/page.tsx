import MyButton from '@/app/my-button';
import AboutPage from '@/app/about-page';
import MyProfile from '@/app/my-profile';
import ShoppingList from '@/app/shopping-list';

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <MyButton/>
      <AboutPage/>
      <MyProfile/>
      <ShoppingList/>
    </div>
  );
}
