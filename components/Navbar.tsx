'use client';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

export default function HeroNavbar() {
    return (
        <Navbar>
            <NavbarBrand>
                <span className="text-xl font-bold">Meme App</span>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/table" className="text-sm hover:underline">
                        Table
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/list" className="text-sm hover:underline">
                        List
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
