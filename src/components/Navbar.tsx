import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">M</span>
          </div>
          <span className="text-xl font-semibold">menü</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="/avantajlar" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Avantajlar
          </a>
          <a 
            href="/ucretler" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Ücretler
          </a>
          <a 
            href="/iletisim" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            İletişim
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="/giris" 
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Giriş yap
          </a>
          <a 
            href="/kayit" 
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Kayıt ol
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="/avantajlar" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Avantajlar
              </a>
              <a 
                href="/ucretler" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Ücretler
              </a>
              <a 
                href="/iletisim" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                İletişim
              </a>
              <hr className="border-gray-100" />
              <a 
                href="/giris" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Giriş yap
              </a>
              <a 
                href="/kayit" 
                className="bg-black text-white rounded-full py-2 px-4 text-center hover:bg-gray-800 transition-colors"
              >
                Kayıt ol
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
