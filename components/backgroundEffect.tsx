export default function BackgroundEffect() {
  return (
    // We add a true deep slate/black backdrop container here to ground the light
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#030705]">
      
      {/* 
        1. The Stellar Starfield Overlay 
        Instead of canvas, we use a lightweight SVG background pattern to give it a space texture
      */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 0), radial-gradient(white 1px, transparent 0)`,
          backgroundSize: '40px 40px, 80px 80px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* 
        2. The Primary Teal Nebula Beam 
        Notice the huge blur-[160px] to prevent that "solid paint wall" look
      */}
      <div 
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[100%] opacity-40 mix-blend-screen filter blur-[160px]"
        style={{
          background: `radial-gradient(
            ellipse at bottom center, 
            #A1FFCE 0%,     /* White-hot mint core */
            #059669 35%,    /* Deep emerald nebula */
            #022c22 65%,    /* Dark space teal perimeter */
            transparent 90% /* Melts seamlessly into space */
          )`
        }}
      />

      {/* 
        3. The Celestial Core Glow (The bright white-indigo center point)
      */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[35%] opacity-30 mix-blend-overlay filter blur-[80px]"
        style={{
          background: 'radial-gradient(ellipse at bottom center, #FAFFD1 0%, transparent 80%)'
        }}
      />
    </div>
  );
}