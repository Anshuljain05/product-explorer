import { Product } from '@/types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

const fetchOptions = {
  cache: 'no-store' as const,
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Content-Type': 'application/json',
  },
};

export async function fetchProducts(): Promise<Product[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`${API_BASE_URL}/products`, {
      ...fetchOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();
    
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format');
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('API request timeout');
    }
    throw new Error('Failed to fetch products');
  }
}

export async function fetchProduct(id: string | number): Promise<Product> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      ...fetchOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();
    
    if (!data.id) {
      throw new Error('Invalid product data');
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('API request timeout');
    }
    throw new Error('Failed to fetch product');
  }
}

export function getUniqueCategories(products: Product[]): string[] {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return categories.sort();
}
