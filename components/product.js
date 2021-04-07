import Link from "next/link";
import { withRouter } from "next/router";
import { TextBase, TextSm } from "./text";

function Product({ id, imgSrc, price, children, router }) {
  return (
    <Link href={`${router.pathname}/${id}`}>
      <a className="max-w-xs w-auto sm:w-1/2 md:w-1/3 p-2 transform transition ease-in-out duration-500 hover:scale-105">
        <img src={imgSrc} />
        <div className="px-4 py-2">
          <TextBase>{children}</TextBase>
          <TextSm>{price}</TextSm>
        </div>
      </a>
    </Link>
  );
}

export default withRouter(Product);
