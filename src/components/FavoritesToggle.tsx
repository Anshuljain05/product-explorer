'use client';

import { Heart } from 'lucide-react';
import { classNames } from '@/lib/utils';

interface FavoritesToggleProps {
  showFavoritesOnly: boolean;
  onToggleShowFavoritesOnly: (show: boolean) => void;
  favoritesCount: number;
}

export function FavoritesToggle({
  showFavoritesOnly,
  onToggleShowFavoritesOnly,
  favoritesCount,
}: FavoritesToggleProps) {
  return (
    <button
      onClick={() => onToggleShowFavoritesOnly(!showFavoritesOnly)}
      aria-label={
        showFavoritesOnly
          ? 'Show all products'
          : 'Show only favorite products'
      }
      className={classNames(
        'flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:shadow-md active:scale-95',
        showFavoritesOnly
          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800'
          : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-slate-200 hover:to-slate-300 dark:from-slate-700 dark:to-slate-800 dark:text-slate-100 dark:hover:from-slate-600 dark:hover:to-slate-700'
      )}
    >
      <Heart
        size={16}
        className={showFavoritesOnly ? 'fill-current' : ''}
      />
      <span>Favorites {favoritesCount > 0 && `(${favoritesCount})`}</span>
    </button>
  );
}
