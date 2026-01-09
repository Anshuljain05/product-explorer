'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] sm:min-h-[500px] items-center justify-center px-4 sm:px-0">
      <div className="max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Oops! Something went wrong</h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {error.message || 'Failed to load products. Please try again.'}
        </p>
        <div className="mt-6 sm:mt-8 flex gap-3 justify-center flex-col sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 dark:border-slate-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
