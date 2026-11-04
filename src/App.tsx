import { useState } from 'react'
import ShopCatalog from './components/ShopCatalog'
import ShopFooter from './components/ShopFooter'
import ShopHeader from './components/ShopHeader'
import ShopSidebar from './components/ShopSidebar'
import { products, type ProductFilters } from './products'

function App() {
  const [filters, setFilters] = useState<ProductFilters>({
    categories: [],
    maxPrice: 2200,
    inStockOnly: false,
    onSaleOnly: false,
  })

  const filteredProducts = products.filter(
    (product) =>
      (filters.categories.length === 0 || filters.categories.includes(product.category)) &&
      product.priceAmount <= filters.maxPrice &&
      (!filters.inStockOnly || product.inStock) &&
      (!filters.onSaleOnly || product.onSale),
  )

  return (
    <div className="min-h-screen bg-slate-100/30 font-sans text-slate-950 antialiased">
      <ShopHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <ShopSidebar products={products} filters={filters} onFiltersChange={setFilters} />
          <ShopCatalog products={filteredProducts} />
        </div>
      </main>
      <ShopFooter />
    </div>
  )
}

export default App
