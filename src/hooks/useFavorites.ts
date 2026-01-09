'use client';

import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isHydrated, setIsHydrated] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      const favoriteIds = stored ? JSON.parse(stored) : [];
      setFavorites(new Set(favoriteIds));
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    setIsHydrated(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites, isHydrated]);

  const isFavorite = (id: number): boolean => {
    return favorites.has(id);
  };

  const toggleFavorite = (id: number): void => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const clearFavorites = (): void => {
    setFavorites(new Set());
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    isHydrated,
  };
}
