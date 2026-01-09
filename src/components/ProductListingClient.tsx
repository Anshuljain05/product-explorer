'use client';

import { useState, useCallback, useMemo } from 'react';
import { Product } from '@/types/product';
import { ProductGrid } from '@/components/ProductGrid';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { FavoritesToggle } from '@/components/FavoritesToggle';
import { useFavorites } from '@/hooks/useFavorites';

interface ProductListingClientProps {
  initialProducts: Product[];
}

export default function ProductListingClient({ initialProducts }: ProductListingClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const { favorites, isFavorite, toggleFavorite, isHydrated } = useFavorites();

  const categories = useMemo(() => {
    if (!initialProducts || initialProducts.length === 0) return [];
    const cats = new Set(initialProducts.map(p => p.category));
    return Array.from(cats).sort();
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    if (!isHydrated || !initialProducts) return [];

    let filtered = initialProducts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(query));
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by favorites
    if (showFavoritesOnly) {
      filtered = filtered.filter((p) => isFavorite(p.id));
    }

    return filtered;
  }, [initialProducts, searchQuery, selectedCategory, showFavoritesOnly, isFavorite, isHydrated]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  const handleToggleFavoritesOnly = useCallback((show: boolean) => {
    setShowFavoritesOnly(show);
  }, []);

  if (!isHydrated) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-2 sm:space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Browse Products</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Explore our collection of {initialProducts?.length || 0} products
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <SearchBar onSearchChange={handleSearchChange} />
        </div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <FavoritesToggle
          showFavoritesOnly={showFavoritesOnly}
          onToggleShowFavoritesOnly={handleToggleFavoritesOnly}
          favoritesCount={favorites.size}
        />
      </div>

      {/* Empty state for favorites */}
      {showFavoritesOnly && filteredProducts.length === 0 && favorites.size === 0 && (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50/50 dark:border-slate-600 dark:bg-slate-900/30 p-6 sm:p-8">
          <div className="text-center">
            <p className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">No favorites yet</p>
            <p className="mt-1 text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Click the heart icon to add products to your favorites
            </p>
          </div>
        </div>
      )}

      {/* Products grid */}
      {filteredProducts.length > 0 && (
        <ProductGrid
          products={filteredProducts}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
