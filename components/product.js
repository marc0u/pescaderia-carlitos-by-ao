import { TextBase, TextSm } from "./text";

export default function Product({ imgSrc, price, children }) {
  return (
    <a
      href="#"
      className="max-w-xs w-auto sm:w-1/2 md:w-1/3 p-2 transform transition ease-in-out duration-500 hover:scale-105"
    >
      <img src={imgSrc} className=" "></img>
      <div className="px-4 py-2">
        <TextBase>{children}</TextBase>
        <TextSm>{price}</TextSm>
      </div>
    </a>
  );
}
