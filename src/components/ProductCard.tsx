import { Eye, Heart, Plus, Star } from 'lucide-react'
import type { Product } from '../products'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    category,
    image,
    badge,
    badgeClassName,
    rating,
    availability,
    availabilityClassName,
    price,
    originalPrice,
  } = product
  const soldOut = !product.inStock

  return (
    <article className="group rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-all duration-400 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
      <div
        className={`relative overflow-hidden rounded-2xl bg-slate-100 ${soldOut ? 'opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0' : ''}`}
      >
        <img
          src={image}
          alt={name}
          className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 ${soldOut ? 'bg-slate-900/20' : 'bg-blue-600/10'} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <button
            type="button"
            className={`flex h-12 w-12 translate-y-4 items-center justify-center rounded-full shadow-xl transition-transform duration-500 group-hover:translate-y-0 ${soldOut ? 'cursor-not-allowed bg-white/80 text-slate-400' : 'bg-white text-slate-900 hover:bg-blue-600 hover:text-white'}`}
            aria-label="Quick View"
            disabled={soldOut}
          >
            <Eye size={20} />
          </button>
          <button
            type="button"
            className={`flex h-12 w-12 translate-y-4 items-center justify-center rounded-full shadow-xl transition-transform delay-75 duration-500 group-hover:translate-y-0 ${soldOut ? 'cursor-not-allowed bg-white/80 text-slate-400' : 'bg-white text-slate-900 hover:bg-blue-600 hover:text-white'}`}
            aria-label="Add to cart"
            disabled={soldOut}
          >
            <Plus size={20} strokeWidth={2.5} />
          </button>
        </div>

        <span
          className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md ${badgeClassName}`}
        >
          {badge}
        </span>

        <button
          type="button"
          className="group/heart absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg"
          aria-label="Add to favorites"
          title="Favorite"
        >
          <Heart
            size={20}
            className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
          />
        </button>
      </div>

      <div className="mt-4 space-y-1 px-1 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black tracking-[0.15em] text-blue-600/70 uppercase">
            {category}
          </p>
          <div className="flex items-center gap-1">
            <Star size={10} fill="currentColor" className="text-amber-400" />
            <span className="text-[10px] font-bold text-slate-400">{rating}</span>
          </div>
        </div>
        <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
          {name}
        </h3>
        <p className={`text-[11px] font-medium ${availabilityClassName}`}>{availability}</p>

        <div className="flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-[10px] leading-none font-medium text-slate-400 line-through">
                {originalPrice}
              </span>
            )}
            <span className={`text-lg font-black ${soldOut ? 'text-slate-400' : 'text-slate-900'}`}>
              {price}
            </span>
          </div>

          <button
            type="button"
            className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl px-5 text-xs font-bold transition-all duration-300 ${soldOut ? 'cursor-not-allowed bg-slate-100 text-slate-400' : 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95'}`}
            aria-label="Add to cart"
            disabled={soldOut}
          >
            {soldOut ? 'Notify Me' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
