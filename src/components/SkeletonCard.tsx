'use client';

export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="h-40 sm:h-48 w-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse" />
      <div className="p-4 sm:p-5">
        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
        <div className="mt-3 h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
        <div className="mt-2 h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
        <div className="mt-4 flex items-center justify-between">
          <div className="h-5 w-24 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
