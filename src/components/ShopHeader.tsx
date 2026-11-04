import { Box, Menu, Search, ShoppingBag, UserRound } from 'lucide-react'

const navigationLinks = ['New Arrival', 'Men', 'Women', 'Sale']

type ShopHeaderProps = {
  searchQuery: string
  onSearchChange: (query: string) => void
}

function ShopHeader({ searchQuery, onSearchChange }: ShopHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <Box size={20} strokeWidth={2.5} />
            </span>
            <span className="text-xl font-black uppercase">LITE.SHOP</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-blue-100 md:flex">
            {navigationLinks.map((label) => (
              <a
                key={label}
                className="relative transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100"
                href="#"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="mr-4 hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/30 px-3 py-1 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100" />
              </span>
              <span className="text-[10px] font-black tracking-widest text-blue-50 uppercase">
                Live
              </span>
            </div>

            <div className="relative hidden sm:block">
              <input
                id="search-input"
                type="text"
                placeholder="Search products..."
                aria-label="Search products by name"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                className="h-10 w-48 rounded-xl border border-blue-400/20 bg-blue-500/30 pr-4 pl-10 text-xs font-medium text-blue-50 transition-all duration-300 outline-none placeholder:text-blue-200/50 focus:w-64 focus:bg-blue-500/50"
              />
              <Search
                size={16}
                strokeWidth={2.5}
                className="absolute top-3 left-3.5 text-blue-200"
              />
            </div>

            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
              aria-label="Cart"
              title="Cart"
            >
              <ShoppingBag size={20} />
              <span
                id="cart-count"
                className="absolute -top-1.5 -right-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm"
              >
                0
              </span>
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white"
              aria-label="Account"
              title="Account"
            >
              <UserRound size={20} />
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/30 text-blue-50 transition-all duration-200 hover:bg-blue-500/50 hover:text-white md:hidden"
              aria-label="Menu"
              title="Menu"
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ShopHeader
