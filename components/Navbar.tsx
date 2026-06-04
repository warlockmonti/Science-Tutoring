import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: Array<{ page: Page; label: string }> = [
  { page: Page.Home, label: 'Home' },
  { page: Page.Booking, label: 'Book' },
  { page: Page.Reviews, label: 'Reviews' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate(Page.Home)}
          className="text-left"
          aria-label="Go to home page"
        >
          <span className="block text-lg font-extrabold tracking-tight text-blue-900 sm:text-xl">
            Mr. Montimurro
          </span>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lime-600">
            Science Tutoring
          </span>
        </button>

        <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.page === currentPage;

            return (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate(item.page)}
                className={`rounded-full px-3 py-2 text-sm font-bold transition sm:px-4 ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
