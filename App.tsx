
import React from 'react';
import { OrnamentalStar } from './components/icons';

// FIX: Explicitly type Star as a React.FC to allow the 'key' prop required for list rendering, resolving a TypeScript error.
const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute bg-white rounded-full animate-pulse"
    style={style}
  ></div>
);

const App: React.FC = () => {
  const stars = React.useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const animationDuration = Math.random() * 2 + 1;
      const animationDelay = Math.random() * 2;
      return (
        <Star
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      );
    });
  }, []);

  const phrases = React.useMemo(() => [
    "أنتِ قصة الجمال التي ترويها النجوم",
    "يا بدرًا أنار ليالي العمر",
    "يا نجمةً تلمع في سماء قلبي",
    "وجودكِ يضفي على الحياة لحنًا من نور",
    "أنتِ قصيدةٌ منقوشةٌ على صفحات القمر"
  ], []);

  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5000); // Change phrase every 5 seconds
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <main className="relative w-screen h-screen bg-gray-900 overflow-hidden text-white flex items-center justify-center p-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-70 animate-slow-rotate"></div>
      
      {/* Starry Sky */}
      <div className="absolute inset-0">{stars}</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
        <style>
          {`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 2s ease-out forwards;
            }
            @keyframes phrase-cycle {
              0%, 100% { opacity: 0; transform: translateY(10px); }
              10%, 90% { opacity: 1; transform: translateY(0); }
            }
            .animate-phrase {
              animation: phrase-cycle 5s ease-in-out forwards;
            }
          `}
        </style>
        
        <div className="absolute -top-20 -left-20 opacity-30 animate-pulse">
            <OrnamentalStar className="w-40 h-40 text-pink-400" />
        </div>
        <div className="absolute -bottom-24 -right-24 opacity-30 animate-pulse animation-delay-500">
            <OrnamentalStar className="w-48 h-48 text-indigo-400" />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-bold glow" style={{ fontFamily: "'Amiri', serif" }}>
          فاطمة
        </h1>
        
        <div className="h-24 flex items-center justify-center">
          <p 
            key={currentPhraseIndex}
            className="text-2xl md:text-3xl text-gray-200 tracking-wider max-w-2xl leading-relaxed animate-phrase"
          >
            {phrases[currentPhraseIndex]}
          </p>
        </div>

        <div className="absolute -bottom-16 -left-16 opacity-20 animate-pulse animation-delay-1000">
            <OrnamentalStar className="w-32 h-32 text-purple-400 transform rotate-45" />
        </div>
        <div className="absolute -top-24 -right-20 opacity-20 animate-pulse animation-delay-1500">
            <OrnamentalStar className="w-36 h-36 text-yellow-200 transform -rotate-12" />
        </div>

      </div>
    </main>
  );
};

export default App;
