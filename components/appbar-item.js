import Link from "next/link";

export default function AppBarItem({ children, href }) {
  return (
    <Link href={href}>
      <a className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
        {children}
      </a>
    </Link>
  );
}
