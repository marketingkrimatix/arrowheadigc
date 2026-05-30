'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';

export default function ProjectsClient() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { label: 'All Projects', key: 'all' },
    { label: 'HDPE Pipelines', key: 'pipelines' },
    { label: 'Villa Construction', key: 'villas' },
    { label: 'Facility Management', key: 'fm' },
    { label: 'MEP Specialized', key: 'mep' },
    { label: 'Marine & Industrial', key: 'marine' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((project) => project.categoryKey === selectedFilter);

  return (
    <div id="projects-portfolio-page" className="bg-app-bg text-app-fg min-h-screen relative">
      
      {/* 1. HERO HEADER */}
      <section className="bg-app-bg py-16 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Projects' }]} />
          <h1 className="text-4xl font-heading font-extrabold text-app-fg mt-3 tracking-tight">
            Case Studies &amp; Delivered Projects
          </h1>
          <p className="mt-4 text-sm text-app-muted max-w-2xl mx-auto font-light leading-relaxed">
            Review our engineering portfolio showing utility pipelines, luxury custom builds, MEP integrations, and facility maintenance contracts in Abu Dhabi.
          </p>
        </div>
      </section>

      {/* 2. FILTER MENU */}
      <section className="py-8 bg-app-secondary border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  selectedFilter === filter.key
                    ? 'bg-brand-teal text-primary-dark border-brand-teal shadow-md shadow-brand-teal/10'
                    : 'bg-app-secondary border-app-border text-app-muted hover:text-brand-teal hover:border-brand-teal/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECTS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-app-muted/60 text-sm">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <Link
                  key={idx}
                  href={`/projects/${project.slug}`}
                  className="bg-app-card border border-app-border offset-border-frame shadow-sm rounded-xl overflow-hidden hover:border-brand-teal/20 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-2xl group"
                >
                  <div>
                    <div className="h-56 bg-gray-900 relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105" 
                        style={{ backgroundImage: `url('${project.image}')` }}
                      ></div>
                      <div className="absolute top-4 left-4 bg-app-card border border-app-border text-brand-teal text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-1 text-[10px] text-app-muted/60 font-medium uppercase tracking-wider">
                        <span>📍</span>
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-app-fg mt-2 leading-tight group-hover:text-brand-teal transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-app-muted text-xs leading-relaxed font-light">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-app-border mt-4 pt-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="font-mono text-brand-teal">{project.stats}</span>
                    <span className="text-app-muted/60 group-hover:text-brand-teal transition-colors">Review Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. BOTTOM LEAD CAPTURE */}
      <section className="py-16 bg-app-secondary border-t border-app-border text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Do You Have a Similar Project in Mind?
        </h2>
        <p className="mt-3 text-app-muted text-xs sm:text-sm max-w-xl mx-auto font-light">
          Submit your project requirements and let our estimators provide a detailed technical bid.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?rfq=true"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-brand-teal-hover shadow-lg transition-all duration-300"
          >
            Submit an RFQ Details Form
          </Link>
        </div>
      </section>
    </div>
  );
}
