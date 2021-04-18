import TextLg from "./text-lg";

export default function Title({ children, className }) {
  return (
    <TextLg className={`text-2xl text-center ${className}`}>{children}</TextLg>
  );
}
