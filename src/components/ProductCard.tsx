'use client';

import { Product } from '@/types/product';
import { classNames, formatPrice } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group h-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-600">
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {product.category}
          </p>
          <h3 className="mt-2 line-clamp-2 text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite(product.id);
              }}
              aria-label={
                isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
              className={classNames(
                'inline-flex items-center justify-center rounded-full p-2.5 transition-all duration-200 hover:scale-110',
                isFavorite
                  ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:bg-slate-700 dark:text-slate-500 dark:hover:bg-slate-600'
              )}
            >
              <Heart
                size={18}
                className={isFavorite ? 'fill-current' : ''}
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
