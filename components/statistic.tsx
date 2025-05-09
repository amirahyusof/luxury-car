const stats = [
  { value: 'RM 5M', label: 'worth of lots sold' },
  { value: '400+', label: 'listings sold' },
  { value: '100k+', label: 'registered members' },
  { value: '1000+', label: 'daily sellers' },
]


export default function StatisticSection(){
  return (
    <section className="py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Platform Statistics
      </h2>
        
      {/* STATS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-white/10 rounded-2xl overflow-hidden">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-6 border-white/10 border-r last:border-r-0 md:last:border-r md:border-b-0 border-b md:border-none"
          >
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="text-lg text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

