import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const ShopPage: React.FC = () => {
  const allCategories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-brand-black py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold text-center mb-4 text-gold">Our Collection</h1>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Browse our curated selection of fine accessories, each with a story to tell.
        </p>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-bold rounded-md transition-colors duration-300 text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-gold text-brand-black border border-gold'
                  : 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gold hover:text-brand-black hover:border-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
