import React, { useState, useEffect } from 'react'

const menuItems = [
  { id: 'about', label: '关于我们' },
  { id: 'capabilities', label: '核心能力' },
  { id: 'features', label: 'AI功能' },
  { id: 'saas', label: 'SaaS方案' },
  { id: 'custom', label: '定制开发' },
  { id: 'contact', label: '联系我们' }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-glass shadow-lg' : ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Before scroll: icon + white text on dark bg */}
            <div className={`flex items-center gap-1.5 transition-opacity duration-300 ${scrolled ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}`}>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg overflow-hidden flex-shrink-0">
                <img src="/logo1.png" alt="华谦" className="w-full h-full object-cover scale-110" />
              </div>
              <img src="/logo6.png" alt="HuaQian" className="h-4 md:h-5" />
            </div>
            {/* After scroll: full logo on white bg */}
            <div className={`transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}>
              <img src="/huaqian_logo.png" alt="华谦AI" className="h-9 md:h-10" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-primary transition-colors font-medium text-sm tracking-wide ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button className="btn btn-primary hidden md:inline-flex text-xs lg:text-sm px-4 py-2 lg:px-6 lg:py-2.5" onClick={() => scrollToSection('contact')}>
              咨询方案
            </button>

            <button 
              className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-slate-600 hover:bg-orange-50 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-4">
              <button className="btn btn-primary w-full" onClick={() => { window.dispatchEvent(new Event('open-consult-form')); setMobileMenuOpen(false) }}>咨询方案</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar