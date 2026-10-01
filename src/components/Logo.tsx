import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/packages';
import { getOptimizedCloudinaryUrl } from '../utils/cloudinary';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14'
  };

  const pixelDimensions = {
    sm: 32,
    md: 44,
    lg: 56,
  };

  const dimension = pixelDimensions[size];

  return (
    <div
      id="brand-logo-container"
      className={`relative rounded-full overflow-hidden shrink-0 border border-white/40 shadow-sm bg-white flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      {!imageError ? (
        <img
          src={getOptimizedCloudinaryUrl(COMPANY_INFO.logoUrl, { width: dimension * 2 })}
          alt="GedeBaliTrip Logo"
          width={dimension}
          height={dimension}
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain p-0.5"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Fallback authentic tropical logo emblem */
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <circle cx="50" cy="50" r="50" fill="#f59e0b" />
          <circle cx="50" cy="40" r="22" fill="#fef08a" opacity="0.9" />
          {/* Blue ocean waves */}
          <path
            d="M0 65 Q 25 55 50 65 T 100 65 L 100 100 L 0 100 Z"
            fill="#0284c7"
          />
          <path
            d="M0 72 Q 25 64 50 72 T 100 72 L 100 100 L 0 100 Z"
            fill="#0369a1"
          />
          {/* Palm trees */}
          <path
            d="M38 70 Q 42 50 44 38 Q 45 50 48 70"
            stroke="#14532d"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M44 38 Q 30 32 25 40 M44 38 Q 32 24 35 18 M44 38 Q 50 20 60 26 M44 38 Q 56 34 62 44"
            stroke="#15803d"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Subtle text */}
          <text
            x="50"
            y="91"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            GEDE BALI
          </text>
        </svg>
      )}
    </div>
  );
};
