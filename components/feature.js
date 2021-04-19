import { TextBase } from "../components/text";
export default function Feature({ children, text }) {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="bg-green-400 w-20 h-20 rounded-full flex items-center justify-center">
        {children}
      </div>
      <TextBase className="text-center pt-4 px-10 max-w-sm">{text}</TextBase>
    </div>
  );
}
