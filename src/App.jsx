import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import iphone15 from "./assets/img/iphone-15.png";
import airpodsPro from "./assets/img/airpods-pro.png";
import galaxyWatch6 from "./assets/img/galaxy watch 6.png";
import sonyHeadphones from "./assets/img/sony-wh1000xm5.png";
import galaxyS24 from "./assets/img/galaxy-s24.png";
import appleWatchSE from "./assets/img/apple-watch-se.png";

const initialProducts = [
  {
    id: 1,
    title: "iPhone 15",
    imageSrc: iphone15,
    specifications: ["6.1-inch display", "A16 Bionic chip", "48MP camera"],
    price: 799,
    stockCount: 3,
    category: "Phone",
    isFavorite: false,
  },
  {
    id: 2,
    title: "AirPods Pro",
    imageSrc: airpodsPro,
    specifications: ["Active noise cancellation", "Adaptive audio", "USB-C"],
    price: 249,
    stockCount: 1,
    category: "Audio",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Galaxy Watch 6",
    imageSrc: galaxyWatch6,
    specifications: ["1.4-inch AMOLED", "Health tracking", "40hr battery"],
    price: 329,
    stockCount: 0,
    category: "Watch",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    imageSrc: sonyHeadphones,
    specifications: ["30hr battery", "Multipoint connection", "LDAC"],
    price: 399,
    stockCount: 5,
    category: "Audio",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Samsung Galaxy S24",
    imageSrc: galaxyS24,
    specifications: ["6.2-inch display", "Snapdragon 8 Gen 3", "50MP camera"],
    price: 899,
    stockCount: 4,
    category: "Phone",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Apple Watch SE",
    imageSrc: appleWatchSE,
    specifications: ["40mm case", "Crash detection", "GPS"],
    price: 249,
    stockCount: 2,
    category: "Watch",
    isFavorite: false,
  },
];

export default function App() {
  // STEP 1: Add your state here
  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState("All");

  // STEP 4: Add handlePurchase here

  const handlePurchase = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, stockCount: p.stockCount - 1 }
          : p
      )
    );
  };




  // STEP 5: Add handleFavorite here


  const handleFavorite = (id) => {
  setProducts(
    products.map((p) =>
      p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
    )
  );
};

const favorites = products.filter((p) => p.isFavorite);

const visibleProducts =
  activeCategory === "All"
    ? products
    : products.filter(
        (p) => p.category === activeCategory
      );

const under500 = products.filter(
  (p) => p.price < 500
);
  // STEP 6: Add activeCategory state and filtering here

  return (
    <div className="app">
        <h1>Tech Catalog</h1>

        {/* STEP 6: Add category filter buttons here */}

      <div className="filters">
      {["All", "Phone", "Audio", "Watch"].map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={activeCategory === cat ? "active" : ""}
        >
          {cat}
        </button>
       ))}
    </div>

      <h2>All Products</h2>

          <ProductList
          products={visibleProducts}
          onPurchase={handlePurchase}
          onFavorite={handleFavorite}
        />
      {/* STEP 3: Render ProductList here */}

      <h2>Under $500</h2>
      {/* STEP 6: Render filtered list here */}
       <ProductList
          products={under500}
          onPurchase={handlePurchase}
          onFavorite={handleFavorite}
       />

      <h2>My Favorites</h2>
      {/* STEP 5: Render favorites list here */}
      {favorites.length === 0 && (<p>No favorites yet.</p>)}

      <ProductList
        products={favorites}
        onPurchase={handlePurchase}
        onFavorite={handleFavorite}
      />
      
    </div>
  );
}