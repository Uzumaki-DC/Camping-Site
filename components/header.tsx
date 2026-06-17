'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Camps',
    href: '/locations',
    children: [
      { name: 'All Camps', href: '/locations' },
      { name: 'Tanay, Rizal', href: '/locations/tanay' },
      { name: 'Amadeo, Cavite', href: '/locations/amadeo' },
    ]
  },
  { name: 'Activities', href: '/groups-events' },
  { name: 'Gallery', href: '/gallery' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about' },
      { name: 'Packing Guide', href: '/faq#packing' },
      { name: 'Reservation Steps', href: '/contact' },
    ]
  },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      transparent ? 'bg-transparent' : 'bg-background/95 backdrop-blur-sm border-b border-border'
    )}>
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <Link href="/contact" className="hover:underline">
          Tanay 2026 rates: day tour from PHP 150/adult, overnight from PHP 250/adult. Reserve via GCash downpayment.
        </Link>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={cn(
                'text-base sm:text-lg tracking-[0.15em] font-bold uppercase leading-tight',
                transparent ? 'text-primary-foreground' : 'text-foreground'
              )}>
                Windmills Viewpoint Campgrounds
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors flex items-center gap-1',
                    transparent
                      ? 'text-primary-foreground/90 hover:text-primary-foreground'
                      : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-48">
                    <div className="bg-background border border-border rounded-md shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
                transparent ? 'text-primary-foreground' : 'text-foreground'
              )}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-background z-50">
          <div className="p-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block text-base text-muted-foreground py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block w-full bg-primary text-primary-foreground text-center px-6 py-3 text-sm font-medium uppercase tracking-wider mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
