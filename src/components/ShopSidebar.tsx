import { ChevronDown } from 'lucide-react'
import type { Product, ProductFilters } from '../products'

type ShopSidebarProps = {
  products: Product[]
  filters: ProductFilters
  onFiltersChange: (filters: ProductFilters) => void
}

function ShopSidebar({ products, filters, onFiltersChange }: ShopSidebarProps) {
  const categoryOptions = [...new Set(products.map((product) => product.category))]
  const allCategoriesSelected = filters.categories.length === 0

  return (
    <aside className="self-start lg:sticky lg:top-20 lg:col-span-3">
      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
        <section aria-labelledby="filters-categories" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="filters-categories" className="text-sm font-bold text-slate-900">
              Categories
            </h2>
            <button
              type="button"
              className="text-slate-400 transition-colors hover:text-blue-600 lg:hidden"
              aria-label="Toggle categories"
            >
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {[
              { name: 'All Products', value: 'all', count: products.length },
              ...categoryOptions.map((value) => ({
                name: value,
                value,
                count: products.filter((product) => product.category === value).length,
              })),
            ].map((category) => (
              <label
                key={category.value}
                className="flex cursor-pointer items-center gap-3 select-none"
              >
                <input
                  type="checkbox"
                  value={category.value}
                  className="category-filter h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
                  checked={
                    category.value === 'all'
                      ? allCategoriesSelected
                      : filters.categories.includes(category.value)
                  }
                  onChange={(event) => {
                    if (category.value === 'all') {
                      onFiltersChange({ ...filters, categories: [] })
                      return
                    }

                    const selectedCategories = event.target.checked
                      ? [...filters.categories, category.value]
                      : filters.categories.filter((value) => value !== category.value)
                    onFiltersChange({ ...filters, categories: selectedCategories })
                  }}
                />
                <span className="flex-1 text-sm text-slate-700">
                  {category.name}{' '}
                  <span className="font-normal text-slate-400">({category.count})</span>
                </span>
              </label>
            ))}
          </div>
        </section>

        <div className="my-5 h-px bg-slate-100" />

        <section aria-labelledby="filters-price" className="space-y-3">
          <h2 id="filters-price" className="text-sm font-bold text-slate-900">
            Price Range
          </h2>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>0 kr</span>
            <span>{filters.maxPrice} kr</span>
          </div>
          <input
            type="range"
            min="0"
            max="2200"
            value={filters.maxPrice}
            onChange={(event) =>
              onFiltersChange({ ...filters, maxPrice: Number(event.target.value) })
            }
            className="w-full accent-blue-500"
            aria-label="Price range"
          />
        </section>

        <div className="my-5 h-px bg-slate-100" />

        <section aria-labelledby="filters-availability" className="space-y-4">
          <h2 id="filters-availability" className="text-sm font-bold text-slate-900">
            Availability
          </h2>
          <div className="space-y-3">
            {[
              { label: 'In Stock', key: 'inStockOnly' as const },
              { label: 'On Sale', key: 'onSaleOnly' as const },
            ].map(({ label, key }) => (
              <label key={label} className="flex cursor-pointer items-center gap-3 select-none">
                <input
                  type="checkbox"
                  className="h-4.5 w-4.5 cursor-pointer rounded-md border border-slate-200 accent-blue-600"
                  checked={filters[key]}
                  onChange={(event) =>
                    onFiltersChange({ ...filters, [key]: event.target.checked })
                  }
                />
                <span className="flex-1 text-sm text-slate-700">{label}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-linear-to-br from-blue-600 to-amber-500 p-6 text-white before:absolute before:top-[-20%] before:right-[-10%] before:h-50 before:w-50 before:rounded-full before:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] before:content-['']">
            <h3 className="text-lg font-bold text-white">Summer Sale</h3>
            <p className="mt-2 text-sm leading-relaxed text-white opacity-90">
              Get up to 50% off on all summer collections. Limited time offer!
            </p>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border-none bg-white px-5 py-2.5 font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:-translate-y-px hover:bg-slate-50 hover:shadow-lg"
            >
              Shop Now
            </button>
          </div>
        </section>
      </div>
    </aside>
  )
}

export default ShopSidebar
