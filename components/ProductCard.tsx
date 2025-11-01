import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const TwitterIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.523 3.379 4.748 3.419a9.875 9.875 0 01-6.117 2.107c-.397 0-.79-.023-1.175-.068a13.963 13.963 0 007.548 2.212c9.058 0 14.01-7.502 14.01-14.013 0-.213-.005-.426-.015-.637a9.935 9.935 0 002.409-2.5z"></path></svg>
);
const FacebookIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
);
const PinterestIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 3.153 1.85 5.88 4.512 7.243-.105-.722.01-1.575.29-2.252.24-.582 1.5-6.345 1.5-6.345s-.375-.75-.375-1.853c0-1.74.99-3.045 2.22-3.045 1.05 0 1.56.788 1.56 1.74 0 1.05-.675 2.618-1.02 4.08-.285 1.2.6 2.175 1.785 2.175 2.145 0 3.795-2.265 3.795-5.55 0-2.91-2.07-4.995-5.1-4.995-3.48 0-5.52 2.595-5.52 5.235 0 .99.375 2.055.84 2.64.09.12.105.195.075.315-.09.375-.285 1.125-.345 1.35-.06.225-.21.285-.45.165-1.395-.69-2.265-2.775-2.265-4.59 0-3.69 2.67-6.795 7.755-6.795 4.08 0 7.215 2.91 7.215 6.48 0 4.095-2.565 7.305-6.12 7.305-1.2 0-2.34-.615-2.73-1.335l-.81 3.09c-.24.93-.93 2.115-1.395 2.805.51.15.93.225 1.5.225 6.645 0 12.015-5.37 12.015-12C24.015 6.47 18.66 2 12 2z"></path></svg>
);

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleShare = (platform: 'twitter' | 'facebook' | 'pinterest') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this amazing product: ${product.name} from Fiara & Beyond!`);
    const imageUrl = encodeURIComponent(product.imageUrl);
    
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${text}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900 transform transition-transform duration-500">
      <img src={product.imageUrl} alt={product.name} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
        <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-serif text-gold font-bold">{product.name}</h3>
          <p className="text-lg text-gold">{product.price}</p>
          <button className="mt-4 w-full bg-transparent border border-gold text-gold font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-brand-black">
            Add to Cart
          </button>

          <div className="mt-3 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <button onClick={() => handleShare('twitter')} aria-label="Share on Twitter" className="text-gold hover:opacity-80 transition-opacity">
              <TwitterIcon className="w-5 h-5" />
            </button>
            <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook" className="text-gold hover:opacity-80 transition-opacity">
              <FacebookIcon className="w-5 h-5" />
            </button>
            <button onClick={() => handleShare('pinterest')} aria-label="Share on Pinterest" className="text-gold hover:opacity-80 transition-opacity">
              <PinterestIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;