
import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Meme App!</h1>
      <p className="text-lg text-gray-600">
        Use the navigation above to explore the meme list or table.
      </p>
    </div>
  );
}

