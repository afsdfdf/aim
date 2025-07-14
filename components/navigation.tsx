"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms延迟，给用户时间移动到下拉菜单
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
  }

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null)
  }

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "#features",
      dropdown: [
        { name: "Computing Market", href: "/computing" },
        { name: "AI Generator", href: "/ai-generator" },
        { name: "Model Protocol", href: "/protocol" },
        { name: "DAO Governance", href: "/dao" },
      ],
    },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Team", href: "/team" },
    {
      name: "Resources",
      href: "#resources",
      dropdown: [
        { name: "Whitepaper", href: "/whitepaper" },
        { name: "Developer Docs", href: "/developer-docs" },
      ],
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="relative">
              <Image
                src="/logoh.png"
                alt="AIMINT Logo"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition-all duration-300 hover:scale-105 relative group ${
                    scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <>
                    {/* 增加一个透明的连接区域，减少鼠标移动时的空隙 */}
                    <div className="absolute top-full left-0 w-48 h-2 bg-transparent z-40" />
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-2 rounded-xl transition-all duration-300"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 py-1 px-4 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-4">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 py-3 rounded-xl"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
