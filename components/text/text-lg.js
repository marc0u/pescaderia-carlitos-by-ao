export default function TextLg({ children, bold, className }) {
  return (
    <div className={`text-lg ${bold && "font-medium"} ${className}`}>
      {children}
    </div>
  );
}
