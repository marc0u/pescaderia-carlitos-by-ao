import { useEffect, useState } from "react";
import Product from "../components/product";
import ProductsCollection from "../components/products-collection";

export default function PescadosContainer() {
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      fetch("http://localhost:3000/api/pescados")
        .then((res) => res.json())
        .then((data) => setProducts(data)),
    []
  );

  return (
    <ProductsCollection title="PESCADOS">
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          imgSrc={item.imageUrl}
          price={item.price}
        >
          {item.title}
        </Product>
      ))}
    </ProductsCollection>
  );
}
