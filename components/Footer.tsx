import React, { useState } from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page, sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [endpoint, setEndpoint] = useState(() => localStorage.getItem('formspreeEndpoint') ?? '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem('formspreeEndpoint', endpoint.trim());
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return (
    <footer className="border-t border-slate-200 bg-blue-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-[1.2fr_0.8fr] sm:px-6">
        <div>
          <h2 className="text-2xl font-extrabold">Science tutoring that clicks.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
            Biology, chemistry, and physics support for students who want patient explanations,
            better habits, and stronger test confidence.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <button
            type="button"
            onClick={() => onNavigate(Page.Booking, 'booking-form')}
            className="rounded-full bg-lime-300 px-5 py-3 text-sm font-extrabold text-blue-950 transition hover:bg-lime-200"
          >
            Book a Session
          </button>
          <button
            type="button"
            onClick={() => onNavigate(Page.Home, 'subjects')}
            className="text-sm font-semibold text-blue-100 hover:text-white"
          >
            View subjects
          </button>
        </div>
      </div>

      <div className="border-t border-blue-900 px-4 py-4 text-center text-xs text-blue-200">
        <span>Mr. Montimurro Science Tutoring </span>
        <button
          type="button"
          onClick={() => setShowAdmin(true)}
          className="rounded px-1 font-bold hover:bg-blue-900 hover:text-white"
          aria-label="Open admin setup"
        >
          ©
        </button>
        <span> {new Date().getFullYear()}</span>
      </div>

      {showAdmin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
            <h3 className="text-xl font-extrabold text-blue-950">Admin Setup</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Paste your Formspree endpoint to enable booking alerts from this browser.
            </p>
            <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="formspree-endpoint">
              Formspree URL
            </label>
            <input
              id="formspree-endpoint"
              value={endpoint}
              onChange={(event) => setEndpoint(event.target.value)}
              placeholder="https://formspree.io/f/..."
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            />
            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowAdmin(false)}
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-blue-900 px-5 py-2 text-sm font-extrabold text-white hover:bg-blue-800"
              >
                {saved ? 'Saved' : 'Save & Enable'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
