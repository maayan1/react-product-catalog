import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  onPurchase,
  onFavorite,
}) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPurchase={onPurchase}
          onFavorite={onFavorite}
       />
     )
     )}
    </div>
  );
}

