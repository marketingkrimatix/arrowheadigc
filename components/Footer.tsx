import React from 'react';
import Link from 'next/link';
import AnimatedLogoSVG from './AnimatedLogoSVG';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="global-site-footer" className="bg-app-secondary text-app-fg/80 border-t border-app-border pt-16 pb-8 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-app-border">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
            <img
                src="/logo.jpeg"
                alt="AHIGC Logo"
                className="h-10 w-auto rounded object-contain bg-white p-0.5"
              // <AnimatedLogoSVG
              //   animated={false}
              //   showText={false}
              //   className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-app-fg font-heading font-extrabold text-sm tracking-wider leading-none">
                  ARROWHEAD
                </span>
                <span className="text-[8px] text-brand-teal tracking-widest font-bold uppercase mt-1">
                  General Contracting
                </span>
              </div>
            </Link>
            <p className="text-app-muted text-xs leading-relaxed font-light">
              ArrowHead International General Contracting LLC delivers premium engineering, pipeline works, custom villas, and integrated facility management.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[10px] font-mono font-bold bg-app-card border border-brand-teal/20 text-brand-teal px-3 py-1 rounded shadow-sm">
                DED License: CN-4998977
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-brand-teal font-heading font-bold text-xs uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2 text-xs text-app-muted font-medium">
              <li>
                <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-teal transition-colors">Delivered Projects</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-brand-teal transition-colors">Insights &amp; Guides</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-teal transition-colors">Inquire RFQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4">
            <h3 className="text-brand-teal font-heading font-bold text-xs uppercase tracking-widest">Core Divisions</h3>
            <ul className="space-y-2 text-xs text-app-muted font-medium">
              <li>
                <Link href="/services/hdpe-pipelines" className="hover:text-brand-teal transition-colors">HDPE Pipeline Supply</Link>
              </li>
              <li>
                <Link href="/services/wet-utilities-infrastructure" className="hover:text-brand-teal transition-colors">Wet Utilities &amp; Drainage</Link>
              </li>
              <li>
                <Link href="/services/infrastructure-civil-works" className="hover:text-brand-teal transition-colors">Infrastructure Civil Works</Link>
              </li>
              <li>
                <Link href="/services/villa-construction" className="hover:text-brand-teal transition-colors">Villa Construction</Link>
              </li>
              <li>
                <Link href="/services/villa-renovation" className="hover:text-brand-teal transition-colors">Villa Extensions</Link>
              </li>
              <li>
                <Link href="/services/facility-management" className="hover:text-brand-teal transition-colors">Facility Management</Link>
              </li>
              <li>
                <Link href="/services/mep-specialized" className="hover:text-brand-teal transition-colors">MEP Works</Link>
              </li>
              <li>
                <Link href="/services/marine-industrial" className="hover:text-brand-teal transition-colors">Marine &amp; Industrial</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-brand-teal font-heading font-bold text-xs uppercase tracking-widest">Head Office</h3>
            
            {/* Google Maps Embed */}
            <div className="w-full h-28 rounded-lg overflow-hidden border border-app-border bg-app-card shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.619077977464!2d54.4939923!3d24.364239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41df25e4c029%3A0xc3b8a36ea245ef01!2sPrestige+Towers!5e0!3m2!1sen!2sae!4v1717070000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ArrowHead Office Location Map"
              ></iframe>
            </div>

            <div className="space-y-3 text-xs text-app-muted leading-relaxed">
              <p className="flex items-start">
                <span className="text-brand-teal mr-2">📍</span>
                <span>5th Floor, Prestige Towers 17,<br />Capital Mall, Mussaffah,<br />Abu Dhabi, UAE</span>
              </p>
              <p className="flex items-center">
                <span className="text-brand-teal mr-2">📞</span>
                <Link href="tel:+97125545230" className="hover:text-brand-teal font-semibold transition-colors">+971 2 554 5230</Link>
              </p>
              <p className="flex items-center">
                <span className="text-brand-teal mr-2">✉️</span>
                <Link href="mailto:info@arrowheadigc.com" className="hover:text-brand-teal font-semibold transition-colors">info@arrowheadigc.com</Link>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-app-muted/80 font-medium">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4 text-center md:text-left">
            <p>&copy; {currentYear} ArrowHead International General Contracting LLC. All rights reserved.</p>
            <span className="hidden md:inline text-app-border/60">|</span>
            <div className="flex justify-center space-x-3">
              <Link href="/privacy-policy" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
              <span className="text-app-muted/40">&middot;</span>
              <Link href="/terms-conditions" className="hover:text-brand-teal transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-brand-teal transition-colors">ADSSC Approved</span>
            <span className="hover:text-gray-400 transition-colors">ADDC Standards Compliant</span>
            <span className="hover:text-gray-400 transition-colors">Estidama Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

