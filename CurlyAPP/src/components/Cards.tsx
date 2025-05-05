import React, { useState, useEffect } from "react";
import { Product } from "../types/Product";

interface ProductIngredients {
  id: number;
  ingredients: string[];
}

interface CardsProps {
  products: Product[];
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; 

const Cards: React.FC<CardsProps> = ({ products }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [ingredientsList, setIngredientsList] = useState<ProductIngredients[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetch(`${API_URL}/productIngredients`)
      .then(res => res.json())
      .then(setIngredientsList)
      .catch(console.error);
  }, []);

  const handleLoadMore = () => setVisibleCount(count => count + 9);

  return (
    <div>
      <div className="cards-container">
        {products.slice(0, visibleCount).map(product => {
          const ingredientsObj = ingredientsList.find(
            ing => ing.id === product.ingredientsId
          );
          const isHovered = hoveredId === product.id;
          return (
            <div
              key={product.id}
              className="card"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {isHovered ? (
                ingredientsObj && ingredientsObj.ingredients.length > 0 ? (
                  <div className="card-ingredients">
                    <h3 className="card-ingredients-title">Ingredientes</h3>
                    <ul className="card-ingredients-list">
                      {ingredientsObj.ingredients.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: "48px", width: "100%" }}
                    >
                      <button className="card-link-btn" style={{ width: "100%" }}>
                        Ver producto
                      </button>
                    </a>
                  </div>
                ) : (
                  <div className="card-ingredients">
                    <h3 className="card-ingredients-title">Descripción</h3>
                    <p>
                      {product.description
                        ? product.description
                        : "No se encontraron ingredientes ni descripción para este producto."}
                    </p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: "auto", width: "100%" }}
                    >
                      <button className="card-link-btn" style={{ width: "100%" }}>
                        Ver producto
                      </button>
                    </a>
                  </div>
                )
              ) : (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-product-image"
                  />
                  <h2 className="card-title">{product.name}</h2>
                  <div className="card-category">{product.category}</div>
                  <div className="card-price">{product.price}</div>
                  <div className="card-store">{product.store}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
      {visibleCount < products.length && (
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <button className="load-more-btn" onClick={handleLoadMore}>
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;