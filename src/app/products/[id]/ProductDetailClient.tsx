'use client';

import { useFavorites } from '@/hooks/useFavorites';
import { Heart } from 'lucide-react';
import { classNames } from '@/lib/utils';

interface ProductDetailClientProps {
  productId: number;
}

export function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const { isFavorite, toggleFavorite, isHydrated } = useFavorites();

  if (!isHydrated) {
    return <div className="text-center text-sm sm:text-base text-slate-500 dark:text-slate-400">Loading...</div>;
  }

  const favorite = isFavorite(productId);

  return (
    <button
      onClick={() => toggleFavorite(productId)}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      className={classNames(
        'flex w-full items-center justify-center gap-2 rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-200 hover:shadow-lg active:scale-95',
        favorite
          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800'
          : 'border-2 border-slate-300 text-slate-900 dark:border-slate-600 dark:text-slate-100 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
      )}
    >
      <Heart size={20} className={favorite ? 'fill-current' : ''} />
      <span>{favorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
    </button>
  );
}
