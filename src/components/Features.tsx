import React from 'react'

interface Feature {
  icon: string;
  title: string;
  description: string;
  badge?: 'Yeni' | 'Yakında';
}

const features: Feature[] = [
  {
    icon: '👤',
    title: 'Hesap',
    description: 'Birden fazla restoranı olan müşterilerimiz için çoklu hesap imkanı.'
  },
  {
    icon: '👥',
    title: 'Çoklu Oturum',
    description: 'Aynı anda birden fazla cihazda oturum açabilirsiniz.'
  },
  {
    icon: '📊',
    title: 'Geniş Analiz',
    description: 'Aylık, haftalık ve günlük olarak restoranınızın gelir analizini yapabilirsiniz.'
  },
  {
    icon: '🖥️',
    title: 'Masa Takip',
    description: 'En çok tercih edilen masaları keşfedebilir, rezervasyon isteyen müşterilerinize bu masaları sunabilirsiniz.',
    badge: 'Yeni'
  },
  {
    icon: '📋',
    title: 'Müşteri Takip',
    description: 'Kullanıcı bilgileri ile giriş yapan kullanıcılarınızın yeme alışkanlıklarını takip edebilirsiniz.',
    badge: 'Yeni'
  },
  {
    icon: '📝',
    title: 'Notlar',
    description: 'Günlük notlar alarak, bir sonraki iş gününde hiçbir şeyi gözden kaçırmazsınız.'
  },
  {
    icon: '🎯',
    title: 'Masadan Sipariş',
    description: 'Müşterileriniz vakit kaybı yaşamadan masandan sipariş verebilir.',
    badge: 'Yeni'
  },
  {
    icon: '🔲',
    title: 'Masaya Özel QR',
    description: 'Her masaya özel oluşturulan QR\'lar ile masalarınızı analiz edebilirsiniz.',
    badge: 'Yeni'
  },
  {
    icon: '✨',
    title: 'Promosyonlar',
    description: 'Yerel firmalar ile iş ortaklıkları yürütebilir, müşterilerinize özel indirimler sunabilirsiniz.',
    badge: 'Yakında'
  },
  {
    icon: '💳',
    title: 'Kart ile ödeme',
    description: 'Müşterileriniz daha kasaya ulaşmadan uygulama üzerinden ödeme yapabilir.',
    badge: 'Yakında'
  }
]

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E8F3DB] px-6 py-2 rounded-full text-sm font-medium mb-4">
            Genel Özellikler
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BanabiMenü ile sahip olacağınız özellikler.
          </h2>
          <p className="text-gray-600">
            Aşağıdaki özelliklerin bazıları henüz geliştirme aşamasındadır.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              {/* Title with Badge */}
              <div className="relative mb-3">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                {feature.badge && (
                  <div className={`
                    absolute -right-12 -top-1 px-2 py-1 rounded-full text-xs text-white
                    ${feature.badge === 'Yeni' ? 'bg-purple-600' : 'bg-olive-600'}
                  `}>
                    {feature.badge}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
