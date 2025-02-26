import React, { useState } from 'react'

type PricingPeriod = 'Aylık' | '3 Aylık' | '6 Aylık'

interface PricingPlan {
  title: string;
  description: string;
  monthlyPrice: number;
  features: string[];
}

const PERIOD_MULTIPLIERS = {
  'Aylık': { months: 1, discount: 0 },
  '3 Aylık': { months: 3, discount: 0.1 }, // 10% discount
  '6 Aylık': { months: 6, discount: 0.2 }, // 20% discount
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Başlangıç',
    description: 'İlk adım için mükemmel bir tercih.',
    monthlyPrice: 500,
    features: [
      '1 Restoran',
      'banabimenu.com Alanadi.',
      '200 cms items',
      'Mail Destek'
    ]
  },
  {
    title: 'Profesyonel',
    description: 'Profesyoneller için tasarlandı.',
    monthlyPrice: 1200,
    features: [
      '3 Restoran\'a kadar ek ücret yok',
      'Özel Alanadi / Site adiniz',
      'Masadan Sipariş',
      'Her Masaya Özel QR',
      '7/24 Mesaj ile destek'
    ]
  }
]

const Prices = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PricingPeriod>('Aylık')

  const calculatePrice = (monthlyPrice: number, period: PricingPeriod) => {
    const { months, discount } = PERIOD_MULTIPLIERS[period]
    const totalPrice = monthlyPrice * months
    const discountedPrice = totalPrice * (1 - discount)
    return Math.round(discountedPrice)
  }

  const calculateSavings = (monthlyPrice: number, period: PricingPeriod) => {
    const { months, discount } = PERIOD_MULTIPLIERS[period]
    const totalPrice = monthlyPrice * months
    const savings = totalPrice * discount
    return Math.round(savings)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price)
  }

  return (
    <section className="py-16 md:py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFD699] px-6 py-2 rounded-full text-sm font-medium mb-6">
            Ücretler
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            "Kurulum ücreti veya gizli ücretler yok."
          </h2>

          {/* Period Selector */}
          <div className="inline-flex bg-black/5 rounded-full p-1">
            {['Aylık', '3 Aylık', '6 Aylık'].map((period) => (
              <button
                key={period}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedPeriod === period 
                    ? 'bg-black text-white' 
                    : 'hover:bg-black/5'
                  }`}
                onClick={() => setSelectedPeriod(period as PricingPeriod)}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => {
            const finalPrice = calculatePrice(plan.monthlyPrice, selectedPeriod)
            const savings = calculateSavings(plan.monthlyPrice, selectedPeriod)
            
            return (
              <div 
                key={plan.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2">
                    {formatPrice(finalPrice)}₺
                  </div>
                  {selectedPeriod !== 'Aylık' && (
                    <div className="text-sm text-green-600 font-medium">
                      {formatPrice(savings)}₺ tasarruf edin!
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-1">
                    {selectedPeriod === 'Aylık' 
                      ? 'aylık ödeme'
                      : `${PERIOD_MULTIPLIERS[selectedPeriod].months} aylık ödeme`}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-3 text-green-500"
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#FFD699] hover:bg-[#FFE4B3] text-black font-medium py-3 px-6 rounded-full transition-colors">
                  Satın Al
                </button>
              </div>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <p className="text-xl font-bold mb-2">
            "Aradığın özellik burada yok mu?<br />
            Hemen iletişime geç."
          </p>
          <button className="bg-[#1F1F1F] text-white font-medium py-3 px-8 rounded-full hover:bg-black transition-colors mb-4">
            İletişime geç
          </button>
          <p className="text-sm text-gray-600">
            Yardım'a mı ihtiyacın var? <a href="#" className="font-medium hover:underline">Hemen iletişime geç.</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prices
