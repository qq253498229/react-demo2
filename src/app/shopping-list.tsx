const products = [
  {id: 1, title: '卷心菜', isFruit: false},
  {id: 2, title: '大蒜', isFruit: false},
  {id: 3, title: '苹果', isFruit: true},
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}
    >
      {product.title}
    </li>,
  );

  return (
    <ul>{listItems}</ul>
  );
}
