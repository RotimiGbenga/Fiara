import React from 'react';

const moodBoardImages = [
  { src: 'https://picsum.photos/seed/mood1/800/600', alt: 'Elegant model in a vibrant city', className: 'col-span-2 row-span-2' },
  { src: 'https://picsum.photos/seed/mood2/600/800', alt: 'Close-up of a luxury watch with gold details' },
  { src: 'https://picsum.photos/seed/mood3/800/600', alt: 'Architectural detail with strong shadows' },
  { src: 'https://picsum.photos/seed/mood4/600/800', alt: 'High-fashion accessory against a dark background', className: 'row-span-2' },
  { src: 'https://picsum.photos/seed/mood5/800/600', alt: 'Aspirational lifestyle shot with a sports car' },
  { src: 'https://picsum.photos/seed/mood6/800/600', alt: 'Abstract shimmering gold texture', className: 'col-span-2' },
  { src: 'https://picsum.photos/seed/mood7/800/600', alt: 'Nightlife scene in a global fashion capital' },
];

const InspirationPage: React.FC = () => {
  return (
    <div className="bg-brand-black py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold text-center mb-4 text-gold">Our Inspiration</h1>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          A curated collection of visuals that define the Fiara & Beyond lifestyle. A symphony of global fashion, timeless quality, and aspirational moments, all painted in black and gold.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {moodBoardImages.map((image, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-lg shadow-lg ${image.className || ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationPage;