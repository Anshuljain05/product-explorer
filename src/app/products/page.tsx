import { fetchProducts } from '@/lib/api';
import ProductListingClient from '@/components/ProductListingClient';
import { Suspense } from 'react';
import { SkeletonCard } from '@/components/SkeletonCard';

// Mark this route as dynamic since we're fetching from an external API
export const dynamic = 'force-dynamic';

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

    return (
      <Suspense fallback={<SkeletonGrid />}>
        <ProductListingClient initialProducts={products} />
      </Suspense>
    );
  } catch (error) {
    throw error;
  }
}
