'use client'
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

function Navbar() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Shaima pv</h1>
                <div className="flex items-center space-x-6">
                    <nav className="flex space-x-6 text-sm font-medium">
                        <a href="#about" className="hover:text-blue-400 transition">About</a>
                        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                        <a href="#interest" className="hover:text-blue-400 transition">Interests</a>
                        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                    </nav>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {theme === 'light' ? (
                            <Moon size={20} />
                        ) : (
                            <Sun size={20} />
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar