'use client';

import React from 'react';

export default function WhatsAppWidget() {
  return (
    <div
      id="floating-communication-widget"
      className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 pointer-events-none"
    >
      {/* Phone Floating Button */}
      <a
        href="tel:+97125545230"
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-app-card border border-brand-teal/40 text-brand-teal shadow-2xl hover:bg-brand-teal hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Call ArrowHead Office"
        title="Call ArrowHead Office"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11z" />
        </svg>
        <span className="absolute right-14 bg-app-card border border-app-border text-app-fg text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none whitespace-nowrap">
          Call Office: +971 2 554 5230
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/97125545230?text=Hello%20ArrowHead,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-2xl hover:bg-green-500 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.362a9.932 9.932 0 004.81 1.239h.005c5.507 0 9.99-4.478 9.99-9.986 0-2.667-1.039-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm5.792 14.12c-.279.782-1.4 1.435-1.928 1.528-.487.086-1.127.159-3.264-.728-2.733-1.135-4.493-3.906-4.628-4.089-.137-.183-1.109-1.474-1.109-2.812 0-1.338.702-1.996.953-2.259.25-.263.551-.33.736-.33.183 0 .368.002.528.01.168.007.393-.064.614.469.227.549.778 1.896.845 2.033.068.137.114.298.023.482-.092.183-.138.298-.274.457-.137.159-.289.356-.413.477-.138.136-.283.284-.122.56.161.275.717 1.185 1.537 1.916.82 1.01 1.548 1.32 1.764 1.411.215.092.342.069.469-.078.127-.147.551-.641.699-.861.147-.22.295-.183.498-.109.205.073 1.298.614 1.522.724.223.11.371.165.426.257.054.093.054.536-.225 1.318z" />
        </svg>
        <span className="absolute right-14 bg-green-600 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none whitespace-nowrap">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
