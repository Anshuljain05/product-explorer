import { fetchProducts } from '@/lib/api';
import ProductListingClient from '@/components/ProductListingClient';
import { SkeletonCard } from '@/components/SkeletonCard';

// Mark this route as dynamic since we're fetching from an external API
export const dynamic = 'force-dynamic';
export const revalidate = 0;

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default async function ProductsPage() {
  try {
    const products = await fetchProducts();

    if (!products || products.length === 0) {
      return (
        <div className="min-h-screen bg-slate-950 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">No Products Available</h1>
            <p className="text-slate-400">Unable to load products at this time. Please refresh the page.</p>
          </div>
        </div>
      );
    }

    return <ProductListingClient initialProducts={products} />;
  } catch (error) {
    console.error('ProductsPage error:', error);
    throw error;
  }
}
