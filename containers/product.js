import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductDetail from "../components/prosuct-detail";
import ProductsCollection from "../components/products-collection";
import Product from "../components/product";
import getRandomProducts from "../utils/products";

function ProductContainer({ router }) {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const { asPath } = router;
  const category = asPath.match(/(?<=\/).+?(?=\/)/g)[0];

  useEffect(() => {
    asPath &&
      fetch(
        `https://pescaderia-carlitos-by-ao.vercel.app/https://pescaderia-carlitos-by-ao.vercel.app/api${asPath}`
      )
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          fetch(
            `https://pescaderia-carlitos-by-ao.vercel.app/https://pescaderia-carlitos-by-ao.vercel.app/api/${category}`
          )
            .then((res) => res.json())
            .then((cat) => {
              setProducts(getRandomProducts(cat, 2, data.id));
            });
        });
  }, [asPath]);

  return (
    <div>
      <ProductDetail product={product} />
      <ProductsCollection title="PRODUCTOS RELACIONADOS">
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
    </div>
  );
}

export default withRouter(ProductContainer);
