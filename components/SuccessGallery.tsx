import React, { useState, useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;
const SLIDE_MS = 500;
const CENTER_SCALE = 1.12;

// Eigen afbeeldingen: plaats 8 foto's in de map 'leerlingen' als leerling-1.jpg t/m leerling-8.jpg
// (of pas de paden hieronder aan naar je eigen bestandsnamen)
const students = [
  { img: "/leerlingen/leerling-1.jpg" },
  { img: "/leerlingen/leerling-2.jpg" },
  { img: "/leerlingen/leerling-3.jpg" },
  { img: "/leerlingen/leerling-4.jpg" },
  { img: "/leerlingen/leerling-5.jpg" },
  { img: "/leerlingen/leerling-6.jpg" },
  { img: "/leerlingen/leerling-7.jpg" },
  { img: "/leerlingen/leerling-8.jpg" },
];

const COUNT = students.length;
// Vijf kopieën voor naadloze oneindige scroll (extra buffer voor drag)
const INFINITE_STUDENTS = [...students, ...students, ...students, ...students, ...students];
const TOTAL = INFINITE_STUDENTS.length;
const MIDDLE_START = 2 * COUNT; // start in het middenblok (3e set)

// Normaliseer index naar het bereik [2*COUNT, 3*COUNT - 1] (middelste set)
const normalizeIndex = (i: number): number => {
  const wrapped = ((i - 2 * COUNT) % COUNT + COUNT) % COUNT;
  return 2 * COUNT + wrapped;
};

const StudentCard = ({ isCenter }: { s: typeof students[0]; isCenter?: boolean }) => (
  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: CARD_WIDTH }}>
    <div
      className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-lg origin-center transition-transform duration-300 ease-out flex items-center justify-center"
      style={{
        width: CARD_WIDTH,
        transform: isCenter ? `scale(${CENTER_SCALE})` : 'scale(1)',
      }}
    >
      {isCenter && (
        <p className="text-slate-500 text-center text-sm font-medium px-4">
          Afbeedingen van uw succesvolle studenten
        </p>
      )}
    </div>
  </div>
);

const SuccessGallery: React.FC = () => {
  const [index, setIndex] = useState(MIDDLE_START);
  const [containerWidth, setContainerWidth] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag state (refs om stale closures te voorkomen in event handlers)
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragOffsetRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // Naadloze reset: normaliseer index naar middelste set voor oneindige loop
  useEffect(() => {
    const normalized = normalizeIndex(index);
    if (normalized !== index) {
      setSkipTransition(true);
      setIndex(normalized);
    }
  }, [index]);

  useEffect(() => {
    if (!skipTransition) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSkipTransition(false));
    });
    return () => cancelAnimationFrame(id);
  }, [skipTransition]);

  // Auto-play: pauzeert tijdens drag
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setIndex((i) => i - 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // --- Drag handlers ---
  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = clientX;
    dragOffsetRef.current = 0;
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;

    const offset = clientX - dragStartX.current;
    dragOffsetRef.current = offset;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const offset = dragOffsetRef.current;
    const cardsMoved = Math.round(offset / CARD_TOTAL);

    setIsDragging(false);
    
    // Reset drag offset
    setDragOffset(0);
    dragOffsetRef.current = 0;

    // Update index naar nieuwe positie
    if (cardsMoved !== 0) {
      setIndex((i) => i - cardsMoved);
    }
      };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onMouseLeave = () => {
    handleDragEnd();
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  const translateX = containerWidth > 0
    ? containerWidth / 2 - CARD_WIDTH / 2 - index * CARD_TOTAL + dragOffset
    : 0;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Geslaagde Leerlingen</h2>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Trotse gezichten van leerlingen die hun rijbewijs bij Rijschool Caran haalden. Jij bent de volgende!
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
            <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white shrink-0">
              <Award size={24} />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">83%</div>
              <div className="text-sm text-slate-300">Slagingspercentage</div>
              <div className="text-xs text-slate-200 mt-1">Van leerlingen die in één keer geslaagd zijn</div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full overflow-hidden py-4 relative"
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex w-max"
          style={{
            gap: CARD_GAP,
            transform: `translateX(${translateX}px)`,
            transition: (skipTransition || isDragging) ? 'none' : `transform ${SLIDE_MS}ms ease-in-out`,
          }}
        >
          {INFINITE_STUDENTS.map((s, i) => (
            <React.Fragment key={i}>
              <StudentCard s={s} isCenter={i === index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessGallery;
