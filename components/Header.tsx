'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import AnimatedLogoSVG from './AnimatedLogoSVG';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isHomeTransparent = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const activeTheme = mounted ? resolvedTheme : 'light';

  const infrastructureLinks = [
    { name: 'HDPE Pipelines', href: '/services/hdpe-pipelines', desc: 'PE100 welding to DVS 2207' },
    { name: 'Wet Utilities & Drainage', href: '/services/wet-utilities-infrastructure', desc: 'Municipal utility compliant networks' },
    { name: 'Infrastructure Civil Works', href: '/services/infrastructure-civil-works', desc: 'Earthworks, grading & concrete slabs' },
    { name: 'Industrial Warehouses', href: '/services/industrial-warehouses', desc: 'PEB steel portal frames & TR34 slabs' },
  ];

  const buildingLinks = [
    { name: 'Office Interiors & Fit-Out', href: '/services/office-interiors', desc: 'Commercial workspaces & retail fit-out' },
    { name: 'Villa Construction', href: '/services/villa-construction', desc: 'Turnkey design-build & TAMM permits' },
    { name: 'Villa Extensions', href: '/services/villa-renovation', desc: 'Structural majlis extensions' },
    { name: 'MEP & Specialized', href: '/services/mep-specialized', desc: 'Electrical DB & Civil Defense' },
    { name: 'Facility Management', href: '/services/facility-management', desc: 'Preventative HVAC & hard FM AMC' },
  ];

  const sectorLinks = [
    { name: 'Residential & Villas', href: '/sectors/residential-villas', desc: 'Private estates & Estidama' },
    { name: 'Industrial & Manufacturing', href: '/sectors/industrial-manufacturing', desc: 'Mussafah & ICAD zones' },
    { name: 'Commercial & Retail', href: '/sectors/commercial-retail', desc: 'Tenant fit-outs & building AMC' },
    { name: 'Infrastructure & Utilities', href: '/sectors/infrastructure-utilities', desc: 'Utility transmission grids' },
    { name: 'Hospitality & Leisure', href: '/sectors/hospitality-leisure', desc: 'Resort FM & luxury fit-outs' },
  ];

  const allServiceLinks = [...buildingLinks, ...infrastructureLinks];

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-scrolled-header backdrop-blur-md shadow-lg py-2.5 border-b border-app-border'
            : `bg-transparent py-4.5 border-b ${isHomeTransparent ? 'border-white/10' : 'border-app-border/20'}`
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.jpeg"
              alt="AHIGC Logo"
              className="h-10 sm:h-12 w-auto rounded object-contain bg-white p-0.5 group-hover:scale-102 transition-transform duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className={`font-heading font-extrabold text-base tracking-wider leading-none group-hover:text-brand-teal transition-colors ${
                isHomeTransparent ? 'text-white' : 'text-app-fg'
              }`}>
                ARROWHEAD
              </span>
              <span className="text-[9px] text-brand-teal tracking-widest font-bold uppercase mt-1">
                General Contracting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/' ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/about' ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
              }`}
            >
              About
            </Link>

            {/* Unified Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                id="services-menu-button"
                className={`flex items-center text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal focus:outline-none cursor-pointer ${
                  pathname.startsWith('/services') || pathname.startsWith('/sectors') ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
                }`}
              >
                <span>Services</span>
                <svg
                  className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-brand-teal' : isHomeTransparent ? 'text-white/40' : 'text-app-fg/40'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div
                className={`absolute left-[-260px] xl:left-[-300px] top-full pt-2 w-[880px] xl:w-[940px] z-50 transform transition-all duration-200 ${
                  servicesOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                }`}
              >
                <div className="bg-app-card backdrop-blur-md border border-app-border rounded-xl shadow-2xl p-6 grid grid-cols-12 gap-6">
                  {/* Mega Menu Column 1: Promo/Highlight */}
                  <div className="col-span-3 bg-app-secondary border border-app-border/40 rounded-lg p-5 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block font-mono">
                        CAPABILITIES &amp; SECTORS
                      </span>
                      <h4 className="font-heading font-extrabold text-sm text-app-fg leading-tight">
                        AHIGC Solutions
                      </h4>
                      <p className="text-app-muted text-[10px] leading-relaxed font-light">
                        Grade-A pipeline engineering, luxury custom villas, and integrated facility management across Abu Dhabi.
                      </p>
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-[10px] font-bold text-brand-teal hover:text-brand-teal-hover mt-4 uppercase tracking-widest font-mono"
                    >
                      <span>Explore All Services →</span>
                    </Link>
                  </div>

                  {/* Mega Menu Column 2: Building & FM */}
                  <div className="col-span-3 space-y-3.5">
                    <span className="text-[9px] font-bold text-brand-teal tracking-widest uppercase block border-b border-app-border pb-1 font-mono">
                      Building &amp; FM
                    </span>
                    <div className="space-y-3">
                      {buildingLinks.map((item) => (
                        <div key={item.href}>
                          <Link href={item.href} className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                            {item.name}
                          </Link>
                          <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mega Menu Column 3: Infrastructure & Civils */}
                  <div className="col-span-3 space-y-3.5">
                    <span className="text-[9px] font-bold text-brand-teal tracking-widest uppercase block border-b border-app-border pb-1 font-mono">
                      Infrastructure &amp; Civils
                    </span>
                    <div className="space-y-3">
                      {infrastructureLinks.map((item) => (
                        <div key={item.href}>
                          <Link href={item.href} className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                            {item.name}
                          </Link>
                          <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mega Menu Column 4: Industry Sectors */}
                  <div className="col-span-3 space-y-3.5">
                    <span className="text-[9px] font-bold text-brand-gold tracking-widest uppercase block border-b border-app-border pb-1 font-mono">
                      Target Sectors
                    </span>
                    <div className="space-y-2.5">
                      {sectorLinks.map((item) => (
                        <div key={item.href}>
                          <Link href={item.href} className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                            {item.name}
                          </Link>
                          <span className="text-app-muted text-[10px] leading-normal font-light block">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/projects' ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/clients"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/clients' ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
              }`}
            >
              Clients
            </Link>

            <Link
              href="/insights"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/insights' ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/contact' ? 'text-brand-teal font-bold' : isHomeTransparent ? 'text-white/80' : 'text-app-fg/80'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Theme Toggle & RFQ Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  isHomeTransparent
                    ? 'text-white/70 hover:text-brand-teal hover:bg-white/10'
                    : 'text-app-fg/70 hover:text-brand-teal hover:bg-app-secondary'
                }`}
                aria-label="Toggle Theme"
              >
                {activeTheme === 'dark' ? (
                  // Sun Icon
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  // Moon Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            )}

            <Link
              id="header-rfq-button"
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded bg-brand-teal text-primary-dark hover:bg-brand-teal-hover hover:-translate-y-[1px] shadow-lg shadow-brand-teal/20 transition-all duration-300 cursor-pointer"
            >
              Request a Proposal
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  isHomeTransparent
                    ? 'text-white/70 hover:text-brand-teal hover:bg-white/10'
                    : 'text-app-fg/70 hover:text-brand-teal hover:bg-app-secondary'
                }`}
                aria-label="Toggle Theme"
              >
                {activeTheme === 'dark' ? (
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded focus:outline-none transition-colors ${
                isHomeTransparent
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-app-fg/70 hover:text-app-fg hover:bg-app-secondary'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Drawer Backdrop */}
    {isOpen && (
      <div
        className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    )}

    {/* Mobile Drawer */}
    <div
      className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-app-card border-l border-app-border shadow-2xl p-6 z-[55] transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col`}
    >
      <div className="flex items-center justify-between pb-5 border-b border-app-border shrink-0">
        <span className="text-app-fg font-heading font-extrabold text-sm uppercase tracking-wider">Navigation</span>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded text-app-fg/60 hover:text-app-fg hover:bg-app-secondary focus:outline-none"
          aria-label="Close navigation menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="mt-8 flex flex-col space-y-5 overflow-y-auto flex-1 pr-2">
        <Link
          href="/"
          className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-teal transition-colors ${
            pathname === '/' ? 'text-brand-teal' : 'text-app-fg/80'
          }`}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-teal transition-colors ${
            pathname === '/about' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
          }`}
        >
          About
        </Link>

        {/* Mobile Services & Sectors */}
        <div>
          <Link
            href="/services"
            className="block text-[10px] font-bold text-app-muted hover:text-brand-teal uppercase tracking-widest mb-2 transition-colors duration-200"
          >
            Services &amp; Sectors
          </Link>
          <div className="pl-3 border-l border-brand-teal/20 flex flex-col space-y-3">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono uppercase tracking-wider text-brand-teal block font-semibold">
                Core Divisions
              </span>
              {allServiceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold hover:text-brand-teal transition-colors block ${
                    pathname === link.href ? 'text-brand-teal' : 'text-app-fg/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-1.5 pt-1 border-t border-app-border/40">
              <span className="text-[9px] font-mono uppercase tracking-wider text-brand-gold block font-semibold">
                Industry Sectors
              </span>
              {sectorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold hover:text-brand-teal transition-colors block ${
                    pathname === link.href ? 'text-brand-teal' : 'text-app-fg/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/projects"
          className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-teal transition-colors ${
            pathname === '/projects' ? 'text-brand-teal' : 'text-app-fg/80'
          }`}
        >
          Projects
        </Link>

        <Link
          href="/clients"
          className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-teal transition-colors ${
            pathname === '/clients' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
          }`}
        >
          Clients
        </Link>

        <Link
          href="/insights"
          className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-teal transition-colors ${
            pathname === '/insights' ? 'text-brand-teal' : 'text-app-fg/80'
          }`}
        >
          Insights
        </Link>

        <Link
          href="/contact"
          className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-teal transition-colors ${
            pathname === '/contact' ? 'text-brand-teal' : 'text-app-fg/80'
          }`}
        >
          Contact
        </Link>

      </nav>

      {/* Pinned Request a Proposal button at the bottom */}
      <div className="pt-5 border-t border-app-border mt-auto shrink-0">
        <Link
          href="/contact?rfq=true"
          className="flex items-center justify-center w-full px-5 py-3 text-xs font-bold uppercase tracking-wider rounded bg-brand-teal text-primary-dark hover:bg-brand-teal-hover shadow-lg shadow-brand-teal/20 transition-colors"
        >
          Request a Proposal
        </Link>
      </div>
    </div>
  </>
);
}
