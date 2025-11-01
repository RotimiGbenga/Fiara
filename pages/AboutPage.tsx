
import React from 'react';

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-black text-gray-300 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold text-center mb-12 text-gold">Our Story</h1>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Fiara & Beyond artisan workspace" 
              className="rounded-lg shadow-2xl w-full shadow-gold/10"
            />
          </div>
          <div className="lg:w-1/2 text-lg space-y-6">
            <p className="font-serif text-2xl text-gold italic">
              "Where every piece tells a story of elegance and audacity."
            </p>
            <p>
              Fiara & Beyond was born from a singular vision: to create exquisite pieces that are not just accessories, but heirlooms. Our journey began with a deep-seated passion for fashion and a desire to blend timeless Nigerian craftsmanship with contemporary design. We believe that the right accessory doesn't just complete an outfit—it empowers the wearer.
            </p>
            <p>
              Our artisans blend traditional techniques with modern aesthetics, sourcing only the finest materials. Every piece in our collection tells a story of dedication, artistry, and the timeless pursuit of perfection, designed for the modern individual who values both heritage and style.
            </p>
          </div>
        </div>
        
        <div className="text-center border-t border-gold/20 pt-12">
            <h2 className="text-4xl font-serif font-bold text-gold mb-8">Visit Our Boutiques</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-lg">
                <div className="flex items-center gap-4">
                    <MapPinIcon className="h-8 w-8 text-gold" />
                    <p>Dutse, Abuja</p>
                </div>
                <div className="flex items-center gap-4">
                    <MapPinIcon className="h-8 w-8 text-gold" />
                    <p>Iyana-Ipaja, Lagos</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
