import Link from "next/link";
import { withRouter } from "next/router";
import { TextBase, TextLg } from "./text";
import { parseCurrency } from "../utils/prices";

function Product({ id, imgSrc, price, children, router }) {
  const category = router.asPath.match(/.+?(?=\/)/g);
  return (
    <Link href={`${category ? category : router.asPath}/${id}`}>
      <a className="p-2">
        <div className="transform transition ease-in-out duration-500 hover:scale-105">
          <img src={imgSrc} alt={children} className="h-60 m-auto" />
        </div>
        <div className="px-4 py-2">
          <TextLg className="text-center">{children}</TextLg>
          <TextBase className="text-center">{parseCurrency(price)}</TextBase>
        </div>
      </a>
    </Link>
  );
}

export default withRouter(Product);
