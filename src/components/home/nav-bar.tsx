"use client"
import { navLinks } from '@/constants';
import React, { useState } from 'react'
import { ModeToggle } from '../global/mode-toggle';

const NavItems = ({ onClick = () => { } }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    <p className="text-lg m-6 group relative w-max">
                        <span>{item.name}</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
        ))}
    </ul>
);

type Props = {}

const NavBar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Onyeka
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex items-center hidden">
                        <NavItems />
                        <ModeToggle />
                    </nav>

                    
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    )
}

export default NavBar