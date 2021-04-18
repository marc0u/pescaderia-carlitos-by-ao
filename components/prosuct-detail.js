import { TextBase, TextLg, Title, TitleUnderlined } from "../components/text";
import { parseCurrency } from "../utils/prices";

export default function ProductDetail({ product }) {
  return (
    <div>
      <TitleUnderlined>{product.title}</TitleUnderlined>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.imageUrl} className="h-80 m-auto md:h-96" />
        </div>
        <div className="px-4 pb-6 md:mr-8 md:w-1/2 md:pt-10">
          <Title className="py-8 text-center md:text-left">
            {parseCurrency(product.price)}
          </Title>
          <TextLg className="p-2">DESCRIPCIÓN:</TextLg>
          <TextBase className="p-2">{product.description}</TextBase>
        </div>
      </div>
    </div>
  );
}
