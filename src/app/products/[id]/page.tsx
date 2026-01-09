import { fetchProduct } from '@/lib/api';
import { Product } from '@/types/product';
import { PriceTag } from '@/components/PriceTag';
import { ProductDetailClient } from './ProductDetailClient';
import Link from 'next/link';
import Image from 'next/image';

// Mark this route as dynamic since we're fetching from an external API
export const dynamic = 'force-dynamic';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  try {
    const product = await fetchProduct(params.id);
    return {
      title: `${product.title} - Product Explorer`,
      description: product.description,
    };
  } catch {
    return {
      title: 'Product Not Found - Product Explorer',
    };
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await fetchProduct(params.id);

  return (
    <div className="space-y-6 sm:space-y-8">
      <Link
        href="/products"
        className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
          <div className="relative h-80 sm:h-96 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {product.category}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">{product.title}</h1>
          </div>

          <PriceTag price={product.price} rating={product.rating} />

          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">Description</h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>
          </div>

          <ProductDetailClient productId={product.id} />
        </div>
      </div>
    </div>
  );
}
