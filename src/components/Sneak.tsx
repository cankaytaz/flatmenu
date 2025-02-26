import React from 'react'

const Sneak = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#E8F3DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Hamburger'in fiyatını değiştirmek mi istiyorsun?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kimseden destek almadan, istediğin zaman istediğin ürünün fiyatını kolaylıkla değiştir.
            </p>
            
            {/* Decorative arrow */}
            <div className="hidden md:block relative left-1/2 transform rotate-45">
              <img 
                src="/arrow.svg" 
                alt="" 
                className="w-24 opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Phone Container */}
            <div className="relative max-w-sm mx-auto lg:mr-0">
              {/* Phone Frame */}
              <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-4 shadow-2xl">
                {/* Phone Screen */}
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Mockup Content */}
                  <img 
                    src="/mockup.jpg" 
                    alt="App interface preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>

              {/* Right Side Text */}
              <div className="absolute -right-4 lg:right-[-200px] top-1/2 transform -translate-y-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Kolayca üye ol,<br />
                  Menünü hazırla.
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Ücretsiz 1 haftalık üyeliğini <span className="font-bold">hemen başlat!</span>
                </p>
                <p className="text-sm text-gray-500">
                  * Kredi kartı gerektirmez
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sneak
