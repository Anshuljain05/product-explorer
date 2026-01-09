'use client';

import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  favorites: Set<number>;
  onToggleFavorite: (id: number) => void;
}

export function ProductGrid({
  products,
  favorites,
  onToggleFavorite,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[300px] sm:min-h-[400px] items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 dark:border-slate-600 dark:from-slate-900/30 dark:to-slate-800/30">
        <div className="text-center">
          <p className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
            No products found
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Try adjusting your filters or search query
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.has(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
