'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

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
    setSectorsOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const activeTheme = mounted ? resolvedTheme : 'light';

  const serviceLinks = [
    { name: 'HDPE Pipelines', href: '/services/hdpe-pipelines' },
    { name: 'Villa Construction', href: '/services/villa-construction' },
    { name: 'Villa Renovation', href: '/services/villa-renovation' },
    { name: 'Facility Management', href: '/services/facility-management' },
    { name: 'MEP & Specialized Works', href: '/services/mep-specialized' },
    { name: 'Marine & Industrial Works', href: '/services/marine-industrial' },
    { name: 'Wet Utilities & Drainage', href: '/services/wet-utilities-infrastructure' },
    { name: 'Infrastructure & Civil Works', href: '/services/infrastructure-civil-works' },
  ];

  const sectorLinks = [
    { name: 'Residential & Villas', href: '/sectors/residential-villas' },
    { name: 'Industrial & Manufacturing', href: '/sectors/industrial-manufacturing' },
    { name: 'Marine & Ports', href: '/sectors/marine-ports' },
    { name: 'Commercial & Retail', href: '/sectors/commercial-retail' },
    { name: 'Infrastructure & Utilities', href: '/sectors/infrastructure-utilities' },
    { name: 'Hospitality & Leisure', href: '/sectors/hospitality-leisure' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-app-bg/90 backdrop-blur-md shadow-lg py-2.5 border-b border-app-border'
          : 'bg-transparent py-4.5 border-b border-app-border/20'
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
              <span className="text-app-fg font-heading font-extrabold text-base tracking-wider leading-none group-hover:text-brand-teal transition-colors">
                ARROWHEAD
              </span>
              <span className="text-[9px] text-brand-teal tracking-widest font-bold uppercase mt-1">
                General Contracting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link
              href="/"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/about' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
              }`}
            >
              About
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                id="services-menu-button"
                className={`flex items-center text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal focus:outline-none cursor-pointer ${
                  pathname.startsWith('/services') ? 'text-brand-teal font-bold' : 'text-app-fg/80'
                }`}
              >
                <span>Services</span>
                <svg
                  className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-brand-teal' : 'text-app-fg/40'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-[-250px] top-full pt-2 w-[760px] z-50 transform transition-all duration-200 ${
                  servicesOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                }`}
              >
                <div className="bg-app-card backdrop-blur-md border border-app-border rounded-xl shadow-2xl p-6 grid grid-cols-12 gap-8">
                {/* Mega Menu Column 1: Promo/Highlight */}
                <div className="col-span-4 bg-app-secondary border border-app-border/40 rounded-lg p-5 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block font-mono">
                      OPERATIONAL DIVISIONS
                    </span>
                    <h4 className="font-heading font-extrabold text-sm text-app-fg leading-tight">
                      AHIGC Capabilities
                    </h4>
                    <p className="text-app-muted text-[10px] leading-relaxed font-light">
                      Delivering grade-A pipeline engineering, luxury custom villas, and integrated facilities management in Abu Dhabi.
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-[10px] font-bold text-brand-teal hover:text-brand-teal-hover mt-4 uppercase tracking-widest font-mono"
                  >
                    <span>View All Divisions →</span>
                  </Link>
                </div>

                {/* Mega Menu Column 2: Infrastructure & Civils */}
                <div className="col-span-4 space-y-4">
                  <span className="text-[9px] font-bold text-app-muted tracking-widest uppercase block border-b border-app-border pb-1">
                    Infrastructure &amp; Civils
                  </span>
                  <div className="space-y-3">
                    <div>
                      <Link href="/services/hdpe-pipelines" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        HDPE Pipelines
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Butt-fusion welding certified to DVS 2207.
                      </span>
                    </div>
                    <div>
                      <Link href="/services/wet-utilities-infrastructure" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Wet Utilities &amp; Drainage
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        ADSSC and ADDC compliant pipelines.
                      </span>
                    </div>
                    <div>
                      <Link href="/services/infrastructure-civil-works" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Infrastructure Civil Works
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Earthworks, grading, walls &amp; concrete slabs.
                      </span>
                    </div>
                    <div>
                      <Link href="/services/marine-industrial" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Marine &amp; Industrial
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Heavy foundations, slipways &amp; metal fabrications.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mega Menu Column 3: Building Services & FM */}
                <div className="col-span-4 space-y-4">
                  <span className="text-[9px] font-bold text-app-muted tracking-widest uppercase block border-b border-app-border pb-1">
                    Building Services &amp; FM
                  </span>
                  <div className="space-y-3">
                    <div>
                      <Link href="/services/villa-construction" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Villa Construction
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Turnkey design-build &amp; TAMM permitting.
                      </span>
                    </div>
                    <div>
                      <Link href="/services/villa-renovation" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Villa Extensions
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Structural majlis extensions &amp; expansions.
                      </span>
                    </div>
                    <div>
                      <Link href="/services/mep-specialized" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        MEP &amp; Specialized
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Electrical boards &amp; Civil Defense approvals.
                      </span>
                    </div>
                    <div>
                      <Link href="/services/facility-management" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Facility Management
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Preventative HVAC, MEP &amp; soft FM contracts.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Sectors Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button
                id="sectors-menu-button"
                className={`flex items-center text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal focus:outline-none cursor-pointer ${
                  pathname.startsWith('/sectors') ? 'text-brand-teal font-bold' : 'text-app-fg/80'
                }`}
              >
                <span>Sectors</span>
                <svg
                  className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${
                    sectorsOpen ? 'rotate-180 text-brand-teal' : 'text-app-fg/40'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-[-200px] top-full pt-2 w-[680px] z-50 transform transition-all duration-200 ${
                  sectorsOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                }`}
              >
                <div className="bg-app-card backdrop-blur-md border border-app-border rounded-xl shadow-2xl p-6 grid grid-cols-12 gap-8">
                {/* Mega Menu Column 1: Promo/Highlight */}
                <div className="col-span-5 bg-app-secondary border border-app-border/40 rounded-lg p-5 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block font-mono">
                      MARKETS &amp; SECTORS
                    </span>
                    <h4 className="font-heading font-extrabold text-sm text-app-fg leading-tight">
                      Customized Solutions
                    </h4>
                    <p className="text-app-muted text-[10px] leading-relaxed font-light">
                      Engineering custom solutions for key sectors, meeting utility and government approval guidelines in Abu Dhabi.
                    </p>
                  </div>
                  <Link
                    href="/sectors"
                    className="inline-flex items-center text-[10px] font-bold text-brand-teal hover:text-brand-teal-hover mt-4 uppercase tracking-widest font-mono"
                  >
                    <span>View All Sectors →</span>
                  </Link>
                </div>

                {/* Mega Menu Column 2: Sectors List */}
                <div className="col-span-7 space-y-4">
                  <span className="text-[9px] font-bold text-app-muted tracking-widest uppercase block border-b border-app-border pb-1">
                    Target Industries
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Link href="/sectors/residential-villas" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Residential &amp; Villas
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Private estates &amp; Estidama standards.
                      </span>
                    </div>
                    <div>
                      <Link href="/sectors/industrial-manufacturing" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Industrial &amp; Mfg.
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Mussafah workshops &amp; ICAD loops.
                      </span>
                    </div>
                    <div>
                      <Link href="/sectors/marine-ports" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Marine &amp; Ports
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Coastal slipways &amp; harbor civils.
                      </span>
                    </div>
                    <div>
                      <Link href="/sectors/commercial-retail" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Commercial &amp; Retail
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Tenant fit-outs &amp; building AMC.
                      </span>
                    </div>
                    <div>
                      <Link href="/sectors/infrastructure-utilities" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Infrastructure &amp; Utilities
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Utility networks &amp; sewerage grids.
                      </span>
                    </div>
                    <div>
                      <Link href="/sectors/hospitality-leisure" className="font-bold text-xs text-app-fg hover:text-brand-teal transition-colors block">
                        Hospitality &amp; Leisure
                      </Link>
                      <span className="text-app-muted text-[10px] leading-normal font-light block mt-0.5">
                        Hotels, resort FM &amp; custom fit-outs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <Link
              href="/projects"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/projects' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/insights"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/insights' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-brand-teal ${
                pathname === '/contact' ? 'text-brand-teal font-bold' : 'text-app-fg/80'
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
                className="p-2 rounded-lg text-app-fg/70 hover:text-brand-teal hover:bg-app-secondary transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {activeTheme === 'dark' ? (
                  // Sun Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 9h-1m14.071 8.071l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
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
                className="p-2 rounded-lg text-app-fg/70 hover:text-brand-teal hover:bg-app-secondary transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {activeTheme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m14.071 8.071l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
              className="p-2 rounded text-app-fg/70 hover:text-app-fg hover:bg-app-secondary focus:outline-none"
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

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-app-card border-l border-app-border shadow-2xl p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-5 border-b border-app-border">
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

        <nav className="mt-8 flex flex-col space-y-5 overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
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

          {/* Mobile Services */}
          <div>
            <span className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
              Capabilities
            </span>
            <div className="pl-3 border-l border-brand-teal/20 flex flex-col space-y-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold hover:text-brand-teal transition-colors ${
                    pathname === link.href ? 'text-brand-teal' : 'text-app-fg/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Sectors */}
          <div>
            <span className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
              Sectors
            </span>
            <div className="pl-3 border-l border-brand-teal/20 flex flex-col space-y-2.5">
              {sectorLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold hover:text-brand-teal transition-colors ${
                    pathname === link.href ? 'text-brand-teal' : 'text-app-fg/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
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

          <div className="pt-4">
            <Link
              href="/contact?rfq=true"
              className="flex items-center justify-center w-full px-5 py-3 text-xs font-bold uppercase tracking-wider rounded bg-brand-teal text-primary-dark hover:bg-brand-teal-hover shadow-lg shadow-brand-teal/20 transition-colors"
            >
              Request a Proposal
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
