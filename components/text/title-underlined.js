import TextLg from "./text-lg";

export default function TitleUnderlined({ children }) {
  return (
    <div>
      <TextLg className="text-2xl m-auto w-1/2 text-center pt-6 pb-2">
        {children}
      </TextLg>
      <div className={`bg-green-400 h-1 m-auto w-10 mb-1`} />
    </div>
  );
}
