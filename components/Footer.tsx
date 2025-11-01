
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:opacity-80 transition-opacity duration-300"
              aria-label={`Follow us on ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fiara & Beyond. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;