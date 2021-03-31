export default function FooterItem({ title, children }) {
  return (
    <div className="p-4">
      <h1 className="font-bold text-lg pb-2">{title}</h1>
      {children}
    </div>
  );
}
