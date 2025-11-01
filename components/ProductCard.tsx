
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-50 transform transition-transform duration-500 hover:scale-105">
      <img src={product.imageUrl} alt={product.name} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-serif text-white font-bold">{product.name}</h3>
          <p className="text-lg text-gold">{product.price}</p>
          <button className="mt-4 w-full bg-gold text-brand-black font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-yellow-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
