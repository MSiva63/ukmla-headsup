import HeadsUpGame from '@/components/HeadsUpGame'

export default function Home() {
  return (
    <>
      {/* Portrait Warning - Only shows in portrait mode */}
      <div className="portrait-warning fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex-col items-center justify-center gap-8 p-8 text-center">
        <div className="text-8xl animate-bounce">
          📱
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Please Rotate Your Phone
          </h1>
          <p className="text-2xl text-white/90 max-w-md">
            This game requires landscape orientation for the best experience
          </p>
        </div>
      </div>

      {/* Main Game - Only shows in landscape */}
      <div className="landscape-only">
        <HeadsUpGame />
      </div>
    </>
  )
}
