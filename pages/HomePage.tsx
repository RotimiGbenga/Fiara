
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1600/900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-gold">Elegance Redefined</h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">Discover our exclusive collection of timeless pieces, crafted with passion and precision.</p>
            <button className="mt-8 bg-gold text-brand-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-brand-black">Our Collection</h2>
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
