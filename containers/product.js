import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductDetail from "../components/prosuct-detail";

function ProductContainer({ router }) {
  const [product, setProduct] = useState({});
  const { id } = router.query;

  useEffect(
    () =>
      id &&
      fetch(`http://localhost:3000/api/mariscos/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data)),
    [id]
  );
  return <ProductDetail product={product} />;
}

export default withRouter(ProductContainer);
