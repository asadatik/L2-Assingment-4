"use client"


import { BookOpen, Plus, FileText, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    {
      href: "/books",
      label: "All Books",
      icon: BookOpen,
    },
    {
      href: "/add-book",
      label: "Add Book",
      icon: Plus,
    },
    {
      href: "/borrow-summary",
      label: "Borrow Summary",
      icon: FileText,
    },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            to='/'
            className="group flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="group-hover:scale-105 transition-transform duration-300">BookLibrary</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={link.href}
                  to='/'
                  className="group relative px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:scale-105"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                    <span className="font-medium">{link.label}</span>
                  </div>

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:scale-110"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-2 space-y-1">
            {navLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={link.href}
                  to='/'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
                    isMobileMenuOpen ? "animate-in slide-in-from-left" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                    <IconComponent className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Animated border bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </nav>
  )
}
