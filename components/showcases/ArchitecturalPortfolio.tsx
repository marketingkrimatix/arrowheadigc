'use client';

import React, { useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  categoryLabel: string;
  tags: string[];
  image: string;
  type: string;
  gridClass: string;
  desc?: string;
  badge?: string;
}

export default function ArchitecturalPortfolio() {
  const [selectedTag, setSelectedTag] = useState('all');

  const items: PortfolioItem[] = [
    {
      id: 'estate',
      title: 'ARROWHEAD MAJESTY ESTATE',
      categoryLabel: 'Saadiyat Island | New Build',
      tags: ['saadiyat'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb2LcOnCDJ-6Sx4RJwVyGOk7x88B83EiEoSIpeEiRewaosJorzCaOAQWYux-HOIdLEu6o8MFpHRQiKErTDZYDcZLB-is0iJrt4Ebkp8nbUDrhehPSqWniUVv-UQmChgzxaXa4RYOrxiZF-KyTfiqTccOX-6v9Kz49vOM8KOy41L0JXoUCS-FGbrrIWsqSXIATUHQTd8Owo48a-IE6t928QCIrSf6ECNCghccACgo9y9v4yMk_1SVTQ61aq3eplRwNF0NxtWsaxT-4',
      type: 'estate',
      gridClass: 'md:col-span-8 h-[500px] md:h-[600px]'
    },
    {
      id: 'kitchen',
      title: 'PREMIUM CULINARY SUITE',
      categoryLabel: 'Interior Kitchen Design',
      tags: ['renovations'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7FwGWkVlrMcjJJrvAySncfVRvp-HD7tMmkbzCNlfiU6G0OxatsK7bynLug3n6o_NCs_n2AldOZK_mHjlNoLzLC5lwtuIxdL6ziuS1SDq0CDqKwjRy8d8su_IB4os7id15vF-FDavA9009BhTczLD3J0sUxs-YhVa32-nXlo6AdrYXez0KarhCkqcMu509TUR2u7ry8BEtlzyA8xr5TZw3gNhbanUCDOiP1C5goT8T9BLp69Qj9mYsbqHf16qr0BRjJjrStfHYBjc',
      type: 'kitchen',
      badge: 'KITCHEN',
      gridClass: 'md:col-span-4 h-[300px] md:h-[300px]'
    },
    {
      id: 'lounge',
      title: 'KHALIFA MINIMALIST LOUNGE',
      categoryLabel: 'Living Space Renovation',
      tags: ['khalifa', 'renovations'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWza1ffWsFCuTfw7IJ94aAd7lZrNZhZznIJPoYNPxiZmN7GaUKKmYJy2A8Va85qo0ycWxaHvPdxzICPIcozWe3-sG7C7Pwm-XOJSvlfqHzpLophGDLem_FTP86c59U5E5lW2Y7G6YhGzCUUWLher06DKi4Q5F_YGQEnBT27O0Y3xYrLlKTXAkZFtn9sPw3WXBt7NMauFwmkHdj5_hW_3NIqta_x3A14UVDlfc7xhqBknm0YS6pn6owin6OT4ajKdLCySFOu-IggQ',
      type: 'lounge',
      badge: 'LIVING ROOM',
      gridClass: 'md:col-span-4 h-[300px] md:h-[300px]'
    },
    {
      id: 'pool',
      title: 'THE MARINA OASIS POOL',
      categoryLabel: 'Outdoor Landscape & Terrace',
      tags: ['saadiyat'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6qvvbJ0HnChhdsG7Q-Oz3bbdaG9L7kT39IB8N-bYiWdbxAlYGkQMgRVTRomwSylosaLQEPNhmwk2y1e4jQfOGBjObPb68cqMC8eZkuRV_EaqGC63Anp_eShAFm8wXbAnO1GfLzDMbotaWjECUOvtQOfuoBu8nQtemJstU0wwGqTlP6vpkI3aeMr3ny2PwzdEEkEViNO9je0oS3mfag4QjRKptlSHmi_8pKQMs__yaDEGxnzZUlEFKKE_npauWLhs9MLVvfwngnHg',
      type: 'pool',
      badge: 'ICV COMPLIANT',
      gridClass: 'md:col-span-4 h-[400px] md:h-[400px]'
    },
    {
      id: 'suite',
      title: 'THE KHALIFA MASTER SUITE',
      categoryLabel: 'Interior Suite Architecture',
      tags: ['khalifa'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWdquruqdhr2L_-s3ZclhhCPu5sxAf8xzajghl58celInp8spdS98Szfg2MMpjhi7XGrOBzqS_hPAnPnEzdjtfqJPrHih3treYbyv5Jdw5nciSskEh4gMvtyRG6VcQrgII4PeaQlJ2TR5IYsOM9nV2AL-O3XiQA4t7-_28tC6cqutD7KX7jUpLqK56xFMSpaFBDknHwuKK90NZ0RuqbU7G6e0Fm4iErm-Zvci4fEweeshuGqvMK1n7tCxlxF3GTTSuwFYBgOh4nfw',
      type: 'suite',
      desc: 'Seamless fusion of traditional Emirati hospitality aesthetics and modern brutalist engineering.',
      gridClass: 'md:col-span-8 h-[400px] md:h-[400px]'
    }
  ];

  const filteredItems = selectedTag === 'all'
    ? items
    : items.filter(item => item.tags.includes(selectedTag));

  return (
    <div className="w-full bg-app-bg text-app-fg py-12 max-w-6xl mx-auto">
      {/* Header and tag filters */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8 border-b border-app-border pb-6">
        <div>
          <h3 className="text-xl font-heading font-extrabold uppercase tracking-tight text-app-fg">
            Architectural Portfolio
          </h3>
          <div className="h-0.5 w-16 bg-brand-gold mt-2"></div>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest font-bold">
          <button
            onClick={() => setSelectedTag('all')}
            className={`pb-1 border-b cursor-pointer transition-all ${
              selectedTag === 'all'
                ? 'text-brand-gold border-brand-gold font-semibold'
                : 'border-transparent text-app-muted hover:text-brand-gold'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedTag('saadiyat')}
            className={`pb-1 border-b cursor-pointer transition-all ${
              selectedTag === 'saadiyat'
                ? 'text-brand-gold border-brand-gold font-semibold'
                : 'border-transparent text-app-muted hover:text-brand-gold'
            }`}
          >
            Saadiyat Island
          </button>
          <button
            onClick={() => setSelectedTag('khalifa')}
            className={`pb-1 border-b cursor-pointer transition-all ${
              selectedTag === 'khalifa'
                ? 'text-brand-gold border-brand-gold font-semibold'
                : 'border-transparent text-app-muted hover:text-brand-gold'
            }`}
          >
            Khalifa City
          </button>
          <button
            onClick={() => setSelectedTag('renovations')}
            className={`pb-1 border-b cursor-pointer transition-all ${
              selectedTag === 'renovations'
                ? 'text-brand-gold border-brand-gold font-semibold'
                : 'border-transparent text-app-muted hover:text-brand-gold'
            }`}
          >
            Renovations
          </button>
        </div>
      </div>

      {/* Grid gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-app-border/40 overflow-hidden bg-app-card">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`col-span-12 relative overflow-hidden group border border-app-border/20 transition-all duration-500 ${item.gridClass}`}
          >
            {/* Background Image */}
            <img
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              src={item.image}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
            
            {/* Custom hovering highlight outline */}
            <div className="absolute inset-0 border border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none m-4"></div>
            
            {/* Badge overlay top right if exists */}
            {item.badge && (
              <div className="absolute top-6 right-6 bg-brand-gold text-primary-dark px-3 py-1 font-mono text-[9px] uppercase tracking-wider font-semibold">
                {item.badge}
              </div>
            )}

            {/* Content text */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <span className="font-mono text-brand-gold text-[10px] uppercase tracking-wider mb-2 block font-semibold">
                {item.categoryLabel}
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-tight">
                {item.title}
              </h4>
              {item.desc && (
                <p className="text-gray-300 text-xs mt-3 leading-relaxed max-w-sm hidden sm:block font-light">
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
