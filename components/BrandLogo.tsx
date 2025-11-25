import React from 'react';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 130 110" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RyanrealAF Logo"
    >
      <g transform="skewX(-5)">
        <text 
          x="65" 
          y="35" 
          textAnchor="middle" 
          fontFamily="'Oswald', sans-serif" 
          fontWeight="700" 
          fontSize="36" 
          letterSpacing="-0.02em"
        >
          RYAN
        </text>
        <text 
          x="65" 
          y="68" 
          textAnchor="middle" 
          fontFamily="'Oswald', sans-serif" 
          fontWeight="700" 
          fontSize="36" 
          letterSpacing="-0.02em"
        >
          REAL
        </text>
        <text 
          x="65" 
          y="105" 
          textAnchor="middle" 
          fontFamily="'Oswald', sans-serif" 
          fontWeight="700" 
          fontSize="42" 
          letterSpacing="0.05em"
        >
          AF
        </text>
        
        {/* Tactical Cuts/Accents */}
        <path d="M15 42 H115" stroke="currentColor" strokeWidth="2" opacity="0.8" />
        <path d="M15 75 H115" stroke="currentColor" strokeWidth="2" opacity="0.8" />
      </g>
    </svg>
  );
};

export default BrandLogo;