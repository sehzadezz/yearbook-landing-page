'use client'

/**
 * Floating, drifting radial glows that sit behind all content.
 * Monochrome (white-on-black) to respect the 3-5 color palette.
 */
export function BackgroundGradients() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute -left-[10%] top-[-5%] h-[55vw] w-[55vw] rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.9), transparent 65%)',
          animation: 'drift-a 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute right-[-15%] top-[35%] h-[50vw] w-[50vw] rounded-full opacity-[0.08] blur-[130px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.8), transparent 65%)',
          animation: 'drift-b 28s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] h-[45vw] w-[45vw] rounded-full opacity-[0.07] blur-[140px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.7), transparent 65%)',
          animation: 'drift-c 25s ease-in-out infinite',
        }}
      />
    </div>
  )
}
