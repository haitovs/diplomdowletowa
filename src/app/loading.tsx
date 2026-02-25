export default function Loading() {
  return (
    <div className="min-h-screen bg-desert-sand">
      {/* Hero skeleton */}
      <div className="relative bg-turkmen-green/10 py-32 px-6 animate-pulse">
        <div className="max-w-7xl mx-auto">
          <div className="h-6 bg-turkmen-gold/20 rounded-full w-32 mb-6" />
          <div className="h-14 bg-turkmen-green/10 rounded-lg w-2/3 mb-4" />
          <div className="h-6 bg-gray-200/50 rounded w-1/2 mb-10" />
          <div className="flex gap-4">
            <div className="h-14 bg-turkmen-gold/30 rounded-md w-44" />
            <div className="h-14 bg-white/30 rounded-md w-40" />
          </div>
        </div>
      </div>

      {/* Products skeleton */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4" />
            <div className="h-1 w-24 bg-turkmen-gold/30 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/5] bg-gray-200 rounded-xl mb-6" />
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
