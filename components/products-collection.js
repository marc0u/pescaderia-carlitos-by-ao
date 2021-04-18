import { TextLg, TitleUnderlined } from "../components/text";

export default function ProductsCollection({ children, title }) {
  return (
    <div className="p-3 pb-10">
      <TitleUnderlined>{title}</TitleUnderlined>
      <div className="flex flex-wrap justify-center">{children}</div>
    </div>
  );
}
