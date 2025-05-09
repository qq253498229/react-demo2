const user = {
  name: '老王',
  imageUrl: 'https://i.imgur.com/JhLgPTT.jpeg',
  imageSize: 150,
};
export default function MyProfile() {
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
    </>
  );
}
