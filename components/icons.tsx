
import React from 'react';

interface SVGProps {
  className?: string;
}

export const OrnamentalStar: React.FC<SVGProps> = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="currentColor"
    >
    <defs>
        <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"></feGaussianBlur>
            <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g style={{ filter: 'url(#glow-effect)' }}>
      <path d="M50 0 L61.2 38.8 L100 50 L61.2 61.2 L50 100 L38.8 61.2 L0 50 L38.8 38.8 Z" />
      <path d="M50 0 L61.2 38.8 L100 50 L61.2 61.2 L50 100 L38.8 61.2 L0 50 L38.8 38.8 Z" transform="rotate(45 50 50)" />
    </g>
  </svg>
);
