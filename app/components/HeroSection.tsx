export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="orb orb-purple w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[-10%] left-[-10%]"></div>
      <div className="orb orb-blue w-[400px] h-[400px] md:w-[700px] md:h-[700px] bottom-[-20%] right-[-10%]" style={{animationDelay: '-5s'}}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-gray-300 tracking-wide border border-white/10">
          ✨ Premium Digital Agency
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
          We Build <span className="text-gradient">Next-Gen</span> Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with a team of elite developers and designers to transform your vision into an innovative, high-performance web application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Explore Our Work
          </a>
          <a href="#contact" className="glass-panel text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
