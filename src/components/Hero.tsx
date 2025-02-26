import React from 'react'

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative arrow */}
      <div className="absolute left-8 top-1/2 md:left-24 transform -translate-y-1/2">
        <img 
          src="/arrow.svg" 
          alt="" 
          className="w-24 md:w-32"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with highlight */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            QR Menü arıyorsan ve{' '}
            <span className="inline-block bg-[#FFD88D] px-3 py-1 rounded-lg">
              karmaşık
            </span>
            {' '}sistemlerden sıkıldıysan, banabi Menü tam sana göre.
            <span className="inline-block ml-2">✨</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            BanaBiMenu, siz restoran sahipleri için özel tasarlanmış dijital menüler sunarak, müşteri deneyimini en üst düzeye çıkartıyor.
          </p>

          {/* CTA Button */}
          <button className="bg-black text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors mb-12">
            Hemen Ücretsiz Dene
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Revenue Stat */}
            <div className="bg-[#FF6B6B] text-white rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm mb-1">Kazanç</p>
                  <p className="text-2xl font-bold">25.000TL</p>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-sm">+9.15%</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
                    <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Orders Stat */}
            <div className="bg-[#D5E8B9] text-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-sm mb-1">Siparişler</p>
                  <p className="text-2xl font-bold">250</p>
                </div>
                <div className="flex items-center text-gray-800">
                  <span className="text-sm">+11.01%</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
                    <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative food images */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-64 h-32">
          <img 
            src="/food1.jpg" 
            alt="" 
            className="absolute top-0 right-0 w-24 h-24 rounded-full object-cover"
            aria-hidden="true"
          />
          <img 
            src="/food2.jpg" 
            alt="" 
            className="absolute bottom-0 right-12 w-24 h-24 rounded-full object-cover"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
