// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Truck, Star, Cookie } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Promo Banner */}
      {/* <div className="bg-pink-950 text-white py-3 text-center text-sm font-medium flex items-center justify-center gap-2">
        <span>🎉 Promo Spesial: Beli 12 gratis 3 cookies!</span>
        <Link href="/order" className="underline hover:no-underline font-semibold">
          Pesan Sekarang →
        </Link>
      </div> */}

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-32 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🍪
              </div>
              <div>
                {/* perbesar text sedikit */}
                <span className="font-bold text-3xl tracking-tight text-gray-400">sweettreats</span>
                <p className="text-sm -mt-1 text-pink-600">by Cinta</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-xl font-medium text-gray-400">
              <Link href="#products" className="hover:text-pink-600 transition-colors">Koleksi</Link>
              <Link href="#why" className="hover:text-pink-600 transition-colors">Kenapa Kami</Link>
              <Link href="/order" className="hover:text-pink-600 transition-colors">Pesan</Link>
            </div>

            <Link
              href="/order"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all active:scale-95"
            >
              PESAN SEKARANG
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[85vh] flex items-center bg-[url('https://images.unsplash.com/photo-1499636136210-6f4ee915583e')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <Cookie className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Soft Cookies Premium</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold leading-none mb-6">
            Soft. Chewy.<br />
            <span className="text-pink-300">Penuh Cinta.</span>
          </h1>

          <p className="text-xl max-w-md mx-auto mb-10">
            Kue cookies lembut terbaik dibuat dengan Cinta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              Pesan Sekarang
              <ArrowRight className="w-6 h-6" />
            </Link>

            <Link
              href="#products"
              className="border-2 border-white text-white px-8 py-5 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
            >
              Lihat Koleksi
            </Link>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="py-8 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <Cookie className="w-10 h-10 text-pink-500" />
            <p className="font-semibold text-gray-400">Soft Premium</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Truck className="w-10 h-10 text-pink-500" />
            <p className="font-semibold text-gray-400">Pengiriman Cepat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Heart className="w-10 h-10 text-pink-500" />
            <p className="font-semibold text-gray-400">Made with Love</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="w-10 h-10 text-pink-500" />
            <p className="font-semibold text-gray-400">4.98/5</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-pink-600 font-medium uppercase tracking-widest">Signature Collection</p>
            <h2 className="text-5xl font-semibold mt-3 text-gray-800">Pilihan Favorit</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Classic Chocolate Chip", price: "45.000", img: "https://picsum.photos/id/292/600/600" },
              { name: "Red Velvet Dream", price: "48.000", img: "https://picsum.photos/id/431/600/600" },
              { name: "Matcha White Choco", price: "50.000", img: "https://picsum.photos/id/63/600/600" },
            ].map((item) => (
              <div key={item.name} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <img src={item.img} alt={item.name} className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-pink-600 font-medium mt-1">Rp {item.price} / 6 pcs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us buat lebih tinggi*/}
      <section id="why" className="py-24 bg-pink-100 relative overflow-hidden absolute top-0 h-[1000px] w-full rounded-t-[35%]">
        <div className="max-w-7xl mx-auto px-6 mt-48">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img 
              src="https://images.unsplash.com/photo-1588856062859-561c223f0cdd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nabila" 
              className="rounded-3xl shadow-2xl"
            />
            <div>
              <p className="text-pink-600 font-medium">DIBUAT DENGAN CINTA</p>
              <h2 className="text-5xl font-semibold leading-tight mt-4 text-gray-800">
                Setiap gigitan adalah cerita kebahagiaan
              </h2>
              <div className="mt-10 space-y-10">
                {[
                  { icon: "🌾", title: "Bahan Premium", desc: "Butter Irlandia, Belgian chocolate, dan tepung terbaik." },
                  { icon: "👩🏻‍🍳", title: "Resep Rahasia Nabila", desc: "Dikembangkan bertahun-tahun untuk tekstur sempurna." },
                  { icon: "📦", title: "Fresh Daily", desc: "Dipanggang setiap pagi." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-xl text-pink-600">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact dengan grid box, kontak, whatsapp, instagram, dan lokasi */}
        <div className="py-16 bg-pink-100 pt-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-gray-400">Kontak Kami</p>
              <p className="text-pink-600 font-medium mt-1">+62 812-3456-7890</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-gray-400">Instagram</p>
              <a href="https://instagram.com/sweettreats.coo" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-medium mt-1 hover:underline">
                @sweettreats.coo
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-gray-400">Lokasi</p>
              <p className="text-pink-600 font-medium mt-1">Jl. Cinta No. 123, Jakarta</p>
            </div>
          </div>
        </div>

      {/* footernya GRADIEN */}
      <footer className="text-white">
        <div className="bg-gradient-to-b from-pink-100 to-zinc-900 text-white py-16" />
        <div className="bg-zinc-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-6 text-center mt-8">
            <p className="text-2xl font-light tracking-wide">sweettreats by Cinta</p>
            <p className="text-zinc-500 text-sm mt-2">© 2026 All Rights Reserved</p>
            
            {/* Credit Developer Minimalis */}
            <p className="text-zinc-600 text-xs mt-6 font-light">
              Crafted with code by{" "}
              <a 
                href="https://github.com/muhabil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors underline decoration-zinc-700"
              >
                Nabil
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}