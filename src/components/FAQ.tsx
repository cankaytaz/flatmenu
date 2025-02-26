import React, { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Banabi Menü nedir?",
    answer: "Banabi Menü, restoranınız için dijital menü çözümüdür. QR kod ile müşterilerinizin menünüze kolayca erişmesini sağlar."
  },
  {
    question: "Neden Banabi Menü?",
    answer: "Kolay yönetim, hızlı güncelleme ve profesyonel görünüm sunar. Müşterilerinize modern bir deneyim yaşatırken, menü yönetiminizi basitleştirir."
  },
  {
    question: "Ücretlendirme nasıl çalışıyor?",
    answer: "Farklı ihtiyaçlara uygun aylık, 3 aylık ve 6 aylık paketlerimiz bulunmaktadır. Uzun dönem aboneliklerde indirimler sunuyoruz."
  },
  {
    question: "Bu websitesi güvenli mi?",
    answer: "Evet, websitemiz SSL sertifikası ile korunmaktadır ve tüm ödemeler güvenli bir şekilde işlenmektedir."
  },
  {
    question: "Para iadesi almak istiyorum, nasıl yaparım?",
    answer: "Para iadesi başvurusu, satın alımın gerçekleştiği saatten 24 saat içerisinde yapılmalıdır. Aksi takdirde iade gerçekleşmeyecektir. Olağanüstü durumlarda bu süre uzatılabilir. Bunun için lütfen destek ekibimiz ile iletişime geçin."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FFD699] px-6 py-2 rounded-full text-sm font-medium mb-6">
              SSS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sıkça Sorulan<br />Sorular.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizden sıkça aldığımız soruları derledik ve sizin için cevapladık.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Image */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <img 
                  src="/faq-illustration.svg" 
                  alt="FAQ Illustration"
                  className="w-full max-w-md"
                />
                <div className="absolute -top-8 -left-8 text-[#9DC88D] text-6xl">?</div>
                <div className="absolute top-0 right-0 text-[#9DC88D] text-5xl">!</div>
                <div className="absolute bottom-0 left-4 text-[#9DC88D] text-7xl">?</div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-2xl overflow-hidden transition-all duration-200 ease-in-out"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`px-6 transition-all duration-200 ease-in-out overflow-hidden ${
                      openIndex === index 
                        ? 'max-h-48 py-4' 
                        : 'max-h-0 py-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
