export default function TextBase({ children, bold, className }) {
  return (
    <div className={`text-base ${bold && "font-medium"} ${className}`}>
      {children}
    </div>
  );
}
