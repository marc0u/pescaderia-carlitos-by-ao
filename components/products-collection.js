import { TextLg, TitleUnderlined } from "../components/text";

export default function ProductsCollection({ children, title }) {
  return (
    <div className="p-3 pb-10">
      {/* <TextLg className="text-2xl m-auto w-1/2 text-center pt-6 pb-2">
        {title}
      </TextLg>
      <div className="bg-green-400 h-1 m-auto w-1/12 mb-1" /> */}
      <TitleUnderlined>{title}</TitleUnderlined>
      <div className="flex flex-wrap justify-center">{children}</div>
    </div>
  );
}
