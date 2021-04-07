import { TextBase, TextSm } from "../components/text";

export default function ProductDetail({ product }) {
  return (
    <div>
      <img src={product.imageUrl} />
      <div className="px-4 py-2">
        <TextBase>{product.title}</TextBase>
        <TextSm>{product.price}</TextSm>
        <TextSm>{product.description}</TextSm>
      </div>
    </div>
  );
}
