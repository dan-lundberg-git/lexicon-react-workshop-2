import { Box } from 'lucide-react'

type FooterLinkGroup = {
  title: string
  links: string[]
}

const footerGroups: FooterLinkGroup[] = [
  { title: 'Shop', links: ['New Arrival', 'Best Sellers', 'Men Collection', 'Women Collection'] },
  { title: 'Support', links: ['Order Status', 'Shipping Policy', 'Returns & Exchanges', 'FAQs'] },
  { title: 'Company', links: ['About Us', 'Sustainability', 'Careers', 'Contact'] },
]

function Newsletter() {
  return (
    <section className="relative mt-12 overflow-hidden bg-slate-900 py-16 text-white">
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-black uppercase italic sm:text-4xl">Join the LITE.CLUB</h2>
            <p className="leading-relaxed font-medium text-slate-400">
              Subscribe to our newsletter and get{' '}
              <span className="font-bold text-white underline decoration-blue-500 decoration-2 underline-offset-4">
                15% off
              </span>{' '}
              your first order. Be the first to know about new arrivals and exclusive sales.
            </p>
          </div>
          <form className="w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white transition-all outline-none placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50"
                required
              />
              <button
                type="submit"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-[10px] text-slate-500 italic">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2 font-bold tracking-tight ${inverse ? 'text-white' : 'text-slate-900'}`}
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg shadow-lg ${inverse ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}
      >
        <Box size={20} strokeWidth={2.5} />
      </span>
      <span className="text-xl font-black uppercase">LITE.SHOP</span>
    </a>
  )
}

function ShopFooter() {
  return (
    <>
      <Newsletter />
      <footer className="border-t border-slate-200 bg-white pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 space-y-6 lg:col-span-2">
              <BrandMark />
              <p className="max-w-xs text-sm leading-relaxed font-medium text-slate-500">
                Modern e-commerce experience built for speed and elegance. Discover the latest
                trends in outerwear, footwear and accessories.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-6">
                <h4 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase">
                  {group.title}
                </h4>
                <ul className="space-y-4 text-sm font-bold text-slate-500">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-blue-600">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              &copy; 2026 LITE.SHOP. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors hover:text-slate-900"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ShopFooter
