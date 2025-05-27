import { useEffect, useRef } from 'react';

const logos = [
  '/img/logo.jpg',
  'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png',
  'https://images.pexels.com/photos/5698855/pexels-photo-5698855.jpeg',
  'https://images.pexels.com/photos/5698855/pexels-photo-5698855.jpeg',
  '/img/logo.jpg',
  'https://images.pexels.com/photos/5698855/pexels-photo-5698855.jpeg',
];

const PartnerLogos = () => {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <>
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-gray-800">Our Partners</h2>
    </div>
      <div className="w-full overflow-hidden py-4">
        <div className="flex animate-scroll whitespace-nowrap">
          {repeatedLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`logo-${idx}`}
              className="h-20 w-auto object-contain mx-2"
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default PartnerLogos;
