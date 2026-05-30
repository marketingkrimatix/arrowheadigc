'use client';

import React from 'react';

interface ProjectItem {
  num: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

export default function EditorialMasonry() {
  const projects: ProjectItem[] = [
    {
      num: '01',
      title: 'Al Raha Gardens Luxury Estate',
      category: 'Villa Construction',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[4/5]'
    },
    {
      num: '02',
      title: 'Yas Trunk Water Supply Pipeline',
      category: 'HDPE Pipelines',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-square'
    },
    {
      num: '03',
      title: 'Mussafah Port Marine Repair',
      category: 'Marine Works',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-square'
    },
    {
      num: '04',
      title: 'Khalifa City Villa Extention',
      category: 'Renovations',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      aspect: 'aspect-[3/4]'
    },
    {
      num: '05',
      title: 'Yas Trunk Water Supply Pipeline',
      category: 'HDPE Pipelines',
      image: '/arrowheadigc-media/123.jpeg',
      aspect: 'aspect-square'
    },
    {
      num: '06',
      title: 'Mussafah Port Marine Repair',
      category: 'Marine Works',
      image: '/arrowheadigc-media/456.jpeg',
      aspect: 'aspect-square'
    },
    {
      num: '07',
      title: 'Khalifa City Villa Extention',
      category: 'Renovations',
      image: '/arrowheadigc-media/789.jpeg',
      aspect: 'aspect-[3/4]'
    }
  ];

  return (
    <div className="w-full bg-app-bg text-app-fg py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Column 1 */}
        <div className="space-y-12">
          {projects.slice(0, 4).map((project, idx) => (
            <div key={idx} className="group relative block overflow-hidden rounded-lg border border-app-border bg-app-card p-4 transition-all duration-300 hover:shadow-xl offset-border-frame">
              <div className={`${project.aspect} w-full overflow-hidden rounded relative bg-app-secondary`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-xs text-brand-teal text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <div className="mt-4 flex items-start gap-4">
                <span className="text-xl font-heading font-light text-brand-gold">{project.num}</span>
                <div className="space-y-1">
                  <h4 className="text-sm font-heading font-extrabold group-hover:text-brand-teal transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  <span className="block text-[8px] text-app-muted font-mono uppercase tracking-widest">
                    Abu Dhabi Municipal Sector
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 - Offset downwards slightly */}
        <div className="space-y-12 md:translate-y-16">
          {projects.slice(4, 7).map((project, idx) => (
            <div key={idx} className="group relative block overflow-hidden rounded-lg border border-app-border bg-app-card p-4 transition-all duration-300 hover:shadow-xl offset-border-frame">
              <div className={`${project.aspect} w-full overflow-hidden rounded relative bg-app-secondary`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-xs text-brand-teal text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <div className="mt-4 flex items-start gap-4">
                <span className="text-xl font-heading font-light text-brand-gold">{project.num}</span>
                <div className="space-y-1">
                  <h4 className="text-sm font-heading font-extrabold group-hover:text-brand-teal transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  <span className="block text-[8px] text-app-muted font-mono uppercase tracking-widest">
                    Abu Dhabi Municipal Sector
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
