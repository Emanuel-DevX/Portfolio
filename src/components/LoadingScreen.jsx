const LoadingScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-full  p-4 rounded-xl bg-zinc-800 animate-pulse flex flex-col justify-between"
            style={{
              animationDelay: `${(i % 3) * 0.2 + Math.floor(i / 3) * 0.3}s`,
              animationDuration: '3s',
            }}
          >
            <div className="space-y-2">
                <div className="h-30 bg-zinc-700 rounded-lg"/>
              <div className="h-4 w-2/3 bg-zinc-700 rounded" /> 
              <div className="h-3 w-full bg-zinc-700 rounded" /> 
              <div className="h-3 w-5/6 bg-zinc-700 rounded" /> 
            </div>
            <div className="mt-4 h-8 w-24 bg-zinc-700 rounded" /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingScreen
