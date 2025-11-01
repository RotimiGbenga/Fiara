
import React from 'react';
import type { Product } from './types';

// Using a placeholder icon component for lucide-react icons
const IconPlaceholder: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    { name === 'twitter' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> }
    { name === 'facebook' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> }
    { name === 'instagram' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /> }
    { name === 'linkedin' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx={4} cy={4} r={2} /> }
  </svg>
);


export const NAV_LINKS = [
  { name: 'Shop', href: '#/' },
  { name: 'About Us', href: '#/about' },
  { name: 'Contact', href: '#/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: 'https://twitter.com', icon: <IconPlaceholder name="twitter" className="h-6 w-6" /> },
  { name: 'Facebook', href: 'https://facebook.com', icon: <IconPlaceholder name="facebook" className="h-6 w-6" /> },
  { name: 'Instagram', href: 'https://instagram.com', icon: <IconPlaceholder name="instagram" className="h-6 w-6" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: <IconPlaceholder name="linkedin" className="h-6 w-6" /> },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Aura Gold Necklace', price: '$250.00', imageUrl: 'https://picsum.photos/seed/p1/400/500', category: 'Jewelry' },
  { id: 2, name: 'Midnight Velvet Clutch', price: '$180.00', imageUrl: 'https://picsum.photos/seed/p2/400/500', category: 'Accessories' },
  { id: 3, name: 'Gilded Age Earrings', price: '$120.00', imageUrl: 'https://picsum.photos/seed/p3/400/500', category: 'Jewelry' },
  { id: 4, name: 'Noir Silk Scarf', price: '$95.00', imageUrl: 'https://picsum.photos/seed/p4/400/500', category: 'Accessories' },
  { id: 5, name: 'Celestial Timepiece', price: '$450.00', imageUrl: 'https://picsum.photos/seed/p5/400/500', category: 'Watches' },
  { id: 6, name: 'Opulent Leather Wallet', price: '$150.00', imageUrl: 'https://picsum.photos/seed/p6/400/500', category: 'Accessories' },
  { id: 7, name: 'Ember Cufflinks', price: '$85.00', imageUrl: 'https://picsum.photos/seed/p7/400/500', category: 'Jewelry' },
  { id: 8, name: 'Solar Flare Sunglasses', price: '$220.00', imageUrl: 'https://picsum.photos/seed/p8/400/500', category: 'Accessories' },
];
