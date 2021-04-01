export default function TextSm({ children, bold, className }) {
  return (
    <div className={`text-sm ${bold && "font-medium"} ${className}`}>
      {children}
    </div>
  );
}
