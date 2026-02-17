
import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

const ScrollCar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 pointer-events-none z-30">
      {/* Progress Line */}
      <div 
        className="h-full bg-sky-500 transition-all duration-100 ease-out" 
        style={{ width: `${scrollPercentage}%` }}
      ></div>
      
      {/* Moving Car Icon */}
      <div 
        className="absolute bottom-1 transition-all duration-100 ease-out flex flex-col items-center"
        style={{ left: `calc(${scrollPercentage}% - 20px)` }}
      >
        <div className="bg-sky-500 text-white p-1.5 rounded-full shadow-md">
          <Car size={16} />
        </div>
      </div>
    </div>
  );
};

export default ScrollCar;
