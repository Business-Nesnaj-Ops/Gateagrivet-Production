import { useEffect, useRef } from 'react';

const logos = [
  '/logos/product ess/1.png',
  '/logos/product ess/2.png',
  '/logos/product ess/3.png',
  '/logos/product ess/4.png',
  '/logos/product ess/5.png',
  '/logos/product ess/6.png',
  '/logos/product ess/7.png',
  '/logos/product ess/8.png',
  '/logos/product ess/9.png',
  '/logos/product ess/10.png',

];

const PartnerLogos = () => {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <>
    <div className="text-center py-8">
        {/*<h2 className="text-2xl font-bold text-gray-800">Our Partners</h2>*/}
        <h2 className="text-2xl font-bold text-gray-800">PRODUCTS ESSENTIAL FOR</h2>
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
