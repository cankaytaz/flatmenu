import React from 'react'

const More = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Daha ne olsun? Mesela <span className="inline-block bg-[#E8F3DB] px-4 py-2 rounded-full">masadan sipariş?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Yanlış duymadın. BanabiMenü restoranındaki her bir masa için ayrı bir QR yaratır. Bu yaratılan QR ile kullanıcıların hangi masada olduğu tespit edilir.
          </p>
        </div>

        {/* Illustration Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* QR Scan Illustration */}
            <div className="relative">
              <div className="bg-[#E8F3DB] rounded-full p-8 aspect-square flex items-center justify-center relative">
                <div className="absolute w-8 h-8 bg-red-500 top-4 right-4 transform rotate-12"></div>
                <div className="absolute w-8 h-8 bg-red-500 bottom-4 left-4 transform -rotate-12"></div>
                <div className="absolute w-6 h-6 bg-purple-600 bottom-8 right-8 transform rotate-45"></div>
                <div className="w-full max-w-[200px]">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <div className="text-center mb-2">SCAN</div>
                    <div className="bg-gray-200 w-full aspect-square rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium">
                  Kullanıcı QR'ınızı tanıtır ve <br />
                  <span className="font-bold">restoranınızın menüsüne</span> ulaşır.
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2">
              <svg width="100" height="40" viewBox="0 0 100 40" className="transform -translate-x-1/2">
                <path
                  d="M0,20 Q50,40 80,20 T100,20"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M90,15 L100,20 L90,25"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Waiter Illustration */}
            <div className="relative">
              <div className="bg-[#FFE4C4] rounded-full p-8 aspect-square flex items-center justify-center">
                <div className="w-full max-w-[200px]">
                  <div className="relative w-full aspect-square bg-white rounded-xl shadow-lg p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">👨‍🍳</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium">
                  Müşteri vereceği siparişi belirler,<br />
                  garson çağırır veya <span className="font-bold">uygulama üzerinden sipariş verir</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm">
              *Bu sayede müşteriler garsonlar ile iletişime geçmeden siparişlerini oluşturabilirler.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default More
