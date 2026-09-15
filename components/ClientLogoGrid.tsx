'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { clientPartners, ClientPartner } from '@/data/clients';

interface ClientLogoGridProps {
  showFilter?: boolean;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function ClientLogoGrid({
  showFilter = true,
  title = 'Our Trusted Clients & Partners',
  subtitle = 'Collaborating with tier-1 main contractors, specialized fit-out leaders, and acclaimed engineering consultancies across the UAE.',
  limit,
}: ClientLogoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Partners' },
    { key: 'Main Contractor & Fit-Out', label: 'Main Contractors & Fit-Out' },
    { key: 'Engineering & Architecture Consultancy', label: 'Engineering Consultancies' },
  ];

  const filteredClients = clientPartners.filter((client) => {
    if (activeCategory === 'all') return true;
    return client.category === activeCategory;
  });

  const displayedClients = limit ? filteredClients.slice(0, limit) : filteredClients;

  return (
    <div className="w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
            Industry Relationships
          </span>
          {title && (
            <h2 className="text-3xl font-heading font-extrabold text-app-fg mt-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-app-muted text-sm font-light mt-3 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Filter Tabs */}
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-brand-teal text-primary-dark shadow-md'
                  : 'bg-app-card border border-app-border text-app-muted hover:text-app-fg hover:border-brand-teal/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedClients.map((client, idx) => (
          <div
            key={idx}
            className="bg-app-card border border-app-border rounded-xl p-6 flex flex-col justify-between hover:border-brand-teal/40 transition-all duration-300 shadow-sm hover:shadow-xl group relative overflow-hidden"
          >
            {/* Top Logo / Brand Tile */}
            <div>
              <div className="h-24 w-full bg-white rounded-lg flex items-center justify-center p-3 border border-gray-100 shadow-inner mb-4 overflow-hidden relative">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary-dark/60 font-bold">
                      Consultant Partner
                    </span>
                    <span className="text-xs font-heading font-extrabold text-primary-dark mt-0.5 leading-tight">
                      {client.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Category Pill */}
              <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-teal/10 text-brand-teal mb-2">
                {client.category === 'Main Contractor & Fit-Out' ? 'Fit-Out & Contractor' : 'Consultancy & Design'}
              </span>

              {/* Client Name */}
              <h3 className="text-sm font-heading font-bold text-app-fg group-hover:text-brand-teal transition-colors">
                {client.name}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-app-muted font-light mt-2 leading-relaxed">
                {client.description}
              </p>
            </div>

            {/* Scope Badge */}
            <div className="mt-4 pt-3 border-t border-app-border/60">
              <span className="text-[9px] font-mono text-brand-gold uppercase tracking-wider block">
                Collaboration Scope:
              </span>
              <span className="text-[11px] font-medium text-app-fg/90">
                {client.scope}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
