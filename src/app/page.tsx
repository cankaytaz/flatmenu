export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Welcome to Modern Next.js Application
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A fully responsive website that works seamlessly across all devices
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div 
            key={item}
            className="p-6 rounded-lg border border-gray-200 space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-xl font-semibold">Feature {item}</h2>
            <p className="text-gray-600">
              Responsive design that works across all screen sizes.
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}
