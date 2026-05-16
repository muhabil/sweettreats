'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Minus, Send, ShoppingCart, Cookie } from 'lucide-react';
// import Image from 'next/image';

type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  version: 'classic' | 'premium';
  image: string;
};

const menuItems: MenuItem[] = [
  { id: 1, name: "Original", price: 4000, category: "Soft Cookies", version: "classic", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },
  { id: 2, name: "Matcha Almond", price: 4000, category: "Soft Cookies", version: "classic", image: "https://images.unsplash.com/photo-1606313565695-4f8f1f3b5f5e" },
  { id: 3, name: "Darkchoco", price: 5000, category: "Soft Cookies", version: "classic", image: "https://images.unsplash.com/photo-1614707269218-2f9e6e2e0e0f" },
  { id: 4, name: "RedVelvet Cheese", price: 5000, category: "Soft Cookies", version: "classic", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51" },
  { id: 5, name: "Chococheese", price: 5000, category: "Soft Cookies", version: "classic", image: "https://images.unsplash.com/photo-1558961363-fa2f5a5b0b4f" },

  { id: 6, name: "Paket Sweet 10", price: 50000, category: "Hampers", version: "classic", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c" },
  { id: 7, name: "Paket Sweet 20", price: 95000, category: "Hampers", version: "classic", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c" },

  // Premium
  { id: 15, name: "Original Premium", price: 6000, category: "Soft Cookies", version: "premium", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },
  { id: 16, name: "Matcha Premium", price: 7000, category: "Soft Cookies", version: "premium", image: "https://images.unsplash.com/photo-1606313565695-4f8f1f3b5f5e" },
  { id: 18, name: "Redvelvet Premium", price: 9000, category: "Soft Cookies", version: "premium", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51" },
  { id: 21, name: "Box of 6 - Original", price: 35000, category: "Box of 6", version: "premium", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },
  { id: 24, name: "Box of 6 - Redvelvet", price: 52000, category: "Box of 6", version: "premium", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51" },
];

export default function OrderPage() {
  const [version, setVersion] = useState<'classic' | 'premium'>('classic');
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState({ nama: '', alamat: '', notes: '' });

  const filteredItems = menuItems.filter(item => item.version === version);

  // ambil nomor WA dari env variable
  const nomerWA = process.env.NEXT_PUBLIC_KEYWHATSAPP;

  const totalPrice = useMemo(() => {
    return Object.entries(quantities).reduce((sum, [id, qty]) => {
      const item = menuItems.find(i => i.id === parseInt(id));
      return sum + (item ? item.price * qty : 0);
    }, 0);
  }, [quantities]);

  const selectedItems = Object.entries(quantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id]) => menuItems.find(i => i.id === parseInt(id))!);

  const canSubmit = formData.nama && formData.alamat && selectedItems.length > 0;

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const newQty = Math.max(0, current + delta);
      const updated = { ...prev, [id]: newQty };
      if (updated[id] === 0) delete updated[id];
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    let message = `Pre-Order sweettreats - ${version.toUpperCase()}\n\n`;
    message += `Nama: ${formData.nama}\n`;
    message += `Alamat: ${formData.alamat}\n\n`;

    selectedItems.forEach(item => {
      const qty = quantities[item.id];
      message += `- ${item.name} × ${qty} = Rp ${(item.price * qty).toLocaleString('id-ID')}\n`;
    });

    message += `\nTotal: Rp ${totalPrice.toLocaleString('id-ID')}\n`;
    if (formData.notes) message += `\nCatatan: ${formData.notes}`;

    const encoded = encodeURIComponent(message);
    console.log(`https://wa.me/${nomerWA}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav */}
      <nav className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Menggunakan h-32 flex items-center agar tinggi navbar sama persis dengan landing page */}
          <div className="h-32 flex items-center justify-between">
            
            {/* Sisi Kiri: Logo & Nama Brand */}
            <Link href="/" className="flex items-center gap-3">
              {/* Mengubah bungkus emoji 🍪 agar seragam (w-12 h-12 bg-pink-500 rounded-2xl) */}
              <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                🍪
              </div>
              <div>
                {/* Menyelaraskan teks brand (text-3xl tracking-tight text-gray-400) */}
                <span className="font-bold text-3xl tracking-tight text-gray-400">sweettreats</span>
                {/* Menyelaraskan ukuran teks sub-brand (text-sm) tanpa mengubah isinya */}
                <p className="text-sm -mt-1 text-pink-600">by Cinta</p>
              </div>
            </Link>

            {/* Sisi Kanan: Link Kembali (Tetap berupa link text, namun disesuaikan ukuran & font-nya) */}
            <Link href="/" className="text-pink-600 hover:text-pink-700 flex items-center gap-2 text-xl font-medium transition-colors">
              <ArrowLeft className="w-5 h-5" /> Home
            </Link>

          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-10">
        {/* Main Content - Product Grid */}
        <div className="lg:col-span-8">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-pink-600">Pre-Order Cookies</h1>
            <p className="text-gray-600 mt-2">Pilih varian favoritmu • Dibuat fresh setelah pesanan masuk</p>
          </div>

          {/* Version Toggle */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setVersion('classic')}
              className={`text-gray-700 px-8 py-3 rounded-full font-medium transition-all ${version === 'classic' ? 'bg-pink-600 text-white' : 'bg-gray-100'}`}
            >
              Classic Version
            </button>
            <button
              onClick={() => setVersion('premium')}
              className={`text-gray-700 px-8 py-3 rounded-full font-medium transition-all ${version === 'premium' ? 'bg-pink-600 text-white' : 'bg-gray-100'}`}
            >
              Premium Version
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {filteredItems.map((item) => {
              const qty = quantities[item.id] || 0;
              return (
                <div key={item.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <Cookie className="w-full h-full text-pink-300" />
                    {/* <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    /> */}
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-2xl w-8 text-center">{qty}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky Order Summary */}
        <div className="lg:col-span-4 text-gray-700">
          <div className="lg:sticky top-24 bg-pink-100 border border-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="w-6 h-6 text-pink-600" />
              <h2 className="font-semibold text-xl">Ringkasan Pesanan</h2>
            </div>

            {selectedItems.length > 0 ? (
              <div className="space-y-4 max-h-[420px] overflow-auto pr-2">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">× {quantities[item.id]}</p>
                    </div>
                    <p className="font-medium">Rp {(item.price * quantities[item.id]).toLocaleString('id-ID')}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 py-8 text-center">Belum ada produk dipilih</p>
            )}

            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-pink-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Customer Info Form */}
            <div className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Nama Lengkap *"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border focus:border-pink-500 outline-none"
              />
              <textarea
                placeholder="Alamat Lengkap Pengiriman *"
                value={formData.alamat}
                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                rows={3}
                className="w-full px-5 py-4 rounded-3xl border focus:border-pink-500 outline-none resize-y"
              />
              <textarea
                placeholder="Catatan tambahan (opsional)"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                className="w-full px-5 py-4 rounded-3xl border focus:border-pink-500 outline-none resize-y"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`mt-8 w-full py-6 rounded-full text-sm font-semibold flex items-center justify-center gap-3 transition-all
                ${canSubmit 
                  ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              <Send className="w-5 h-5" />
              KIRIM PRE-ORDER VIA WHATSAPP
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              ⚠️ Pre-order • Kue dibuat fresh setelah pesanan dikonfirmasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}