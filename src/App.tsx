import type { Product } from './components/ProductCard'
import ShopCatalog from './components/ShopCatalog'
import ShopFooter from './components/ShopFooter'
import ShopHeader from './components/ShopHeader'
import ShopSidebar from './components/ShopSidebar'

const products: Product[] = [
  {
    name: 'Technical Shell Jacket',
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800',
    badge: 'Discount',
    badgeClassName: 'border-rose-100/50 bg-rose-500/10 text-rose-600',
    rating: '4.9',
    availability: 'In Stock • Ships in 2 days',
    availabilityClassName: 'text-slate-500',
    price: '890 kr',
    originalPrice: '1,450 kr',
  },
  {
    name: 'Speedster Running Shoes',
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    badge: 'Limited',
    badgeClassName: 'border-amber-100/50 bg-amber-500/10 text-amber-600',
    rating: '4.8',
    availability: 'Only 4 items left',
    availabilityClassName: 'text-amber-600',
    price: '1,200 kr',
  },
  {
    name: 'Minimalist Quartz Watch',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    badge: 'Sold Out',
    badgeClassName: 'border-slate-200/50 bg-slate-900/60 text-white',
    rating: '4.7',
    availability: 'Back in stock next week',
    availabilityClassName: 'text-slate-400 italic',
    price: '1,850 kr',
    soldOut: true,
  },
  {
    name: 'Classic Canvas Sneakers',
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
    badge: 'Popular',
    badgeClassName: 'border-blue-100/50 bg-blue-500/10 text-blue-600',
    rating: '4.5',
    availability: 'In Stock • ships in 1 day',
    availabilityClassName: 'text-slate-500',
    price: '550 kr',
  },
  {
    name: 'Premium Wireless Headphones',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    badge: 'Hot Deal',
    badgeClassName: 'border-rose-100/50 bg-rose-500/10 text-rose-600',
    rating: '4.9',
    availability: 'In Stock • Ships in 2 days',
    availabilityClassName: 'text-slate-500',
    price: '1,690 kr',
    originalPrice: '2,200 kr',
  },
  {
    name: 'Tech Daypack',
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    badge: 'New Arrival',
    badgeClassName: 'border-amber-100/50 bg-amber-500/10 text-amber-600',
    rating: '4.6',
    availability: 'In Stock • Ships in 1 day',
    availabilityClassName: 'text-slate-500',
    price: '1,100 kr',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-100/30 font-sans text-slate-950 antialiased">
      <ShopHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <ShopSidebar />
          <ShopCatalog products={products} />
        </div>
      </main>
      <ShopFooter />
    </div>
  )
}

export default App
