import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../store';

function Product() {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: product?.title || '',
    price: product?.price || '',
    oldPrice: product?.oldPrice || '',
    link: product?.link || '',
    imgSrc: product?.imgSrc || '',
  });

  if (isNaN(productId)) {
    return <div className="text-danger">❌ Невірний ID товару.</div>;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log('📝 Збережено товар:', formData);
    alert('Дані товару оновлено (в консолі).');

    navigate('/task1/products');
  }

  if (!product) {
    return <div className="text-danger">Товар не знайдено</div>;
  }

  return (
    <div className="py-4">
      <h4>Редагування товару #{product.id}</h4>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Назва</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Ціна</label>
          <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Стара ціна</label>
          <input
            type="number"
            className="form-control"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Зображення</label>
          <input type="text" className="form-control" name="imgSrc" value={formData.imgSrc} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Посилання</label>
          <input type="text" className="form-control" name="link" value={formData.link} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-success">
          Зберегти
        </button>
      </form>
    </div>
  );
}

export default Product;
