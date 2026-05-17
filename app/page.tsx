'use client';   // ← Baris ini WAJIB ditambahkan di paling atas

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Truck, Star, Cookie } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 md:h-32 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🍪
              </div>
              <div>
                <span className="font-bold text-2xl md:text-3xl tracking-tight text-gray-400">
                  sweettreats
                </span>
                <p className="text-sm -mt-1 text-pink-600">by Cinta</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-400">
              <Link href="#products" className="hover:text-pink-600 transition-colors">Koleksi</Link>
              <Link href="#why" className="hover:text-pink-600 transition-colors">Kenapa Kami</Link>
              <Link href="/order" className="hover:text-pink-600 transition-colors">Pesan</Link>
            </div>

            <Link
              href="/order"
              className="hidden md:flex bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all active:scale-95"
            >
              PESAN SEKARANG
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      {/* Hero - VERSI DIPERBAIKI */}
{/* Hero - Optimized dengan next/image */}
<header className="relative min-h-[85vh] flex items-center overflow-hidden">
  <Image
    src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
    alt="Soft Cookies Background"
    fill
    className="object-cover"
    priority
    quality={75}
    sizes="100vw"
  />
  
  <div className="absolute inset-0 bg-black/50 z-10" />

  <motion.div 
    className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
  >
    <motion.div 
      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 md:mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Cookie className="w-5 h-5" />
      <span className="uppercase tracking-widest text-sm font-medium">SOFT COOKIES PREMIUM</span>
    </motion.div>

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tighter mb-6">
      Soft. Chewy.<br className="hidden sm:block" />
      <span className="text-pink-300">Penuh Cinta.</span>
    </h1>

    <p className="text-lg md:text-xl max-w-lg mx-auto mb-10 text-white/90">
      Kue cookies lembut terbaik dibuat dengan Cinta.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
        <Link
          href="/order"
          className="bg-pink-600 hover:bg-pink-700 w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all shadow-lg"
        >
          Pesan Sekarang
          <ArrowRight className="w-6 h-6" />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
        <Link
          href="#products"
          className="border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto px-10 py-4 rounded-full text-lg font-medium transition-all"
        >
          Lihat Koleksi
        </Link>
      </motion.div>
    </div>
  </motion.div>
</header>

      {/* Trust Bar */}
      <motion.div 
        className="py-8 border-b"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Cookie, text: "Soft Premium" },
            { icon: Truck, text: "Pengiriman Cepat" },
            { icon: Heart, text: "Made with Love" },
            { icon: Star, text: "4.98/5" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center gap-2"
            >
              <item.icon className="w-10 h-10 text-pink-500" />
              <p className="font-semibold text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Products */}
      <section id="products" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-pink-600 font-medium uppercase tracking-widest text-sm">Signature Collection</p>
            <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-gray-800">
              Pilihan Favorit
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { name: "Classic Chocolate Chip", price: "45.000", img: "https://picsum.photos/id/292/600/600" },
              { name: "Red Velvet Dream", price: "48.000", img: "https://picsum.photos/id/431/600/600" },
              { name: "Matcha White Choco", price: "50.000", img: "https://picsum.photos/id/63/600/600" },
            ].map((item) => (
              <motion.div 
                key={item.name}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
              >
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-72 md:h-80 object-cover" 
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-pink-600 font-medium mt-1">Rp {item.price} / 6 pcs</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section 
        id="why" 
        className="py-16 md:py-24 bg-pink-100 relative overflow-hidden rounded-t-[40px] md:rounded-t-[80px]"
      >
        <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1588856062859-561c223f0cdd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Nabila" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-pink-600 font-medium">DIBUAT DENGAN CINTA</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mt-4 text-gray-800">
                Setiap gigitan adalah cerita kebahagiaan
              </h2>
              
              <motion.div 
                className="mt-8 md:mt-10 space-y-8 md:space-y-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  { icon: "🌾", title: "Bahan Premium", desc: "Butter Irlandia, Belgian chocolate, dan tepung terbaik." },
                  { icon: "👩🏻‍🍳", title: "Resep Rahasia Nabila", desc: "Dikembangkan bertahun-tahun untuk tekstur sempurna." },
                  { icon: "📦", title: "Fresh Daily", desc: "Dipanggang setiap pagi." },
                ].map((item) => (
                  <motion.div 
                    key={item.title} 
                    variants={fadeInUp}
                    className="flex gap-5 md:gap-6"
                  >
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-pink-600">{item.title}</h4>
                      <p className="text-gray-600 mt-1 text-[15px] md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <div className="py-16 bg-pink-100">
        <motion.div 
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { title: "Kontak Kami", value: "+62 812-3456-7890" },
            { title: "Instagram", value: "@sweettreats.coo", link: "https://instagram.com/sweettreats.coo" },
            { title: "Lokasi", value: "Jl. Cinta No. 123, Jakarta" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center gap-2">
              <p className="font-semibold text-gray-400">{item.title}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-medium mt-1 hover:underline">
                  {item.value}
                </a>
              ) : (
                <p className="text-pink-600 font-medium mt-1">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-white">
        <div className="bg-gradient-to-b from-pink-100 to-zinc-900 py-16" />
        <div className="bg-zinc-900 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-2xl font-light tracking-wide">sweettreats by Cinta</p>
            <p className="text-zinc-500 text-sm mt-2">© 2026 All Rights Reserved</p>
            
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