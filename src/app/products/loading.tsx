import { SkeletonCard } from '@/components/SkeletonCard';

export default function ProductsLoading() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-2 sm:space-y-3">
        <div className="h-7 sm:h-8 w-40 sm:w-48 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
        <div className="h-4 sm:h-5 w-80 sm:w-96 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
      </div>

      {/* Filter skeleton */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 h-10 sm:h-11 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
        <div className="h-10 sm:h-11 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
        <div className="h-10 sm:h-11 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
      </div>

      {/* Product grid skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
