import { Product } from '@/types/product';

const API_BASE = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE}/products`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Unable to load products. Please check your connection and try again.');
  }
}

export async function fetchProduct(id: string | number): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Product not found: ${response.status}`);
    }

    const product: Product = await response.json();
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw new Error('Unable to load product details. Please try again.');
  }
}

export function getUniqueCategories(products: Product[]): string[] {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return categories.sort();
}
