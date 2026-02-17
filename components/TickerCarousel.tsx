import React from 'react';

const PHRASES = [
  'De middag, avond of weekend',
  'Vriendelijke & geduldige instructeur',
  'CBR erkende rijschool',
  'Eerlijk advies',
  'Niet gereden rijlessen retour',
  'Ervaren en betrouwbare instructeur',
  'Hoog slagingspercentage',
  'Moderne lesauto',
  'Persoonlijke aanpak',
];

const Separator = () => (
  <span className="text-white/70 mx-6 select-none" aria-hidden>
    ||
  </span>
);

const TickerCarousel: React.FC = () => {
  const content = (
    <>
      {PHRASES.map((phrase, i) => (
        <React.Fragment key={i}>
          <span className="whitespace-nowrap">{phrase}</span>
          {i < PHRASES.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div
      className="bg-[#1e3a5f] py-3 overflow-hidden border-y border-sky-900/50"
      role="region"
      aria-label="Voordelen Rijschool Warda"
    >
      <div className="ticker-track flex w-max">
        <div className="flex items-center text-white text-sm md:text-base font-medium px-4">
          {content}
        </div>
        <Separator />
        <div className="flex items-center text-white text-sm md:text-base font-medium px-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TickerCarousel;
