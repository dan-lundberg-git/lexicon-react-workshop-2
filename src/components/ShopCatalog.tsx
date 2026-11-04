import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

import type { Product } from '../products'
import ProductCard from './ProductCard'

type ShopCatalogProps = {
  products: Product[]
}

function Pagination() {
  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
        aria-label="Previous page"
        title="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          type="button"
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border font-medium transition-all duration-200 ${page === 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 bg-white text-slate-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600'}`}
          aria-current={page === 1 ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <span className="px-2 text-sm text-slate-400">…</span>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
      >
        12
      </button>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-500 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
        aria-label="Next page"
        title="Next"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  )
}

function ShopCatalog({ products }: ShopCatalogProps) {
  return (
    <section className="lg:col-span-9">
      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Recommended for you
            </h1>
            <span aria-live="polite" className="text-sm text-slate-500">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </span>
          </div>
          <label className="inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="hidden sm:inline">Sort by:</span>
            <div className="relative">
              <select
                className="cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-9 pl-3 text-sm text-slate-950 transition-all duration-200 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10"
                defaultValue="Newest"
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Selling</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute inset-y-0 right-3 my-auto text-slate-400"
              />
            </div>
          </label>
        </div>

        <div className="mt-5 h-px bg-slate-100" />
        <div
          id="product-grid"
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.name} product={product} />)
          ) : (
            <p className="col-span-full py-12 text-center text-sm text-slate-500">
              No products match your filters.
            </p>
          )}
        </div>
        {products.length > 0 && <Pagination />}
      </div>
    </section>
  )
}

export default ShopCatalog
