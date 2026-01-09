import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Product Explorer Dashboard',
  description: 'Browse and manage your favorite products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm dark:border-slate-700 dark:bg-slate-900/95">
            <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  📦 <span className="hidden sm:inline">Product Explorer</span>
                </a>
                <div className="flex gap-4">
                  <a
                    href="/products"
                    className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Products
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 md:py-8 lg:px-8">
            {children}
          </main>
          <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/80 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                © 2026 Product Explorer Dashboard. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
