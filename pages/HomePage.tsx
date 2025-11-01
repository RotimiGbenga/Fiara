import React from 'react';
import { PRODUCTS, SOCIAL_LINKS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const newArrivals = PRODUCTS.slice(0, 4);
  const socialImages = [
    'https://picsum.photos/seed/social1/500/500',
    'https://picsum.photos/seed/social2/500/500',
    'https://picsum.photos/seed/social3/500/500',
    'https://picsum.photos/seed/social4/500/500',
  ];

  return (
    <div className="bg-brand-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/fiara-hero-collage/1600/900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-gold">Elegance Redefined</h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">Discover our exclusive collection of timeless pieces, crafted with passion and precision.</p>
            <a href="#new-arrivals" className="mt-8 inline-block bg-gold text-brand-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-colors duration-300">
              Explore New Arrivals
            </a>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gold">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-gold mb-4">Follow Our Journey</h2>
          <p className="text-lg text-gray-300 mb-12">@fiaraandbeyond on Instagram</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-12 max-w-4xl mx-auto">
            {socialImages.map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img src={src} alt={`Social media post ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6">
             {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={`Follow us on ${link.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:opacity-80 transition-opacity duration-300"
                >
                  {React.cloneElement(link.icon, { className: 'h-8 w-8' })}
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Full Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gold">Explore The Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;