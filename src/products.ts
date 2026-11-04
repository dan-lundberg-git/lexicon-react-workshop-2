export type Product = {
  name: string
  category: string
  image: string
  badge: string
  badgeClassName: string
  rating: string
  availability: string
  availabilityClassName: string
  price: string
  priceAmount: number
  originalPrice?: string
  inStock: boolean
  onSale: boolean
}

export type ProductFilters = {
  categories: string[]
  maxPrice: number
  inStockOnly: boolean
  onSaleOnly: boolean
}

export const products: Product[] = [
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
    priceAmount: 890,
    originalPrice: '1,450 kr',
    inStock: true,
    onSale: true,
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
    priceAmount: 1200,
    inStock: true,
    onSale: false,
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
    priceAmount: 1850,
    inStock: false,
    onSale: false,
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
    priceAmount: 550,
    inStock: true,
    onSale: false,
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
    priceAmount: 1690,
    originalPrice: '2,200 kr',
    inStock: true,
    onSale: true,
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
    priceAmount: 1100,
    inStock: true,
    onSale: false,
  },
]