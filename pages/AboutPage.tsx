
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold text-center mb-12 text-brand-black">Our Story</h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Fiara & Beyond workspace" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2 text-lg text-gray-700 space-y-6">
            <p className="font-serif text-2xl text-gold">
              "Crafting beauty that transcends time."
            </p>
            <p>
              Fiara & Beyond was born from a singular vision: to create exquisite pieces that are not just accessories, but heirlooms. Founded in 2010, our journey began in a small workshop with a passion for detail and a commitment to unparalleled quality. We believe in the power of elegant design to inspire confidence and celebrate individuality.
            </p>
            <p>
              Our artisans blend traditional techniques with modern aesthetics, sourcing only the finest materials from around the globe. Every piece in our collection tells a story of dedication, artistry, and the timeless pursuit of perfection.
            </p>
            <p>
              We are more than a brand; we are a promise of quality, a symbol of elegance, and a celebration of the moments that define us. Welcome to Fiara & Beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
