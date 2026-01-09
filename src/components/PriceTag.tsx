'use client';

import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';

interface PriceTagProps {
  price: number;
  rating?: Product['rating'];
}

export function PriceTag({ price, rating }: PriceTagProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
        {formatPrice(price)}
      </span>
      {rating && (
        <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 px-3 sm:px-4 py-1.5 sm:py-2 dark:from-yellow-900/30 dark:to-amber-900/30">
          <span className="text-xs sm:text-sm font-semibold text-yellow-800 dark:text-yellow-200">
            {rating.rate}★
          </span>
          <span className="text-xs text-yellow-700 dark:text-yellow-300">
            ({rating.count})
          </span>
        </div>
      )}
    </div>
  );
}
