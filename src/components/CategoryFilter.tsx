'use client';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <label htmlFor="category-select" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
        Category
      </label>
      <select
        id="category-select"
        value={selectedCategory || ''}
        onChange={(e) => onCategoryChange(e.target.value || null)}
        className="rounded-lg border-2 border-blue-500 bg-white px-3 sm:px-4 py-2.5 text-sm sm:text-base font-medium text-slate-900 transition-all duration-200 hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-blue-400 dark:bg-slate-700 dark:text-white dark:hover:border-blue-300 dark:focus:ring-blue-900"
      >
        <option value="" className="py-2">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category} className="py-2">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
