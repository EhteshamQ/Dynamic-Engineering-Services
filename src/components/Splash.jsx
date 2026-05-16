import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo shortly after start
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 400);

    // Hide entire splash screen exactly after 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  // Extremely Sleek & Futuristic Architectural Blueprint (No messy cranes)
  const centralTower = [
    "M 225 400 L 225 30", // Central energy spine
    "M 190 400 L 200 130 L 225 70 L 250 130 L 260 400", // Aerodynamic outer hull
    "M 205 400 L 210 150 L 225 100 L 240 150 L 245 400", // Secondary inner hull
    // Geometric floor sections
    "M 193 330 L 257 330", "M 195 260 L 255 260", "M 197 190 L 253 190",
    // Parametric X-bracing for high-tech look
    "M 192 365 L 256 295", "M 258 365 L 194 295",
    "M 196 295 L 254 225", "M 256 295 L 194 225",
    "M 198 225 L 252 155", "M 254 225 L 196 155",
  ];

  const leftTower = [
    "M 130 400 L 130 200 L 165 150 L 165 400", // Asymmetric sleek profile
    "M 148 400 L 148 175", // Internal spine
    "M 130 320 L 165 320", "M 130 240 L 165 240", // Floors
    "M 130 400 L 165 320", "M 130 320 L 165 240", "M 130 240 L 165 150" // Angular accents
  ];

  const rightTower = [
    "M 320 400 L 320 200 L 285 150 L 285 400", // Asymmetric sleek profile
    "M 302 400 L 302 175", // Internal spine
    "M 320 320 L 285 320", "M 320 240 L 285 240", // Floors
    "M 320 400 L 285 320", "M 320 320 L 285 240", "M 320 240 L 285 150" // Angular accents
  ];

  const structuralPaths = [...centralTower, ...leftTower, ...rightTower];

  // Glowing data nodes at structural vertices
  const nodes = [
    { cx: 225, cy: 30 }, { cx: 225, cy: 70 }, { cx: 200, cy: 130 }, { cx: 250, cy: 130 },
    { cx: 165, cy: 150 }, { cx: 130, cy: 200 }, { cx: 285, cy: 150 }, { cx: 320, cy: 200 }
  ];

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050B14] overflow-hidden"
        >
          {/* Map Background Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 bg-center bg-no-repeat bg-contain md:bg-cover opacity-10"
            style={{ backgroundImage: "url('https://www.briotech.com/wp-content/uploads/2025/04/usa-01-2048x1448.png')" }}
          />

          {/* High-Tech Blueprint Background Grid */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {/* CSS Animation Styles for Cranes */}
          <style>
            {`
              @keyframes jibSwing {
                0% { transform: rotate(-10deg); }
                100% { transform: rotate(20deg); }
              }
              @keyframes hookDrop {
                0% { height: 10px; }
                50% { height: 60px; }
                100% { height: 10px; }
              }
              .crane-jib {
                animation: jibSwing 2.5s ease-in-out infinite alternate;
                transform-origin: 20px center;
              }
              .crane-hook {
                animation: hookDrop 2.5s ease-in-out infinite alternate;
              }
            `}
          </style>

          <div className="relative z-30 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-8 gap-8 md:gap-16">
            
            {/* Left: Elegant Logo */}
            <div className="flex-1 flex justify-end">
              <AnimatePresence>
                {showLogo && (
                  <motion.div
                    initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center md:items-end text-center md:text-right"
                  >
                    <div className="bg-[#0A192F]/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-[#F5B301]/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] flex flex-col items-center md:items-end z-50 relative">
                      
                      {/* Elegant Typographic Logo */}
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6"
                      >
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 rounded-full border border-[#F5B301]/40 animate-[spin_6s_linear_infinite]"></div>
                        {/* Inner elegant monogram */}
                        <div className="absolute inset-2 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shadow-[0_0_20px_rgba(245,179,1,0.15)]">
                          <span className="text-3xl md:text-4xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300 ml-1">
                            DES
                          </span>
                        </div>
                      </motion.div>

                      <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-white text-3xl md:text-4xl font-bold tracking-[0.15em]"
                      >
                        DYNAMIC
                      </motion.h1>
                      <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="h-[2px] bg-gradient-to-r from-transparent md:from-[#F5B301]/50 via-[#F5B301] to-transparent md:to-transparent mt-3 mb-3 max-w-[200px] w-full"
                      />
                      <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-400 text-sm md:text-base font-light tracking-[0.2em] uppercase"
                      >
                        Engineering Services
                      </motion.h2>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Futuristic HUD Tower Animation */}
            <div className="flex-1 flex justify-start relative w-full max-w-[450px] h-[400px] md:h-[450px]">
              
              {/* Holographic Container */}
              <div className="relative w-full h-full overflow-hidden flex items-end justify-center">
                
                {/* Ground Tech Rings (Isometric HUD base) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 perspective-[1000px] pointer-events-none z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotateX: 75 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 75 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-[280px] md:w-[380px] h-[280px] md:h-[380px] rounded-full border-[1.5px] border-[#F5B301]/30 shadow-[0_0_40px_rgba(245,179,1,0.2)] relative flex items-center justify-center"
                  >
                    <div className="absolute w-[85%] h-[85%] rounded-full border border-[#F5B301]/40 animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-[#F5B301]/50 border-dashed animate-[spin_12s_linear_infinite_reverse]"></div>
                  </motion.div>
                </div>

                <div className="relative w-[300px] md:w-[450px] h-[300px] md:h-[450px]">
                  <svg viewBox="0 -30 450 480" className="w-full h-full relative z-20">
                  <defs>
                    {/* Glowing holographic gradient */}
                    <linearGradient id="techGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="25%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#F5B301" stopOpacity="1" />
                    </linearGradient>
                    {/* Subtle blur for glowing effect */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Draw the structural wireframe */}
                  {structuralPaths.map((path, i) => (
                    <motion.path
                      key={i}
                      d={path}
                      fill="transparent"
                      stroke="url(#techGrad)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        ease: "easeInOut",
                        delay: i * 0.03 // Rapid staggering
                      }}
                    />
                  ))}

                  {/* Glowing Nodes at Vertices */}
                  {nodes.map((node, i) => (
                    <motion.circle
                      key={`node-${i}`}
                      cx={node.cx}
                      cy={node.cy}
                      r="3"
                      fill="#FFF"
                      filter="url(#glow)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.9] }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </svg>

                {/* CSS Animated Construction Cranes (overlay matching SVG scaling) */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                  {/* Central Crane */}
                  <div className="absolute" style={{ top: '12.5%', left: '50%' }}>
                    <div className="absolute bottom-0 left-[-1px] w-[2px] h-[50px] bg-gradient-to-t from-transparent to-[#F5B301]"></div>
                    <div className="absolute bottom-[50px] left-[-15px] w-[80px] h-[2px] bg-[#F5B301] shadow-[0_0_5px_#F5B301] crane-jib">
                      <div className="absolute right-0 top-0 w-[1px] bg-[#F5B301] shadow-[0_0_5px_#F5B301] crane-hook">
                        <div className="absolute bottom-0 left-[-2px] w-[4px] h-[4px] bg-white shadow-[0_0_5px_#fff]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Left Crane */}
                  <div className="absolute" style={{ top: '37.5%', left: '36.66%' }}>
                    <div className="absolute bottom-0 left-[-1px] w-[2px] h-[40px] bg-gradient-to-t from-transparent to-[#F5B301]/70"></div>
                    <div className="absolute bottom-[40px] left-[-15px] w-[60px] h-[2px] bg-[#F5B301]/70 crane-jib" style={{ animationDelay: '-1s' }}>
                      <div className="absolute right-0 top-0 w-[1px] bg-[#F5B301]/70 crane-hook" style={{ animationDelay: '-1s' }}>
                        <div className="absolute bottom-0 left-[-1px] w-[3px] h-[3px] bg-white/80"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Crane */}
                  <div className="absolute" style={{ top: '37.5%', left: '63.33%' }}>
                    <div className="absolute bottom-0 left-[-1px] w-[2px] h-[40px] bg-gradient-to-t from-transparent to-[#F5B301]/70"></div>
                    <div className="absolute bottom-[40px] left-[-15px] w-[60px] h-[2px] bg-[#F5B301]/70 crane-jib" style={{ animationDelay: '-2s' }}>
                      <div className="absolute right-0 top-0 w-[1px] bg-[#F5B301]/70 crane-hook" style={{ animationDelay: '-2s' }}>
                        <div className="absolute bottom-0 left-[-1px] w-[3px] h-[3px] bg-white/80"></div>
                      </div>
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
