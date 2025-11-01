
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3" aria-label="Fiara & Beyond Home">
      {/* Abstract Jewel Icon */}
      <svg className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 8.5L12 22L22 8.5L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8.5L12 15L22 8.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-2xl font-serif font-bold text-gold tracking-wider">
        Fiara & Beyond
      </span>
    </div>
  );

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 bg-brand-black text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href.substring(1);
            return (
              <Link
                key={link.name}
                to={link.href.substring(1)}
                className={`text-lg transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-black">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href.substring(1);
              return (
              <Link
                key={link.name}
                to={link.href.substring(1)}
                onClick={closeMenu}
                className={`text-lg transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
