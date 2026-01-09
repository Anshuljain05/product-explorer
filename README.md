# 📦 Product Explorer Dashboard

A production-style **Next.js (App Router)** frontend application for browsing and managing favorite products from the Fake Store API.

## Features

### Core Features ✅
- **Product Listing**: Browse 20+ products from Fake Store API with responsive grid layout
- **Search**: Real-time client-side search by product title (debounced for smooth UX)
- **Category Filter**: Filter products by category using a dropdown menu
- **Product Details**: Dynamic routing with detailed product information, images, and descriptions
- **Favorites Management**: Mark/unmark products as favorites with persistent localStorage
- **Responsive Design**: Mobile-first design that works seamlessly on mobile, tablet, and desktop
- **Loading States**: Beautiful skeleton UI for loading states
- **Error Handling**: Error boundaries with retry functionality
- **Accessibility**: WCAG-compliant with proper ARIA labels and keyboard navigation

### Technical Highlights ✅
- **TypeScript**: Strict type safety throughout the application
- **Next.js App Router**: Server Components for data fetching, Client Components for interactivity
- **Tailwind CSS**: Utility-first styling with custom responsive classes
- **Reusable Components**: Modular, maintainable component architecture
- **Custom Hooks**: `useFavorites` for localStorage sync and `useDebouncedValue` for optimized search
- **API Layer**: Centralized error handling in `lib/api.ts`

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+
- **Icons**: lucide-react
- **Image Optimization**: Next.js Image component
- **Data Source**: [Fake Store API](https://fakestoreapi.com)

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Home page (redirects to /products)
│   ├── globals.css              # Global Tailwind styles
│   └── products/
│       ├── page.tsx             # Listing page (server component)
│       ├── loading.tsx          # Skeleton UI for listing
│       ├── error.tsx            # Error boundary for listing
│       ├── ProductListing.tsx   # Client component for filtering/search
│       └── [id]/
│           ├── page.tsx         # Product details (server component)
│           ├── loading.tsx      # Skeleton UI for details
│           ├── error.tsx        # Error boundary for details
│           └── ProductDetailClient.tsx  # Favorite button client logic
├── components/
│   ├── ProductCard.tsx          # Individual product card
│   ├── ProductGrid.tsx          # Grid layout with empty states
│   ├── SearchBar.tsx            # Debounced search input
│   ├── CategoryFilter.tsx       # Category dropdown
│   ├── FavoritesToggle.tsx      # Favorites filter button
│   ├── SkeletonCard.tsx         # Loading skeleton
│   └── PriceTag.tsx             # Price with rating display
├── lib/
│   ├── api.ts                   # Fake Store API functions with error handling
│   └── utils.ts                 # Helper functions (classNames, formatPrice, etc.)
├── hooks/
│   ├── useFavorites.ts          # localStorage favorites sync
│   └── useDebouncedValue.ts     # Debounced value hook
└── types/
    └── product.ts               # Product type definition
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn

### Steps
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd product-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## How to Use

### Browse Products
- Visit the Products page to see all available products
- Products load with a beautiful skeleton UI while fetching

### Search Products
- Use the search bar to find products by title
- Search is debounced (300ms) for smooth performance
- Case-insensitive matching

### Filter by Category
- Use the category dropdown to filter products
- Shows all unique categories from the API
- Combine with search for precise results

### Manage Favorites
- Click the heart icon on any product card to add/remove from favorites
- Use the "Favorites" button to show only favorite products
- Favorites are persisted to localStorage and survive page refreshes
- Visit a product detail page and use the "Add to Favorites" button

### View Product Details
- Click on any product card to view full details
- See large product image, description, price, and rating
- Add/remove from favorites on the detail page
- "Back to Products" link to return to listing

## Design Decisions & Trade-offs

### Server vs. Client Components
- **Product Listing Page**: Server component fetches products, passes to client component for interactivity
- **Client Components**: All filtering, searching, and favorites logic runs on client for fast UX
- **Rationale**: Balances SEO (server fetches) with interactivity (client handles state)

### Favorites Persistence
- **Implementation**: localStorage with hydration handling
- **Trade-off**: localStorage limited to ~5MB and client-specific; alternatives like IndexedDB or backend sync could handle larger datasets
- **Hydration**: `useEffect` safely reads localStorage after mount to avoid SSR errors

### Search Debouncing
- **Implementation**: 300ms debounce for search input
- **Benefit**: Reduces re-renders while typing, smoother UX
- **Alternative**: Could implement server-side search with pagination for larger datasets

### No Pagination
- **Current**: All products load at once (20 from API)
- **Rationale**: Fake Store API returns small dataset; infinite scroll or pagination could be added as bonus feature

### Styling Approach
- **Tailwind CSS Only**: No CSS-in-JS or external component libraries
- **Benefit**: Lightweight, fast, easy to customize
- **Trade-off**: More markup, but clear and maintainable

## Accessibility Features

✅ Semantic HTML elements  
✅ ARIA labels on interactive elements (buttons, form inputs)  
✅ Focus states visible on all interactive elements  
✅ Alt text on product images  
✅ Associated labels on form inputs (with sr-only for visual clarity)  
✅ Proper heading hierarchy  
✅ Color contrast ratios meet WCAG AA standards  

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- **Next.js Image Component**: Automatic image optimization, responsive sizes
- **Debounced Search**: Reduces re-renders during typing
- **Skeleton UI**: Perceived performance improvement
- **Server Components**: Reduced JavaScript bundle
- **Code Splitting**: Route-based code splitting via Next.js

## Error Handling

- **API Errors**: Descriptive error messages in UI with retry buttons
- **Network Errors**: Handled in `lib/api.ts` with try-catch
- **Missing Products**: Error boundary on detail page with fallback
- **Hydration Errors**: Safe localStorage access in `useEffect`

## Future Enhancements (Bonus Ideas)

1. **Sorting**: Add sort by price (low→high, high→low)
2. **Dark Mode**: Toggle dark/light theme using Tailwind's `dark:` prefix
3. **Pagination**: Client-side pagination or infinite scroll
4. **Wishlist Export**: Download favorites as JSON
5. **Reviews**: Display and filter by rating ranges
6. **Related Products**: Show similar products on detail page

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Vercel auto-detects Next.js and deploys with zero config.

### Other Platforms
- **Netlify**: Supports Next.js with build config
- **AWS Amplify**: Full-stack deployment option
- **Docker**: Standard Node.js container with `npm start`

## Assumptions

1. **Fake Store API**: Assumed to be reliable and up 24/7
2. **localStorage Support**: Assumed modern browser with localStorage API
3. **CORS**: Fake Store API is public and CORS-enabled
4. **Screen Sizes**: Tailwind breakpoints used (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## Quality Checklist

✅ TypeScript strict mode enabled  
✅ No `any` types (except justified cases)  
✅ Reusable component architecture  
✅ Proper error handling throughout  
✅ Responsive design (mobile-first)  
✅ Accessibility compliance  
✅ Clean code with comments on non-obvious logic  
✅ Build passes without errors  
✅ No unused imports or variables  
✅ Consistent naming conventions  

## License

MIT

---

**Built with ❤️ using Next.js and Tailwind CSS**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
