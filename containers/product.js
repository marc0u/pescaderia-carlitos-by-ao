import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductDetail from "../components/prosuct-detail";

function ProductContainer({ router }) {
  const [product, setProduct] = useState({});
  const { asPath } = router;

  useEffect(
    () =>
      asPath &&
      fetch(`http://localhost:3000/api${asPath}`)
        .then((res) => res.json())
        .then((data) => setProduct(data)),
    [asPath]
  );
  return <ProductDetail product={product} />;
}

export default withRouter(ProductContainer);
