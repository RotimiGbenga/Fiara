
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 bg-brand-black text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-gold tracking-wider">
          Fiara & Beyond
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
          <button onClick={() => setIsOpen(!isOpen)}>
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
