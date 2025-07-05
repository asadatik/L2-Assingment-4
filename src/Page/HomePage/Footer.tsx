"use client"

import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Heart,
  ArrowUp,
} from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    library: [
      { label: "All Books", href: "/books" },
      { label: "Add Book", href: "/add-book" },
      { label: "Borrow Summary", href: "/borrow-summary" },
      
    ],
    resources: [
      { label: "Help Center", href: "/" },
      { label: "Library Rules", href: "/" },
      { label: "Book Recommendations", href: "/" },
      { label: "Reading Lists", href: "/" },
    ],
    company: [
      { label: "About Us", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
    ],
  }

  
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="group inline-flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    BookLibrary
                  </h3>
                  <p className="text-gray-300 text-sm">Digital Library System</p>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Your gateway to endless knowledge. Discover, borrow, and manage books with our modern digital library
                platform.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">info@booklibrary.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">123 Library St, Book City</span>
                </div>
              </div>
            </div>

            {/* Library Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Library</h4>
              <ul className="space-y-3">
                {footerLinks.library.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold mb-4 text-gray-200">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.label}
                        to={social.href}
                        className="group p-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4 md:mb-0">
              <span>© 2024 BookLibrary. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for book lovers</span>
            </div>

          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  )
}
