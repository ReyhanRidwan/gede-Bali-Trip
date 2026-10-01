import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Language, TourPackage } from '../types';
import { getOptimizedCloudinaryUrl, getCloudinarySrcSet } from '../utils/cloudinary';

const DEFAULT_PAGE_HEADER_BG = 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png';

interface PageHeaderBannerProps {
  currentLanguage: Language;
  title: string;
  titleEn: string;
  breadcrumb: string;
  breadcrumbEn: string;
  backgroundImage?: string;
  packages?: TourPackage[];
  onSelectPackage?: (pkg: TourPackage) => void;
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  currentLanguage,
  title,
  titleEn,
  breadcrumb,
  breadcrumbEn,
  backgroundImage = DEFAULT_PAGE_HEADER_BG,
  packages = [],
  onSelectPackage = () => {},
}) => {
  const [imgSrc, setImgSrc] = useState(backgroundImage);
  const isId = currentLanguage === 'id';

  // Fallback high-res Bali Ulun Danu Beratan temple lake photo
  const fallbackUrl = 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2400&q=85';

  return (
    <section className="w-full px-2.5 sm:px-4 md:px-6 lg:px-8 pt-2.5 sm:pt-4">
      {/* Short rounded banner container matching the screenshot */}
      <div
        id="page-header-rounded-banner"
        className="w-full max-w-[1560px] mx-auto min-h-[260px] sm:min-h-[300px] md:min-h-[340px] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden relative shadow-xl flex flex-col justify-between border border-black/5"
      >
        {/* Scenic Bali Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src={getOptimizedCloudinaryUrl(imgSrc, { width: 1080 })}
            srcSet={getCloudinarySrcSet(imgSrc, [480, 768, 1080, 1560])}
            sizes="(max-width: 768px) 100vw, 1560px"
            alt="Bali Scenic Landscape"
            width="1560"
            height="340"
            loading="eager"
            decoding="async"
            onError={() => setImgSrc(fallbackUrl)}
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
          {/* Subtle gradient overlays for contrast */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
        </div>

        {/* Top Navbar Area inside the banner */}
        <div className="relative z-20 px-6 sm:px-10 lg:px-12 pt-6 sm:pt-7">
          <Navbar
            currentLanguage={currentLanguage}
            packages={packages}
            onSelectPackage={onSelectPackage}
            isInnerPage={false}
          />
        </div>

        {/* Center Breadcrumb & Page Title matching screenshot */}
        <div className="relative z-10 py-8 sm:py-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center my-auto">
          {/* Breadcrumb: Home >> Page Name */}
          <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium tracking-wide mb-2 drop-shadow-sm select-none">
            <Link
              to="/"
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <span className="text-white/60">≫</span>
            <span className="text-white font-semibold">
              {isId ? breadcrumb : breadcrumbEn}
            </span>
          </div>

          {/* Large Bold Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight drop-shadow-md select-none">
            {isId ? title : titleEn}
          </h1>
        </div>
      </div>
    </section>
  );
};
