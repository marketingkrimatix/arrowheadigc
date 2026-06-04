import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | General Contracting & Engineering Abu Dhabi',
  description: 'Read the privacy policy of ArrowHead International General Contracting LLC. Registered in Abu Dhabi (DED License CN-4998977). Compliance with UAE Data Protection Law.',
  keywords: ['ArrowHead Privacy Policy', 'contracting privacy UAE', 'Prestige Towers Abu Dhabi', 'general contracting privacy policy'],
  alternates: {
    canonical: 'https://arrowheadigc.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 3, 2026';

  return (
    <div id="privacy-policy-container" className="bg-app-bg text-app-fg min-h-screen transition-colors duration-200">
      {/* 1. HERO HEADER */}
      <section className="bg-app-secondary py-20 relative overflow-hidden border-b border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Legal &amp; Compliance</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-app-fg mt-4 tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xs font-mono text-brand-gold font-semibold uppercase">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* 2. POLICY CONTENT */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-app-card border border-app-border rounded-2xl p-8 sm:p-12 shadow-sm space-y-10 offset-border-frame">
            
            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-extrabold border-b border-app-border/60 pb-3 text-app-fg">
                1. Introduction
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                ArrowHead International General Contracting LLC (&quot;ArrowHead&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), registered under Abu Dhabi Department of Economic Development DED License <strong className="font-semibold text-app-fg">CN-4998977</strong> with its head office at 5th Floor, Prestige Towers, Mussaffah, Abu Dhabi, United Arab Emirates, is committed to safeguarding the privacy of our clients, partners, website visitors, and service users. 
              </p>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                This Privacy Policy explains how we collect, store, process, share, and protect your personal data when you interact with our website, request tenders/RFQs, utilize our online budget estimation tools, or engage our engineering, construction, pipeline, or facilities management services. We process personal data in compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and local Abu Dhabi municipal data regulations.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-extrabold border-b border-app-border/60 pb-3 text-app-fg">
                2. Information We Collect
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                To execute civil engineering and general contracting scopes, we collect personal and corporate information including:
              </p>
              <ul className="list-disc pl-5 text-app-muted text-xs sm:text-sm space-y-2 font-light">
                <li><strong className="font-semibold text-app-fg">Identity &amp; Contact Details</strong>: Name, email address, telephone numbers, corporate role, company name, and physical office or plot address.</li>
                <li><strong className="font-semibold text-app-fg">Project &amp; Property Specifications</strong>: Site plot numbers, land boundary details, structural layouts, utility specifications, current municipal approvals (TAMM NOCs, ADSSC/ADDC clearances), and architectural preferences.</li>
                <li><strong className="font-semibold text-app-fg">Financial &amp; Estimation Logs</strong>: Estimated project budgets, RFQ calculations, and contract values processed via our online estimators or billing departments.</li>
                <li><strong className="font-semibold text-app-fg">Usage &amp; Technical Data</strong>: IP address, device specifications, operating system, and browsing activity collected through website cookies and analytics frameworks.</li>
              </ul>
            </div>

            {/* How We Use Your Data */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-extrabold border-b border-app-border/60 pb-3 text-app-fg">
                3. How We Use Your Data
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                We process your information to fulfill our contracting obligations, comply with local municipal mandates, and maintain business operations:
              </p>
              <ul className="list-disc pl-5 text-app-muted text-xs sm:text-sm space-y-2 font-light">
                <li>Configuring project budget estimations and drafting official tenders/RFQs.</li>
                <li>Processing permit applications, utility connection requests, and building clearances through Abu Dhabi government portals (TAMM, ADSSC, ADDC, Abu Dhabi Civil Defense).</li>
                <li>Executing turnkey building works, HDPE pipeline installations, MEP engineering, and dispatching preventative maintenance crews under Annual Maintenance Contracts (AMCs).</li>
                <li>Managing corporate contracts, invoices, material procurements, and structural warranties.</li>
                <li>Sending safety notices, technical guide updates, and operational communications regarding your asset management.</li>
              </ul>
            </div>

            {/* Sharing with Authorities */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-extrabold border-b border-app-border/60 pb-3 text-app-fg">
                4. Data Sharing and Third-Party Disclosures
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                We do not sell, lease, or distribute your personal data to commercial third parties. However, due to the regulatory nature of general contracting, we share necessary data with:
              </p>
              <ul className="list-disc pl-5 text-app-muted text-xs sm:text-sm space-y-2 font-light">
                <li><strong className="font-semibold text-app-fg">Government and Utility Authorities</strong>: Including Abu Dhabi Municipality (ADM), TAMM portal agencies, Abu Dhabi Sewerage Services Company (ADSSC), Abu Dhabi Distribution Company (ADDC), and Abu Dhabi Civil Defense (ADCD) for structural NOCs, permits, and connection clearances.</li>
                <li><strong className="font-semibold text-app-fg">Subcontractors and Consultants</strong>: Vetted third-party engineering consultants, laboratory testers, and logistics suppliers operating under strict confidentiality agreements to deliver specific project scopes (e.g. soil testing, concrete checks).</li>
                <li><strong className="font-semibold text-app-fg">Legal &amp; Regulatory Bodies</strong>: Where required to protect corporate rights, resolve contractual disputes, or satisfy audits mandated by UAE Federal Law.</li>
              </ul>
            </div>

            {/* Data Security and Retention */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-extrabold border-b border-app-border/60 pb-3 text-app-fg">
                5. Data Security and Retention
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                We store your physical documents and digital data securely using enterprise-grade access controls and encrypted servers. Since structural work in the UAE carries long-term liability obligations (including decennial liability for building structural integrity under the UAE Civil Code), we retain project records, material log sheets, soil test records, and related client correspondence for a minimum of ten (10) years following construction completion, or as long as required by relevant municipal codes.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-extrabold border-b border-app-border/60 pb-3 text-app-fg">
                6. Your Rights Under UAE Law
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                Pursuant to UAE Federal Decree-Law No. 45 of 2021 (PDPL), you have rights regarding your personal data, subject to local municipal record-keeping laws:
              </p>
              <ul className="list-disc pl-5 text-app-muted text-xs sm:text-sm space-y-2 font-light">
                <li><strong className="font-semibold text-app-fg">Right to Access</strong>: Obtain clarification on what personal data we process and request copies of your project records.</li>
                <li><strong className="font-semibold text-app-fg">Right to Correction</strong>: Request immediate rectification of inaccurate plot details, contact names, or corporate license details.</li>
                <li><strong className="font-semibold text-app-fg">Right to Restriction/Objection</strong>: Restrict processing of marketing emails or analytics. (Note: Restricting data required for active TAMM municipal permits will result in the suspension of civil works).</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4 pt-6 border-t border-app-border/60">
              <h2 className="text-lg font-heading font-extrabold text-brand-teal">
                7. Legal Contact
              </h2>
              <p className="text-app-muted text-xs sm:text-sm leading-relaxed font-light">
                For questions regarding this Privacy Policy, DED license details, or data access requests, contact our compliance officer:
              </p>
              <div className="bg-app-secondary border border-app-border rounded-lg p-5 mt-3 text-xs sm:text-sm space-y-1">
                <p className="font-semibold text-app-fg">ArrowHead International General Contracting LLC</p>
                <p className="text-app-muted">Compliance Department</p>
                <p className="text-app-muted">5th Floor, Prestige Towers, Mussaffah, Abu Dhabi, United Arab Emirates</p>
                <p className="text-brand-teal font-mono">Email: compliance@arrowheadigc.com</p>
                <p className="text-app-muted">Phone: +971 2 554 5230</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
