import { memo } from 'react';

function GridRow({ name, category, price, rating }) {
  const formatPrice = (value) => {
    return value.toLocaleString('uk-UA');
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{formatPrice(price)} ₴</td>
      <td>{rating}</td>
    </tr>
  );
}

// Запобігання зайвим рендерам рядків
export default memo(GridRow);
