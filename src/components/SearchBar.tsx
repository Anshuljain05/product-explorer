'use client';

import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export function SearchBar({ onSearchChange }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState('');
  const debouncedValue = useDebouncedValue(searchInput, 300);

  useEffect(() => {
    onSearchChange(debouncedValue);
  }, [debouncedValue, onSearchChange]);

  return (
    <div className="relative w-full">
      <label htmlFor="search" className="sr-only">
        Search products by title
      </label>
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-500 dark:text-slate-400 pointer-events-none" />
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full rounded-lg border-2 border-blue-500 bg-white pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-all duration-200 hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-blue-400 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:hover:border-blue-300 dark:focus:ring-blue-900"
        />
      </div>
    </div>
  );
}
