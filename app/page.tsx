
import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navbar className="bg-white text-gray-800 shadow-lg border-b border-gray-200 p-4">
        <NavbarContent className="flex justify-between items-center">
          <div className="flex space-x-8">

            <NavbarItem className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <Link href="/list" className="text-lg font-semibold">List</Link>
            </NavbarItem>

            <NavbarItem className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <Link href="/table" className="text-lg font-semibold">Table</Link>
            </NavbarItem>
          </div>
        </NavbarContent>
      </Navbar>

    </div>
  );
}

