import { Product } from '@/types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products. Please try again later.');
  }
}

export async function fetchProduct(id: string | number): Promise<Product> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
    throw new Error('Failed to fetch product details. Please try again later.');
  }
}

export function getUniqueCategories(products: Product[]): string[] {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return categories.sort();
}
