export default function ProductDetailLoading() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="h-4 sm:h-5 w-28 sm:w-32 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* Image skeleton */}
        <div className="h-80 sm:h-96 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-xl animate-pulse" />

        {/* Details skeleton */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
            <div className="h-7 sm:h-8 w-full bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
            <div className="h-7 sm:h-8 w-4/5 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="h-5 sm:h-6 w-40 sm:w-48 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="h-4 sm:h-5 w-24 sm:w-28 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
            <div className="h-4 sm:h-5 w-full bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
            <div className="h-4 sm:h-5 w-full bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
            <div className="h-4 sm:h-5 w-2/3 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
          </div>

          <div className="h-10 sm:h-12 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
