import { TextBase, TextSm, TitleUnderlined } from "../components/text";

export default function ProductDetail({ product }) {
  return (
    <div>
      <TitleUnderlined>{product.title}</TitleUnderlined>
      <img src={product.imageUrl} className="w-full max-w-md m-auto" />

      <div className="px-4 py-2">
        <TextBase className="py-2">{product.price}</TextBase>
        <TextBase>{product.description}</TextBase>
      </div>
    </div>
  );
}
