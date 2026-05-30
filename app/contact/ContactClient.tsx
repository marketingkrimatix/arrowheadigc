'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactClient() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: 'residential',
    service: 'hdpe-pipelines',
    location: 'abu-dhabi',
    budget: '100k-500k',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSectorSelect = (sector: string) => {
    setFormData((prev) => ({ ...prev, sector }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please provide a valid email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[+0-9\s-]{7,15}$/.test(formData.phone)) {
        newErrors.phone = 'Please provide a valid phone number';
      }
    }
    if (step === 3) {
      if (!formData.details.trim()) newErrors.details = 'Project details/scope descriptions are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      sector: 'residential',
      service: 'hdpe-pipelines',
      location: 'abu-dhabi',
      budget: '100k-500k',
      details: '',
    });
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <div id="contact-page-container" className="bg-app-bg text-app-fg min-h-screen transition-colors duration-200">
      
      {/* 1. HERO HEADER */}
      <section className="bg-app-secondary py-16 text-center relative overflow-hidden border-b border-app-border">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-teal text-xs font-bold uppercase tracking-widest font-mono">Connect with Us</span>
          <h1 className="text-4xl font-heading font-extrabold text-app-fg mt-3 tracking-tight">
            Partner with Our Engineering Team
          </h1>
          <p className="mt-4 text-sm text-app-muted max-w-2xl mx-auto font-light leading-relaxed">
            Have an active tender, an upcoming pipeline development, or a luxury custom villa project? Submit your parameters to our estimators.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & RFQ FORM SPLIT */}
      <section className="py-20" id="rfq-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contacts */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-app-card border border-app-border rounded-xl p-6 shadow-sm space-y-6 offset-border-frame">
                <h2 className="text-base font-bold border-b border-app-border pb-4 uppercase tracking-wider font-heading">
                  Direct Inquiries
                </h2>
                
                <div className="space-y-5 text-xs sm:text-sm">
                  {/* Phone */}
                  <div className="flex items-start">
                    <span className="text-brand-teal text-lg mr-3 shrink-0">📞</span>
                    <div>
                      <p className="text-[10px] font-bold text-app-muted uppercase tracking-widest">Office Phone</p>
                      <Link href="tel:+97125545230" className="font-bold hover:text-brand-teal mt-0.5 block">
                        +971 2 554 5230
                      </Link>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <span className="text-brand-teal text-lg mr-3 shrink-0">✉️</span>
                    <div>
                      <p className="text-[10px] font-bold text-app-muted uppercase tracking-widest">Email Address</p>
                      <Link href="mailto:info@arrowheadigc.com" className="font-bold hover:text-brand-teal mt-0.5 block">
                        info@arrowheadigc.com
                      </Link>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <span className="text-brand-teal text-lg mr-3 shrink-0">📍</span>
                    <div>
                      <p className="text-[10px] font-bold text-app-muted uppercase tracking-widest">Mussafah Office</p>
                      <p className="text-app-muted font-light mt-0.5 leading-relaxed">
                        5th Floor, Prestige Towers 17,<br />
                        Capital Mall, Mussaffah,<br />
                        Abu Dhabi, UAE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-app-border pt-6">
                  <a
                    href="https://wa.me/97125545230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* License Panel */}
              <div className="bg-app-card border border-app-border rounded-xl p-6 shadow-sm text-center space-y-4 offset-border-frame">
                <span className="inline-block text-[10px] font-mono font-bold bg-app-secondary border border-brand-teal/20 text-brand-teal px-3 py-1.5 rounded">
                  Trade License: CN-4998977
                </span>
                <p className="text-xs text-app-muted font-light leading-relaxed pt-2">
                  ArrowHead International General Contracting LLC is licensed by the Abu Dhabi Department of Economic Development.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive RFP wizard */}
            <div className="lg:col-span-8 bg-app-card border border-app-border rounded-xl p-8 shadow-sm offset-border-frame">
              
              {/* Wizard Steps indicator */}
              <div className="flex items-center justify-between pb-8 border-b border-app-border mb-8 text-xs font-bold uppercase tracking-wider text-app-muted">
                <span className={step === 1 ? 'text-brand-teal' : ''}>01. Sector</span>
                <span>→</span>
                <span className={step === 2 ? 'text-brand-teal' : ''}>02. Contact</span>
                <span>→</span>
                <span className={step === 3 ? 'text-brand-teal' : ''}>03. Scope</span>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-6" id="success-notification">
                  <span className="text-5xl block text-brand-teal">✓</span>
                  <h3 className="text-xl font-heading font-extrabold">RFQ Request Received!</h3>
                  <p className="text-app-muted text-sm font-light max-w-md mx-auto leading-relaxed">
                    Thank you. Your request is registered. Our estimation division at Prestige Towers, Abu Dhabi will analyze your details and respond within 24 business hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider rounded hover:bg-brand-teal-hover transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* STEP 1: SECTOR SELECT */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold">Choose Your Operational Sector</h3>
                      <p className="text-app-muted text-xs font-light">Select the industry group matching your construction or FM project.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { key: 'residential', title: 'Residential & Villas', desc: 'Luxury villa builds, extensions, renovations' },
                          { key: 'industrial', title: 'Industrial & Manufacturing', desc: 'Mussafah workshops, warehouses, piping' },
                          { key: 'marine', title: 'Marine & Ports', desc: 'Waterfront civils, slipways, seawalls' },
                          { key: 'commercial', title: 'Commercial & Retail', desc: 'Tenant fit-out MEP, chiller maintenance' },
                        ].map((sec) => (
                          <div
                            key={sec.key}
                            onClick={() => handleSectorSelect(sec.key)}
                            className={`p-5 rounded-lg border cursor-pointer transition-all ${
                              formData.sector === sec.key
                                ? 'bg-brand-teal/5 border-brand-teal shadow-md'
                                : 'bg-app-secondary border-app-border hover:border-brand-teal/30'
                            }`}
                          >
                            <h4 className={`text-sm font-bold ${formData.sector === sec.key ? 'text-brand-teal' : ''}`}>{sec.title}</h4>
                            <p className="text-[11px] text-app-muted font-light mt-1.5 leading-relaxed">{sec.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-app-border flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-6 py-3 bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider rounded hover:bg-brand-teal-hover transition-all cursor-pointer"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: CONTACT DETAILS */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold">Provide Contact Information</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                            Contact Person Name <span className="text-brand-teal">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={`w-full px-4 py-3 rounded bg-app-secondary border text-xs focus:outline-none focus:border-brand-teal transition-colors ${
                              errors.name ? 'border-red-500' : 'border-app-border'
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company (optional)"
                            className="w-full px-4 py-3 rounded bg-app-secondary border border-app-border text-xs focus:outline-none focus:border-brand-teal transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                            Email Address <span className="text-brand-teal">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="yourname@domain.com"
                            className={`w-full px-4 py-3 rounded bg-app-secondary border text-xs focus:outline-none focus:border-brand-teal transition-colors ${
                              errors.email ? 'border-red-500' : 'border-app-border'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                            Phone Number <span className="text-brand-teal">*</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 50 XXX XXXX"
                            className={`w-full px-4 py-3 rounded bg-app-secondary border text-xs focus:outline-none focus:border-brand-teal transition-colors ${
                              errors.phone ? 'border-red-500' : 'border-app-border'
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-app-border flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-5 py-3 border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider rounded hover:bg-app-secondary transition-all cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-6 py-3 bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider rounded hover:bg-brand-teal-hover transition-all cursor-pointer"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: PROJECT PARAMETERS */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold">Project Scope &amp; Budget</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Location */}
                        <div>
                          <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                            Project Location
                          </label>
                          <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded bg-app-secondary border border-app-border text-xs focus:outline-none focus:border-brand-teal transition-colors"
                          >
                            <option value="abu-dhabi">Abu Dhabi (City)</option>
                            <option value="mussafah">Mussafah Industrial / ICAD</option>
                            <option value="yas-island">Yas Island / Al Raha</option>
                            <option value="dubai">Dubai</option>
                            <option value="other">Other UAE Locations</option>
                          </select>
                        </div>

                        {/* Budget */}
                        <div>
                          <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                            Budget Range (AED)
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded bg-app-secondary border border-app-border text-xs focus:outline-none focus:border-brand-teal transition-colors"
                          >
                            <option value="under-100k">Under 100K AED</option>
                            <option value="100k-500k">100K - 500K AED</option>
                            <option value="500k-2m">500K - 2M AED</option>
                            <option value="over-2m">Over 2M AED</option>
                          </select>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                          Project Details &amp; Specifications <span className="text-brand-teal">*</span>
                        </label>
                        <textarea
                          name="details"
                          rows={4}
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="Describe the scope: pipeline diameters, welding standards, villa room configurations, Estidama plans, or building FM dimensions."
                          className={`w-full px-4 py-3 rounded bg-app-secondary border text-xs focus:outline-none focus:border-brand-teal transition-colors resize-none ${
                            errors.details ? 'border-red-500' : 'border-app-border'
                          }`}
                        ></textarea>
                        {errors.details && <p className="text-red-500 text-[10px] mt-1">{errors.details}</p>}
                      </div>

                      {/* Upload */}
                      <div>
                        <label className="block text-[10px] font-bold text-app-muted uppercase tracking-widest mb-2">
                          Project drawings / CAD layouts
                        </label>
                        <div className="border border-dashed border-app-border rounded-lg p-5 text-center bg-app-secondary hover:border-brand-teal transition-colors cursor-pointer">
                          <span className="text-xl block">📁</span>
                          <span className="text-[10px] text-app-muted mt-2 block font-semibold">
                            Drag and drop CAD/PDF files up to 10MB
                          </span>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-app-border flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-5 py-3 border border-app-border text-app-fg font-bold text-xs uppercase tracking-wider rounded hover:bg-app-secondary transition-all cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3 bg-brand-teal text-primary-dark font-bold text-xs uppercase tracking-wider rounded hover:bg-brand-teal-hover shadow-lg shadow-brand-teal/20 transition-all cursor-pointer"
                        >
                          Submit RFQ Request
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP PLACEHOLDER */}
      <section className="py-16 bg-app-secondary border-t border-app-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-app-card border border-app-border rounded-xl p-5 shadow-sm offset-border-frame">
            <h3 className="text-xs font-bold text-app-muted uppercase tracking-widest mb-4">Location Map: Prestige Towers, Mussafah</h3>
            <div className="h-96 w-full rounded-lg bg-app-secondary border border-app-border flex flex-col items-center justify-center relative overflow-hidden">
              <div className="z-10 text-center space-y-4">
                <span className="text-4xl block animate-bounce">📍</span>
                <div className="space-y-1">
                  <h4 className="font-heading font-extrabold text-sm uppercase">Prestige Towers</h4>
                  <p className="text-[11px] text-app-muted">Mussafah, Abu Dhabi, United Arab Emirates</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-app-card border border-brand-teal/30 hover:border-brand-teal hover:text-white text-[10px] font-bold uppercase tracking-wider text-brand-teal rounded transition-all shadow-md"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
