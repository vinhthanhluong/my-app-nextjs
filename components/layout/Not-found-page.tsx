
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-gray-500">Page not found</p>

      <Link
        href="/"
        className="inline-block mt-6 px-4 py-2 bg-black text-white"
      >
        Back Home
      </Link>
    </div>
  );
}