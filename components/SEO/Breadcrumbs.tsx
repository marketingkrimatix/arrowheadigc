import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex pb-4 text-xs font-mono font-medium tracking-wide uppercase">
      <ol className="inline-flex items-center space-x-1.5 md:space-x-2 text-app-muted">
        <li className="inline-flex items-center">
          <Link href="/" className="hover:text-brand-teal transition-colors flex items-center">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <span className="text-app-muted/40 mx-1.5 select-none font-bold">/</span>
              {isLast || !item.href ? (
                <span className="text-brand-gold font-bold truncate max-w-[180px] sm:max-w-xs" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand-teal transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
