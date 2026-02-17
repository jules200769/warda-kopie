import React, { useState, useEffect, useRef } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;
const SLIDE_MS = 500;
const CENTER_SCALE = 1.12;

// Eigen afbeeldingen: plaats 8 foto’s in de map 'leerlingen' als leerling-1.jpg t/m leerling-8.jpg
// (of pas de paden hieronder aan naar je eigen bestandsnamen)
const students = [
  { img: "./leerlingen/leerling-1.jpg" },
  { img: "./leerlingen/leerling-2.jpg" },
  { img: "./leerlingen/leerling-3.jpg" },
  { img: "./leerlingen/leerling-4.jpg" },
  { img: "./leerlingen/leerling-5.jpg" },
  { img: "./leerlingen/leerling-6.jpg" },
  { img: "./leerlingen/leerling-7.jpg" },
  { img: "./leerlingen/leerling-8.jpg" },
];

const COUNT = students.length;
// Drie kopieën voor naadloze oneindige scroll (midden-set voor weergave)
const INFINITE_STUDENTS = [...students, ...students, ...students];
const TOTAL = INFINITE_STUDENTS.length;
const MIDDLE_START = COUNT; // start in het middenblok

const StudentCard = ({ s, isCenter }: { s: typeof students[0]; isCenter?: boolean }) => (
  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: CARD_WIDTH }}>
    <div
      className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-lg origin-center transition-transform duration-300 ease-out"
      style={{
        width: CARD_WIDTH,
        transform: isCenter ? `scale(${CENTER_SCALE})` : 'scale(1)',
      }}
    >
      <img
        src={s.img}
        alt="Geslaagde leerling"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </div>
);

const SuccessGallery: React.FC = () => {
  const [index, setIndex] = useState(MIDDLE_START);
  const [containerWidth, setContainerWidth] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // Naadloze reset rechts: einde midden-set → terug naar start midden-set
  useEffect(() => {
    if (index !== 2 * COUNT) return;
    setSkipTransition(true);
    setIndex(MIDDLE_START);
  }, [index]);

  // Naadloze reset links: voor start midden-set → spring naar einde midden-set (tegengestelde richting)
  useEffect(() => {
    if (index !== COUNT - 1) return;
    setSkipTransition(true);
    setIndex(2 * COUNT - 1);
  }, [index]);

  useEffect(() => {
    if (!skipTransition) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSkipTransition(false));
    });
    return () => cancelAnimationFrame(id);
  }, [skipTransition]);

  // Auto-play:zelfde tempo maar tegengestelde richting (naar links lopen = strip schuift naar rechts)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i - 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setIndex((i) => i + 1);
  };
  const next = () => {
    if (index <= MIDDLE_START) {
      setSkipTransition(true);
      setIndex(2 * COUNT - 1);
    } else {
      setIndex((i) => i - 1);
    }
  };

  const translateX = containerWidth > 0
    ? containerWidth / 2 - CARD_WIDTH / 2 - index * CARD_TOTAL
    : 0;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Geslaagde Leerlingen</h2>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Trotse gezichten van leerlingen die hun rijbewijs bij Rijschool Warda haalden. Jij bent de volgende!
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
            <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white shrink-0">
              <Award size={24} />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">92%</div>
              <div className="text-sm text-slate-300">Slagingspercentage</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="w-full overflow-hidden py-4 relative">
        <div
          className="flex w-max"
          style={{
            gap: CARD_GAP,
            transform: `translateX(${translateX}px)`,
            transition: skipTransition ? 'none' : `transform ${SLIDE_MS}ms ease-in-out`,
          }}
        >
          {INFINITE_STUDENTS.map((s, i) => (
            <React.Fragment key={i}>
              <StudentCard s={s} isCenter={i === index} />
            </React.Fragment>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white transition-colors"
          aria-label="Vorige"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white transition-colors"
          aria-label="Volgende"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SuccessGallery;
