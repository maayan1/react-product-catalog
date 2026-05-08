export default function ProductCard({ product, onPurchase,onFavorite }) {
  // STEP 2: Destructure what you need from product
   const { 
    id,
    title, 
    imageSrc, 
    specifications, 
    price, 
    stockCount, 
    isFavorite } = product;

  return (
    <div className={isFavorite ? "product-card favorite" : "product-card"}>
        <img src={imageSrc} alt={title} />
        <h1>{id}</h1>
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="stock">In stock: {stockCount}</p>

        <ul>
            {specifications.map((spec,index) => (
              <li key={index}>{spec}</li>
            ))}
        </ul>

        <div className="card-actions" />
      <button
          disabled={stockCount === 0}
          onClick={() => {
            alert(`${title} - $${price}`);
            onPurchase(id);
          }}
        >
          {stockCount === 0 ? "Out of stock" : "Purchase"}
        </button>

        <button onClick={() => onFavorite(id)}>
  {         isFavorite ? "★" : "☆"}
        </button>
    </div>
  );
}