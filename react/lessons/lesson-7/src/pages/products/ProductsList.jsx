import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { categoryList, products as defaultProducts } from '../../store';

function ProductsList() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [productList, setProductList] = useState(defaultProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setLoading(true);

    const stored = JSON.parse(localStorage.getItem('products') || '[]');

    if (stored.length > 0) {
      const merged = defaultProducts.map((p) => {
        const updated = stored.find((s) => s.id === p.id);

        return updated || p;
      });
      setProductList(merged);
    }

    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts =
    selectedCategory === null ? productList : productList.filter((p) => p.categoryId === selectedCategory);

  function goToDetailPage(prod) {
    navigate(`/task1/products/${prod.id}`);
  }

  return (
    <div className="py-3">
      <h4>Категорії товарів</h4>
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          className={`btn ${selectedCategory === null ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setSelectedCategory(null)}
        >
          Усі
        </button>

        {categoryList.map((cat) => (
          <button
            key={cat.id}
            className={`btn ${selectedCategory === cat.id ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <h5>
        {selectedCategory === null
          ? 'Усі товари'
          : `Товари категорії: ${categoryList.find((cat) => cat.id === selectedCategory)?.category}`}
      </h5>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Завантаження...</span>
          </div>
        </div>
      ) : (
        filteredProducts.length > 0 ? (
          <div className="row row-cols-2 row-cols-lg-2 row-cols-sm-1 g-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-auto">
                <div className="card h-100 position-relative flex-row">
                  {/* Кнопка редагування */}
                  <button
                    className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToDetailPage(product);
                    }}
                    title="Редагувати товар"
                  >
                    ✏️
                  </button>

                  {/* Кнопка видалення */}
                  <button
                    className="btn btn-sm btn-danger position-absolute top-0 start-0 m-2 shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm('Ви дійсно хочете видалити цей товар?')) {
                        // видаляємо з localStorage
                        const stored = JSON.parse(localStorage.getItem('products') || '[]');
                        const updated = stored.filter((p) => p.id !== product.id);
                        localStorage.setItem('products', JSON.stringify(updated));

                        // оновлюємо state
                        setProductList((prev) => prev.filter((p) => p.id !== product.id));
                      }
                    }}
                    title="Видалити товар"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1V2h13v-.5a1 1 0 0 0-1-1H2.5zm1 4.5A.5.5 0 0 1 4 5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-8z" />
                    </svg>
                  </button>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Відкрити товар у новій вкладці"
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top p-3"
                      alt={product.title}
                    />
                  </a>

                  <div className="card-body pe-5">
                    <h5 className="card-title">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        {product.title}
                      </a>
                    </h5>
                    <div className="fw-bold fs-4" style={{ color: product.oldPrice ? 'red' : 'black' }}>
                      {product.price} ₴
                    </div>
                    {product.oldPrice && (
                      <div className="text-muted fs-6">
                        <del>{product.oldPrice} ₴</del>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-warning mt-4">Немає товарів у цій категорії.</div>
        )
      )}

      <button className="btn btn-outline-dark mt-4" onClick={() => navigate('/task1')}>
        На головну
      </button>
    </div>
  );
}

export default ProductsList;
