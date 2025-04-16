
import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">

      <Navbar className="bg-white/90 backdrop-blur-md text-gray-800 shadow-md border-b border-gray-200 px-6 py-4">
        <NavbarContent className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="flex space-x-8">
            <NavbarItem className="hover:text-blue-600 transition-colors">
              <Link href="/list" className="text-lg font-semibold">
                List
              </Link>
            </NavbarItem>
            <NavbarItem className="hover:text-blue-600 transition-colors">
              <Link href="/table" className="text-lg font-semibold">
                Table
              </Link>
            </NavbarItem>
          </div>
        </NavbarContent>
      </Navbar>

      <main className="flex-grow flex items-center justify-center text-center px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to the Meme Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore, edit, and manage your favorite memes in a sleek, user-friendly interface.
          </p>
        </div>
      </main>

      <footer className="text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Meme App by Solomiia
      </footer>
    </div>
  );
}

