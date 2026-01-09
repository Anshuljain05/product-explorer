# Quick Reference Guide

## 🚀 Getting Started

### Installation (One-time setup)
```bash
# Install dependencies
npm install

# Verify build
npm run build
```

### Development
```bash
# Start dev server
npm run dev

# Open in browser
http://localhost:3000
```

### Production
```bash
# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

## 📁 Project Structure Quick Map

### Pages
- `src/app/page.tsx` → Home (redirects to /products)
- `src/app/products/page.tsx` → Products listing
- `src/app/products/[id]/page.tsx` → Product details

### Components (in `src/components/`)
- `ProductCard.tsx` - Individual product card
- `ProductGrid.tsx` - Grid of products
- `SearchBar.tsx` - Debounced search
- `CategoryFilter.tsx` - Category dropdown
- `FavoritesToggle.tsx` - Favorites filter button
- `SkeletonCard.tsx` - Loading skeleton
- `PriceTag.tsx` - Price display with rating

### Hooks (in `src/hooks/`)
- `useFavorites.ts` - Manage favorites with localStorage
- `useDebouncedValue.ts` - Debounce input values

### API & Utilities (in `src/lib/`)
- `api.ts` - Fetch functions with error handling
- `utils.ts` - Helper functions

### Types (in `src/types/`)
- `product.ts` - Product interface definition

---

## 🔧 Common Tasks

### Add a New Component
```bash
# Create file in src/components/ComponentName.tsx
# Use 'use client' directive if using hooks/state
# Export as named export
```

### Add a New Hook
```bash
# Create file in src/hooks/useHookName.ts
# Use 'use client' directive
# Use useEffect for side effects
```

### Add a New Type
```bash
# Create file in src/types/typename.ts
# Export interface/type
# Import in other files as needed
```

### Add a New Route
```bash
# Create folder in src/app/routename/
# Add page.tsx (server component)
# Add loading.tsx (optional skeleton)
# Add error.tsx (optional error boundary)
```

---

## 🎯 Feature Usage

### Search Products
- Type in search bar
- Waits 300ms before filtering (debounced)
- Case-insensitive matching

### Filter by Category
- Click category dropdown
- Select a category
- Grid updates instantly

### Show Favorites Only
- Click "Favorites" button
- Shows only favorited products
- Click again to show all

### Add to Favorites
- Click heart icon on product card
- Heart fills with red color
- Saves to localStorage automatically

### View Product Details
- Click any product card
- See full image, description, rating
- Add/remove from favorites
- Click "Back to Products" to return

---

## 📊 Data Flow

```
API (FakeStore)
    ↓
Server Component (products/page.tsx)
    ↓
Client Component (ProductListing.tsx)
    ↓
Individual Components (ProductCard, etc.)
    ↓
localStorage (Favorites via useFavorites)
```

---

## ♿ Accessibility Features

- All buttons have ARIA labels
- All images have alt text
- Focus states visible
- Keyboard navigation works
- Semantic HTML used
- Color contrast meets WCAG AA

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Clear cache and rebuild
```bash
rm -rf .next
npm run build
```

### Check for errors
```bash
npx tsc --noEmit  # Check TypeScript
npm run lint      # Check ESLint
```

### Clear favorites in browser
```javascript
// Open DevTools Console and run:
localStorage.removeItem('favorites');
```

---

## 🔗 Useful Links

- **Fake Store API**: https://fakestoreapi.com
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **React**: https://react.dev

---

## 📈 Performance Tips

- Images are auto-optimized by Next.js
- Search is debounced (300ms) to reduce re-renders
- Favorites use Set for O(1) lookups
- Server components reduce JavaScript bundle
- Skeleton UI improves perceived performance

---

## 🚀 Deployment Options

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Build and Deploy Anywhere
```bash
npm run build
# Use .next folder with Node.js
npm start
```

### Docker
```bash
# Build image
docker build -t product-explorer .

# Run container
docker run -p 3000:3000 product-explorer
```

---

## 📝 Environment Variables

None required! This app uses a public API with no authentication needed.

Optional (for future backend):
```
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=xxxxx  # Don't expose!
```

---

## 🧪 Testing the App

### Checklist
- [ ] Load products page
- [ ] Search works (after 300ms)
- [ ] Category filter works
- [ ] Click product card
- [ ] Detail page loads
- [ ] Favorite button works
- [ ] Go back to listing
- [ ] Favorite is still marked
- [ ] Refresh page
- [ ] Favorites persist
- [ ] Click favorites filter
- [ ] Only favorites shown
- [ ] Error handling works (try invalid product ID)

---

## 📚 Documentation Files

- **README.md** - User guide and setup
- **IMPLEMENTATION.md** - Technical deep dive
- **COMPLETION_REPORT.md** - Requirements checklist
- **QUICK_REFERENCE.md** - This file

---

## 💡 Next Steps

1. **Run the dev server**: `npm run dev`
2. **Open browser**: http://localhost:3000
3. **Test all features**: Use the checklist above
4. **Deploy**: Use Vercel for zero-config deployment
5. **Customize**: Modify colors, spacing, fonts in Tailwind config

---

## 📞 Support

For issues or questions:
1. Check the README.md for FAQs
2. Review IMPLEMENTATION.md for technical details
3. Check browser console for errors
4. Verify API is accessible: https://fakestoreapi.com/products

---

**Happy exploring! 🚀📦**
